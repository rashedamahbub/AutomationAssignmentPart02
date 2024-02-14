@echo off
REM Array of suites
@REM rd /s /q ./allure results
set "suites=upload projecttree"

REM loop through the array and run npm commands
for %%s in (%suites%) do (
    call npm run %%s
)

REM Generate and serve allure report
call npm run publish