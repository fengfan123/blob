<template>
  <main>
    <p align="center">
      <img class="avatar" src="https://tianyuhao.cn/images/auto/my.png" />
    </p>
    <h3 class="title">2023开启新的路程</h3>
    <p align="center">
      <a class="start" href="/docs/index/weblist.html">
        😊快速开始
      </a>
      <a class="github" href="https://github.com/Tyh2001" target="_blank">
        Github
      </a>
    </p>
  </main>
</template>

<style scoped>
main {
  max-width: 620px;
  margin: 40px auto;
  box-sizing: border-box;
  padding: 40px;
  padding-bottom: 0;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.title {
  text-align: center;
  font-weight: 600;
  color: #333;
  line-height: 70px;
  font-size: 22px;
}

.github,
.start {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border: none;
  outline: none;
  user-select: none;
  text-decoration: none;
  height: 35px;
  border-radius: 20px;
  transition: .3s;
  line-height: 1;
  cursor: pointer;
  padding: 0 25px;
  background: #2d5af1;
  white-space: nowrap;
  vertical-align: middle;
  color: #fff;
}

.github {
  background: #f0f0f0;
  color: #333;
  margin-left: 15px;
}

.f-button__default {
  margin-left: 15px;
}

p {
  display: block;
  line-height: 40px;
}

h3 {
  font-size: 17px;
  font-weight: 600;
  color: #333;
  line-height: 50px;
}

.write-start {
  margin-top: 50px;
}
</style>
