<template>
  <div id="login">
    <el-row :gutter="0">
      <el-col :span="7" :offset="0" class="col1">
        <div id="form">
          <el-form
            :model="login"
            ref="loginform"
            :rules="loginrules"
            size="medium"
          >
            <el-form-item>
              <h2>Login</h2>
            </el-form-item>
            <el-form-item label="" prop="email">
              <el-input v-model="login.email" placeholder="Emial" clearable :validate-event="false" @blur="emailChecked"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input
                v-model="login.password"
                placeholder="Password"
                show-password="true"
                clearable
                :validate-event="false"
              ></el-input>
            </el-form-item>

            <el-form-item class="forget">
              <el-link type="primary">Forget password?</el-link>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                size="default"
                @click="submitForm('loginform')"
                >Login</el-button
              >
            </el-form-item>
            <el-form-item class="reg">
              没有账号？<el-link type="primary">立即注册</el-link>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="17" :offset="0" class="col2"><div></div></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      loginrules: {
        email: [
          {
            type: 'email',
            required: true,
            message: "Please enter your email",
            
          },
        ],
        password: [
          {
            required: true,
            message: "Please enter your password",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formname) {
      //登录表单验证
      this.$refs[formname].validate((valid) => {
        if (valid) {
          //返回后台
        } else {
          return false;
        }
      });
    },
    //当用户输入完邮箱后返回后台验证用户是否存在
    emailChecked(){
      
    }
  },
};
</script>
<style scoped>
.reg {
  display: inline/inline-block;
  text-align: right;
  margin: 0;
  margin-top: -20px;
}
.forget {
  display: inline/inline-block;
  text-align: right;
  margin: 0;
  margin-top: -20px;
}
#form {
  margin-left: 15%;
  margin-top: 30%;
  margin-right: 15%;
}
.el-input,
.el-button {
  margin-top: 20px;
  width: 100%;
}
.el-form.left {
  margin: 0;
  padding: 0;
}

.col1 {
  background-color: #d3dce6;
  height: 100%;
  text-align: center;
  line-height: 160px;
}
.col2 {
  background-color: #e9eef3;
  height: 100%;
  text-align: center;
  line-height: 160px;
}
.el-row {
  width: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
}
</style>