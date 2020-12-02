<template>
  <div>
    <div class="head"></div>
    <el-row :gutter="0">
      <el-col :span="12" :offset="4">
        <div id="form">
          <div class="title">
            <h1 style="">注册</h1>
            <h3>
              填写此表单以访问PassSecured.注意:请妥善保管注册信息,这是您找回密码时的重要凭证
            </h3>
          </div>
          <el-form
            :model="signform"
            ref="signform"
            :rules="rules"
            size="small"
            :label-position="labelPosition" 
            label-width="120px"
          >
            <el-form-item label="Email" >
              <el-input
                v-model="signform.email"
                placeholder="Emial"
                clearable
              ></el-input>
            </el-form-item>

            <el-form-item label="Password">
              <el-input
                v-model="signform.password"
                placeholder="Password"
                clearable
              ></el-input>
            </el-form-item>

            <el-form-item label="Check Password">
              <el-input
                v-model="signform.passwordCheck"
                placeholder="Check Password"
                clearable
                :validate-event="false"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "signup",
  data() {
    return {
      signform: {
        email: "",
        password: "",
        passwordCheck: "",
        
      },
      labelPosition:'left'
    };
  },
};
</script>
<style scoped>
.el-form{
    margin-left: 5%;
    
}
.el-input { 
  width: 50%;
  margin-left: -20%;
} 
.title {
  text-align: left;
  font-size: 12px;
  margin-bottom: 10px;
}
.title h3 {
  margin-left: 10px;
  margin-top: 5px;
}
.head {
  background-color: #f0f0f0;
  width: 100%;
  height: 80px;
}
/* #form {
    width: 100%;
    border: 1px red solid;
} */
</style>