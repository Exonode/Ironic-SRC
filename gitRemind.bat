rem Define "chk"
SET chk=%ERRORLEVEL%

rem Format Drive
E:
cd \Ironic-SRC

rem Update it
git pull

rem Tell me when its done
msg %Username% Pull Passed Exit Code %chk%
