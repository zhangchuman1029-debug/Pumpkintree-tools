# 1. 使用官方 Python 镜像
FROM python:3.10-slim

# 2. 设置工作目录
WORKDIR /app

# 3. 先复制依赖文件
COPY requirements.txt .

# 4. 安装依赖 (这是最关键的一步，加上 --no-cache-dir 保证安装干净)
RUN pip install --no-cache-dir -r requirements.txt

# 5. 复制剩余代码
COPY . .

# 6. 暴露端口 (和你代码里一致)
EXPOSE 5001

# 7. 启动指令
CMD ["python", "converter.py"]