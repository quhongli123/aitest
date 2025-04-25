# 使用官方 Node.js 镜像作为基础镜像
FROM node:18-alpine as react-build

# 设置工作目录
WORKDIR /app

# 安装依赖
COPY package*.json ./
RUN npm install

# 将源代码复制到容器中
COPY . .

# 构建 React 应用
RUN npm run build

# 使用 Rust 镜像作为基础镜像构建 Tauri 应用
FROM rust:1.70 as tauri-build

# 安装系统依赖和 Tauri 构建工具
RUN apt-get update && apt-get install -y \
    libwebkit2gtk-4.0-dev \
    pkg-config \
    libssl-dev \
    libgtk-3-dev \
    libdbus-1-dev \
    libgdk-pixbuf2.0-dev \
    libgtk-3-0 \
    libnotify-dev \
    libxml2-dev \
    build-essential \
    libclang-dev \
    cmake \
    curl

# 安装 Tauri 和其依赖
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 设置 Rust 环境
ENV PATH="/root/.cargo/bin:${PATH}"

# 克隆 React 项目构建
WORKDIR /app
COPY --from=react-build /app /app

# 安装 Tauri 依赖
RUN npm install --legacy-peer-deps

# 构建 Tauri 应用
RUN npm run tauri build

# 使用多平台构建生成 x64 和 ARM64 架构的应用
FROM ubuntu:20.04 as final-build

# 安装必要的工具和运行时
RUN apt-get update && apt-get install -y \
    libwebkit2gtk-4.0-dev \
    pkg-config \
    libssl-dev \
    libgtk-3-dev \
    libdbus-1-dev \
    libgdk-pixbuf2.0-dev \
    libgtk-3-0 \
    libnotify-dev \
    libxml2-dev \
    libclang-dev \
    cmake \
    curl \
    build-essential

# 复制构建好的 Tauri 应用
COPY --from=tauri-build /app/target/release/bundle /app/bundle

# 设置工作目录
WORKDIR /app

# 暴露需要的端口（如果是桌面应用则通常不需要此步骤）
EXPOSE 3000

# 启动应用
CMD ["./my-tauri-app"]
