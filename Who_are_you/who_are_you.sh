#!/usr/bin/env bash

curl -i -s -k -X $'GET' \
    -H $'Host: mercury.picoctf.net:34588' -H $'User-Agent: PicoBrowser' -H $'Referer: http://mercury.picoctf.net:34588/' -H $'Date: Sun, 1 jan 2018 00:00:00 GMT' -H $'DNT: 1' -H $'X-Forwarded-For: 104.118.217.1' -H $'Accept-Language: sv' \
    $'http://mercury.picoctf.net:34588/'
