# git命令

## 用户信息配置
全局配置用户名字和邮箱
git congfig user.name "xxxx" --global
git config user.email "xxx@xx.com" -global

查看不同作用域的配置信息
git config --list --local
git config --list --global
git config --list --system

## 初始化仓库
```js
在已存在的项目初始化仓库
cd <project-path>
git init

新建项目并初始化仓库
git init <project-path>
```

## 提交修改
```
查看git状态
git status

提交某个文件的修改
git add <file-name>
提交已经跟踪的所有修改
git add -u
提交所有修改
git add --all
git add .
颗粒化提交修改
git add -p

提交修改到仓库
git commit -m "<message>"
直接提交所有的已跟踪的修改到仓库
git commit -a -m "<message>"
git commit -am "<message>"
修改上一次提交
git commit --amend
git commit --amend --no-edit
```

## 查看提交历史
```
查看工作区和暂存区之间的区别
git diff
查看某个文件工作区和暂存区之间的区别
git diff -- <file-name>
用于查看暂存区和上一个提交之间的区别
git diff --cached
用于展示工作区和上一次提交之间的区别
git diff HEAD
用于展示两个提交之间的区别
git diff <commit-id> <commit-id>

用于查看所有的提交
git log
用于查看最近n次提交
git log -<number>
用于展示每次提交log以及每次的改动
git log -p
用于展示每次提交log以及每次的改动的简要统计
git log --stat
用于展示一行简略信息
git log --oneline
用简单图形展示
git log --graph

用于展示上一个提交的修改
git show
用于展示特定提交的修改
git show <commit-id>
用于展示特定提交的修改的文件名
git show --name-only <commit-id>

打印最近操作所对应的commit id
git reflog
```

## 文件删除&安全重命名&忽略
```
从工作区删除文件，并且从仓库中移除对某个文件的跟踪
git rm <file-name>
只移除对该文件的跟踪，但是依旧在工作区保留文件
git rm --cached <file-name>

安全重命名
git mv <old-name> <new-name>

删除未跟踪并且未被.gitignore忽略的文件
git clean
查看哪些文件将会被删除，但是不会真正删除
git clean -n
```

## 撤销修改，代码回滚
```
撤销工作区某个文件修改
git checkout <file-name>
撤销所有文件
git checkout .
恢复某个commit的指定文件到暂存区和工作区
git checkout <commit-id> <file-name>

撤销当前暂存区的修改
git reset <file-name>
版本回退
只移动仓库中`HEAD`指针的位置，工作区和暂存区的修改都不变
git reset --soft <commit-id>
移动`HEAD`指针的位置，并使用回退的到版本重置暂存区，工作区的修改保持不变
git reset --mixed <commit-id>
移动`HEAD`指针位置，并使用回退的到版本重置工作区和暂存区，保持与指定的提交一致
git reset --hard <commit-id>

重置修改
新建一个提交重置目标提交
git revert <commit-id>
重置目标提交，但是不会新建提交，而是修改工作区和暂存区
git revert -n <commit-id>
重置多个提交（不包括start-id，但是包括end-id）
git revet <start-id>...<end-id>

在revert遇到冲突并解决冲突后，继续执行撤销操作
git revert --continue
终止revert，但保留当前的结果
git revert --quit
撤销revert
git revert --abort
```

## 分支
```
列出本地所有分支
git branch
列出所有远程分支（后文会讲解什么是远程分支）
git branch -r
列出所有本地和远程分支
git branch -a
查看分支的详细信息
git branch -v

#新建分支
git branch <branch-name>
新建分支并切换分支
git checkout -b <branch-name>
切换分支
git checkout <branch-name>
切换到上一个分支
git checkout -
删除分支(针对已经合并过的分支)
git branch -d <branch-name>
删除分支(不管是否合并)
git branch -D <branch-name>

合并分支
git merge <branch-name>
不使用fast-forward模式合并
git merge --no-ff <branch-name>

挑选一个commit合并到当前分支
git cherry-pick <commit-id>
挑选指定分支的最新提交
git cherry-pick <branch-name>
挑选连续多个提交（左开右闭，不包括start-commit）
git cherry-pick <start-comm-id>...<end-commit-id>
挑选连续多个提交（左闭右闭，包括start-commit）
git cherry-pick <start-commid-id>^...<end-commit-id>

在解决冲突后，继续执行下一个cherry-pick
git cherry-pick --continue
退出操作，保留当前进度
git cherry-pick --quit
撤销本次操作
git cherry-pick --abort
```

## 打上Tag
```
查看所有tag
git tag
筛选相应的tag
git tag -l <tag-name>
查看某个commit上所有的tag
git tag --points-at <commit-id>
查看某一个tag
git show <tag-name>
查看所有tag以及它们分别对应的commit
git show-ref --tags

新建tag
git tag <tag-name>
在指定的提交新建tag
git tag <tag-name> <commit-id>
添加一个tag和message
git tag -a <tag-name> -m <message>
删除tag
git tag -d <tag-name>

## 紧急加塞，使用stash
新建stash
git stash
指定你想要的messge信息
git stash save <message>
将未跟踪的文件也加入暂存
git stash -u
将所有文件加入暂存（即使该文件被git忽略）
git stash -a

#查看暂存的历史
git stash list
查看某一个次特定的暂存
git show stash@{<number>}

取出最近的暂存
git stash apply
取出目标暂存
git stash apply <number>
取出最近暂存，并删除该暂存的记录
git stash pop

删除最近暂存
git stash drop
删除目标暂存
git stash drop <number>
清空历史
git stash clear
```

## 变基
```
#合并分支
git rebase <branch-name>
#可以交互式的操作到commi-id为止的提交（不包括commit-id所指向提交）的所有提交
git rebase -i <commit-id
```

## 远程仓库
```
拉取代码，并使用默认的远端仓库的名字
git clone <url>
拉取代码，自定义本地仓库名字
git clone <url> <new-name>

添加远程仓库
git remote add <remote-name> <remote-url>
查看远端仓库信息
git remote -v
删除远程仓库
git remote remove <remote-name>
重命名远程操作名字
git remote rename <old-remote-name> <new-remote-name>

推送分支到特定的远程仓库，如果只有一个远程仓库可以省略，第一次推送需要加入`-u`参数
git push <remote-name> <branch-name>
推送指定tag到远端
git push <remote-name> <tag-name>
推送所有tag到远端
git push <remote-name> --tags

#拉取更新
git fetch
获取远端仓库更新，并自动合并到本地分支（相当于`git fetch && git merge`）   
git pull
使用rebase方式拉取更新
git pull --rebase
```