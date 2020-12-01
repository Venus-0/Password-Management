<template>
  <div class="login">
    <el-row :gutter="0">
      <el-col :span="7" :offset="0" class="col1"><div>1</div></el-col>
      <el-col :span="17" :offset="0" class="col2"><div>2</div></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
<style scoped>
.col1{
  background-color: #d3dce6;
  height: 100%;
  text-align: center;
  line-height: 160px;
}
.col2{
  background-color: #e9eef3;
  height: 100%;
  text-align: center;
  line-height: 160px;
}
.el-row{
  width: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
}

.el-form {
  position: fixed;
  width: 50px;
  height: 40px;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  text-align: center;
  background-color: #1976d2;
}
</style>