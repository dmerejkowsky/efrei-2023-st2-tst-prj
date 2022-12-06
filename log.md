---
title: "Software Testing: Project Log"
date: "Dec 6th, 2022"
author: "Alex SALMON, Bastien TROUBAT, ..."
---

# Sequence 1

## Test Plan 

- Test all links (url parameters)

- Add employee test
- Update Basic info test
- Update address test
- update contract test
- Promote as manager test
- Remove employee test

- Add employees with same info (name, email...)
- Add teams same name test 

- Do same for teams
- Add to team test

- Test Reset database 

- Deleted employee removed from team test 

- Employee counter incrementation test
- Employee counter decrementation test

- Check form input (incorrect values, missing, etc..)

- Check SQL Injection

- Postman endpoint check (incorrect form values) 

## Running test 1

| id  | status             | date     | title                                             | comment                                                                 |
| --- | ------------------ | -------- | ------------------------------------------------- | ----------------------------------------------------------------------- |
| 1   | :heavy_check_mark: | 06/12/22 | Add employee                                      |                                                                         |
| 2   | :heavy_check_mark: | 06/12/22 | Update Basic info                                 |                                                                         |
| 3   | :x:                | 06/12/22 | Update Address Info                               | Address Line 2 not updated when other field is updated at the same time |
| 4   | :warning:          | 06/12/22 | Update Contract Info                              | Contract date cannot be modified #2                                     |
| 5   | :heavy_check_mark: | 06/12/22 | Promote as manager                                |                                                                         |
| 6   | :heavy_check_mark: | 06/12/22 | Remove employee                                   |                                                                         |
| 7   | :warning:          | 06/12/22 | Add Two employee with same info                   | Works when two employees have the same email                            |
| 8   | :heavy_check_mark: | 06/12/22 | Cannot add teams same name                        |                                                                         |
| 9   | :heavy_check_mark: | 06/12/22 | Create team                                       |                                                                         |
| 10  | :heavy_check_mark: | 06/12/22 | Delete empty team                                 |                                                                         |
| 11  | :heavy_check_mark: | 06/12/22 | Add employee to team                              |                                                                         |
| 12  | :warning:          | 06/12/22 | Add same employee to same team twice              | No error during form submission, doesn't appear in team list twice      |
| 13  | :warning:          | 06/12/22 | Add Two managers to same team                     |                                                                         |
| 14  | :x:                | 06/12/22 | Delete non empty team                             | SERVER ERROR, no UI                                                     |
| 15  | :heavy_check_mark: | 06/12/22 | Employee counter incrementation                   |                                                                         |
| 16  | :heavy_check_mark: | 06/12/22 | Employee counter decrementation                   |                                                                         |
| 17  | :warning:          | 06/12/22 | Add Employee to two teams                         |                                                                         |
| 18  | :heavy_check_mark: | 06/12/22 | Deleted employee is removed from team             |                                                                         |
| 19  | :heavy_check_mark: | 06/12/22 | No empty info in "Edit Employee Basic Information |                                                                         |
| 20  | :x:                | 06/12/22 | Check form input                                  | Can put numbers in NAME                                                 |
| 21  | :heavy_check_mark: | 06/12/22 | No SQL Injections                                 |                                                                         |
| 22  | :heavy_check_mark: | 06/12/22 | Postman endpoint check                            | Serve checks present for employee form                                  |

## Running test 2

| id  | status             | date     | title                                             | comment                                                                 |
| --- | ------------------ | -------- | ------------------------------------------------- | ----------------------------------------------------------------------- |
| 1   | :heavy_check_mark: | 06/12/22 | Add employee                                      |                                                                         |
| 2   | :heavy_check_mark: | 06/12/22 | Update Basic info                                 |                                                                         |
| 3   | :x:                | 06/12/22 | Update Address Info                               | Address Line 2 not updated when other field is updated at the same time |
| 4   | :warning:          | 06/12/22 | Update Contract Info                              |                                                                         |
| 5   | :heavy_check_mark: | 06/12/22 | Promote as manager                                |                                                                         |
| 6   | :heavy_check_mark: | 06/12/22 | Remove employee                                   |                                                                         |
| 7   | :warning:          | 06/12/22 | Add Two employee with same info                   | Works when two employees have the same email                            |
| 8   | :heavy_check_mark: | 06/12/22 | Cannot add teams same name                        |                                                                         |
| 9   | :heavy_check_mark: | 06/12/22 | Create teamteam                                   |                                                                         |
| 10  | :heavy_check_mark: | 06/12/22 | Delete empty team                                 |                                                                         |
| 11  | :heavy_check_mark: | 06/12/22 | Add employee to team                              |                                                                         |
| 12  | :warning:          | 06/12/22 | Add same employee to same team twice              | No error during form submission, doesn't appear in team list twice      |
| 13  | :warning:          | 06/12/22 | Add Two managers to same team                     |                                                                         |
| 14  | :x:                | 06/12/22 | Delete non empty team                             | SERVER ERROR, no UI                                                     |
| 15  | :heavy_check_mark: | 06/12/22 | Employee counter incrementation                   |                                                                         |
| 16  | :heavy_check_mark: | 06/12/22 | Employee counter decrementation                   |                                                                         |
| 17  | :warning:          | 06/12/22 | Add Employee to two teams                         |                                                                         |
| 18  | :heavy_check_mark: | 06/12/22 | Deleted employee is removed from team             |                                                                         |
| 19  | :heavy_check_mark: | 06/12/22 | No empty info in "Edit Employee Basic Information |                                                                         |
| 20  | :x:                | 06/12/22 | Check form input                                  | Can put numbers in NAME                                                 |
| 21  | :heavy_check_mark: | 06/12/22 | No SQL Injections                                 |                                                                         |
| 22  | :heavy_check_mark: | 06/12/22 | Postman endpoint check                            | Serve checks present for employee form                                  |
