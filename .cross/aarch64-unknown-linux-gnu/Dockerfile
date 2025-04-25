# 基于 cross 官方提供的 aarch64 镜像
FROM ghcr.io/cross-rs/aarch64-unknown-linux-gnu:latest

# 安装构建 Tauri 所需的系统依赖项
RUN apt-get update && \
    apt-get install -y \
    pkg-config \
    libglib2.0-dev \
    libgtk-3-dev \
    libwebkit2gtk-4.0-dev \
    libappindicator3-dev \
    librsvg2-dev \
    libjavascriptcoregtk-4.1-dev \
    libwebkit2gtk-4.1-dev
