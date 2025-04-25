FROM rust:latest

# 安装交叉编译所需的工具
RUN apt-get update && \
    apt-get install -y pkg-config libssl-dev libwebkit2gtk-4.0-dev

# 设置工作目录
WORKDIR /app

# 将项目代码复制到容器内
COPY . .

# 安装其他依赖和构建 Tauri 项目
RUN cargo build --release --target x86_64-unknown-linux-gnu
