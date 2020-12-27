<template>
  <div class="mainForm">
    <el-container :direction="vertical" style="height: 100%">
      <el-header> header </el-header>

      <el-container>
        <el-aside width="200px"> aside </el-aside>
        <el-container>
          <el-main> main </el-main>
          <el-footer> footer </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "main",
  data() {
    return {};
  },
};
</script>
<style scoped>
.mainForm,
.el-container,
#app,
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: lightgray;
  border: 1px red solid;
}
.el-aside {
  background-color: lightcyan;
  border: 1px blue solid;
}
.el-main {
  background-color: antiquewhite;
  border: 1px green solid;
}
.el-footer {
  background-color: beige;
  border: 1px yellowgreen solid;
}
</style>