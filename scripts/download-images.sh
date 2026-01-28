#!/bin/bash
# 在项目根目录运行: bash scripts/download-images.sh
# 将占位 SVG 替换为 Picsum 真实照片（需联网）

set -e
mkdir -p public/images

echo "正在下载占位图片..."
curl -L -s -o public/images/hero-bg.jpg "https://picsum.photos/seed/hero/1920/1080"
curl -L -s -o public/images/work-1.jpg "https://picsum.photos/seed/w1/800/520"
curl -L -s -o public/images/work-2.jpg "https://picsum.photos/seed/w2/800/520"
curl -L -s -o public/images/work-3.jpg "https://picsum.photos/seed/w3/800/520"
curl -L -s -o public/images/about.jpg "https://picsum.photos/seed/about/480/480"

echo "下载完成。请将代码中的 .svg 引用改为 .jpg（或同时支持优先 jpg）。"
