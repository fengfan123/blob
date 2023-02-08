# 基础（配置用户名和邮箱）

## 基本配置
```js
git config --global user.name xxx 
git config --global user.email xxx@qq.com
```

创建密钥（生成的密钥默认存放在~/.ssh目录下）
```js
ssh-keygen -t rsa -C "xxx@qq.com"
```
全部回车即可，需要把公钥放到github或者gitee上，公钥是id_rsa.pub这个文件


## 基本用法
1、进入项目地址，通过命令git init将项目初始化成git本地仓库
git init  

2、将项目内所有文件都添加到暂存区
git add .

3、该命令会将git add .存入暂存区修改内容提交至本地仓库中，若文件未添加至暂存区，则提交时不会提交任何修改。
git commit -m 'xxx'   //xxx是备注名

4、在github上新建一个仓库，复制仓库地址，然后使用命令将本地仓库与远程仓库建立连接
（4.1）git remote add origin  https://gitee.com/kilobyte_1/iot.cloud       //xxx是git仓库的地址（https://gitee.com/jy_fengfan/vue-command.git）
（4.2）4.1这个步骤可能出现错误 提示fatal: remote origin already exists
执行：git remote rm origin命令,删除clone别人的项目
（4.3）再执行（4.1）的命令

5、把暂存区的代码推到远程仓库
git push -u origin master

6.拉去项目
git clone xxx  //xxx是git仓库的地址（https://gitee.com/jy_fengfan/vue-command.git）


> 需要修改文件以后，才能上传。不然不成功。

7.修改以后上传
git remote add origin https://github.com/fengfan123/xfeng-blob.git
git branch -M main
git push -u origin main

8.github上传

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/fengfan123/xfeng-blob.git
git pull origin master
git push -u origin main


