#!/bin/bash

bootanim=""
until [ "$bootanim" = "stopped" ]; do
  bootanim=$(adb -e shell getprop init.svc.bootanim 2>&1)
  echo "emulator status=$bootanim"
  sleep 1
done
