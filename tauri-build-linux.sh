#!/bin/bash
###
 # @Author: 曲洪利 quhongli999@163.com
 # @Date: 2025-04-21 17:49:44
 # @LastEditors: 曲洪利 quhongli999@163.com
 # @LastEditTime: 2025-04-21 17:49:50
 # @FilePath: /Ai/tauri-build-linux.sh
 # @Description: 
 # 
 # Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
### 

docker run --rm -it \
  -v "$PWD":/app \
  -w /app \
  ghcr.io/tauri-apps/tauri-docker:debian \
  bash -c "
    apt update &&
    apt install -y libwebkit2gtk-4.0-dev libgtk-3-dev squashfs-tools libayatana-appindicator3-dev &&
    npm install &&
    npm run build &&
    npx tauri build
  "
