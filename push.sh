
# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:fengfan123/xfeng-blob.git
git push -u origin main

echo "xfeng-blog 代码提交成功 🎉🎉🎉" 
