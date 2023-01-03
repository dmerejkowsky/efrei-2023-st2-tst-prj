import datetime
import re
from playwright.sync_api import Playwright, sync_playwright, Page, expect

import pytest 
from dataclasses import dataclass

## Creer une classe user ?

BASE_URL = "https://y.hr.dmerej.info/"
RESET_PATH = "reset_db"

@dataclass
class Employee:
    name: str
    email: str
    address_line_1: str
    address_line_2: str
    city: str
    zip_code: str
    date: str
    title: str
    manager: bool = False

employee = Employee(name="Employee 1", 
                        email="email1@test.com", 
                        address_line_1="123 Fake Street", 
                        address_line_2="Appt 42", 
                        city="Paris", 
                        zip_code="75001", 
                        date="2023-01-01", title="General Manager")

@pytest.fixture(scope="function", autouse=True)
def before_each_after_each(page: Page):
    # Go to the starting url before each test.
    page.goto(BASE_URL)
    yield
    clean_database(page)

def clean_database(page: Page):
    page.goto(BASE_URL + RESET_PATH)
    page.get_by_role("button", name="Proceed").click()

def add_employee(page: Page, employee: Employee):
    page.goto(BASE_URL)
    page.get_by_role("link", name="Add new employee").click()
    page.get_by_label("Name").fill(employee.name)
    page.get_by_label("Email").fill(employee.email)
    page.locator("#id_address_line1").fill(employee.address_line_1)
    page.locator("#id_address_line2").fill(employee.address_line_2)
    page.get_by_label("City").fill(employee.city)
    page.get_by_label("Zip code").fill(employee.zip_code)
    page.get_by_label("Hiring date").fill(employee.date)
    page.get_by_label("Job title").fill(employee.title)
    page.get_by_role("button", name="Add").click()
    return page

def test_1_add_employee(page: Page):
    page = add_employee(page, employee)  

    # Check if redirection
    expect(page).to_have_title(re.compile("Employees"))
    expect(page.get_by_role("cell", name=employee.name)).to_be_visible()


def test_2_update_basic_info(page: Page):
    page = add_employee(page, employee)  

    newName = 'New Name'
    newEmail = 'NewEmail@email.com'

    # page.get_by_role("link", name="List Employees").click()
    page.get_by_role("link", name="Edit").click()
    page.get_by_role("link", name="Update basic info").click()
    page.get_by_placeholder("Name").fill(newName)
    page.get_by_placeholder("Email").fill(newEmail)
    page.get_by_role("button", name="Update").click()

    page.get_by_role("link", name="Update basic info").click()

    expect(page.get_by_label("Name")).to_have_value(newName)
    expect(page.get_by_label("Email")).to_have_value(newEmail)
