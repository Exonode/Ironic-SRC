@echo off
rem Test Builds
If "%1"=="--test" goto GitTest

rem Emergency!
If "%1"=="-e" goto GitEmergency
rem Define "chk"
SET chk=%ERRORLEVEL%

:AutoUpdate
rem Autoupdate times
If %time%==10:00:00.00 goto GitUpdate10
If %time%==14:00:00.00 goto GitUpdate14
if %time%==20:00:00.00 goto GitUpdate20
if %time%==00:00:00.00 goto GitUpdate00
rem Reminder: Not DoS friendly...
goto AutoUpdate

:GitUpdate10
rem Dir should be fine.
rem Update it
git pull
rem Tell me when its done
msg %Username% Autoupdater: 10 AM Pull Passed [%chk%]
goto AutoUpdate

:GitUpdate14
git pull
msg %Username% Autoupdater: 2 PM Pull Passed [%chk%]
goto AutoUpdate

:GitUpdate20
git pull
msg %Username% Autoupdater: 8 PM Pull Passed [%chk%]
goto AutoUpdate

:GitUpdate00
git pull
msg %Username% Autoupdater: Midnight Pull Passed [%chk%]
goto AutoUpdate

rem Dev reasons only...
:GitTest
git pull
msg %Username% Git TEST: Git Test Passed [%chk%]
goto AutoUpdate

rem Emergency
:GitEmergency
git pull
msg %Username% Emergency Passed! [%chk%]
goto AutoUpdate
