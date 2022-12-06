---
title: "Software Testing: Project Log"
date: "Dec 6th, 2022"
author: "Alex SALMON, ..."
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

| id  | status             | date     | title                                 | comment                                                                 |
| --- | ------------------ | -------- | ------------------------------------- | ----------------------------------------------------------------------- |
| 1   | :heavy_check_mark: | 06/12/22 | Add employee                          |                                                                         |
| 2   | :heavy_check_mark: | 06/12/22 | Update Basic info                     |                                                                         |
| 3   | :x:                | 06/12/22 | Update Address Info                   | Address Line 2 not updated when other field is updated at the same time |
| 4   | :warning:          | 06/12/22 | Update Contract Info                  |                                                                         |
| 5   | :heavy_check_mark: | 06/12/22 | Promote as manager                    |                                                                         |
| 6   | :heavy_check_mark: | 06/12/22 | Remove employee                       |                                                                         |
| 7   | :warning:          | 06/12/22 | Add Two employee with same info       | Works when two employees have the same email                            |
| 8   | :heavy_check_mark: | 06/12/22 | Cannot add teams same name            |                                                                         |
| 9   | :heavy_check_mark: | 06/12/22 | Create teamteam                       |                                                                         |
| 10  | :heavy_check_mark: | 06/12/22 | Delete empty team                     |                                                                         |
| 11  | :heavy_check_mark: | 06/12/22 | Add employee to team                  |                                                                         |
| 12  | :warning:          | 06/12/22 | Add same employee to same team twice  | No error during form submission, doesn't appear in team list twice      |
| 13  | :warning:          | 06/12/22 | Add Two managers to same team         |                                                                         |
| 14  | :x:                | 06/12/22 | Delete non empty team                 | SERVER ERROR, no UI                                                     |
| 15  | :heavy_check_mark: | 06/12/22 | Employee counter incrementation       |                                                                         |
| 16  | :heavy_check_mark: | 06/12/22 | Employee counter decrementation       |                                                                         |
| 17  | :x:                | 06/12/22 | Add Employee to two teams             |                                                                         |
|     | :heavy_check_mark: | 06/12/22 | Deleted employee is removed from team |                                                                         |


-  [1] Add employee test: :heavy_check_mark:
    - Tue, 06 Dec 2022 13:43 GMT
    - yes

- [2] Update Basic info test
    - Tue, 06 Dec 2022 13:45 GMT
    - Yes

- [3] Update Address Info: X
    - Address Line 2 not updated when other field is updated at the same time
 
- [4] Update Contract Info: MAYBE ?
    - Hiring date field is disabled
    - Job title Yes

- [5] Promote as manager
    - YES

- [6] Remove employee
    - YES

- [7] Add Two employee with same info: MAYBE ?
    - Works but two employees have the same email

- [8] Cannot add teams same name: YES

- [9] Create team: YES

- [10] Delete empty team: YES

- [11] Add employee to team: YES

- [12] Add same employee to same team twice: MAYBE
    - No error during form submission, soesn't appear in team list twice

- [13] Add Two managers to same team: MAYBE
    - Works

- [14] Delete non empty team: SERVER ERROR 

- [15] Employee counter incrementation

- [16] Employee counter decrementation

- [17] Add Employee to two teams: X

- [18] Deleted employee is removed from team: YES

- [19] 