#!/bin/bash

echo $ANDROID_HOME
echo "ANDROID_HOME=~/Library/Android/sdk" >> $GITHUB_ENV
echo "PATH=$PATH:$ANDROID_HOME/tools/:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/emulator" >> $GITHUB_ENV
echo $ANDROID_HOME
appium -v
#which adb
#adb devices
#which emulator
#emulator -list-avds
echo "y" | $ANDROID_HOME/tools/bin/sdkmanager --install 'system-images;android-28;google_apis;x86_64'
echo "no" | $ANDROID_HOME/tools/bin/avdmanager create avd -n test_device -k 'system-images;android-28;google_apis;x86_64' --force
echo $ANDROID_HOME/emulator/emulator -list-avds
echo "Starting emulator"
nohup $ANDROID_HOME/emulator/emulator -avd test_device -no-snapshot > /dev/null 2>&1 &
$ANDROID_HOME/platform-tools/adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed | tr -d '\r') ]]; do sleep 1; done; input keyevent 82'
$ANDROID_HOME/platform-tools/adb devices
echo "Emulator started"
