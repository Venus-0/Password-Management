<template>
  <div id="login">
    
    <el-row :gutter="0" id="el-row">
      <el-col :span="5" :offset="0" class="col1">
        <!-- <img src="https://web-001-wyx.oss-cn-shenzhen.aliyuncs.com/passsecured.png" > -->
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
              <el-input
                autocomplete="false"
                v-model="login.email"
                placeholder="Emial"
                clearable
                :validate-event="false"
                @blur="emailChecked"
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input
                autocomplete="false"
                v-model="login.password"
                placeholder="Password"
                :show-password="true"
                :validate-event="false"
              ></el-input>
            </el-form-item>
            <el-form-item class="forget">
              <el-link type="primary" :underline="false" href="/forget">忘记密码</el-link>
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
              没有账号？<el-link type="primary" :underline="false" href="/signup">立即注册</el-link>
            </el-form-item>
          </el-form>
        </div>
        <p>图片来自cn.bing.com</p>
      </el-col>
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
            type: "email",
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
   mounted:function(){
      this.$axios({
        method:'get',
        url:'https://api.xygeng.cn/Bing/url/',
      }).then(function(response){
        document.getElementById('el-row').style.backgroundImage = 'url('+response.data.data+')'  
      })
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
    emailChecked() {},
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
  background-color: rgba(255 , 255, 255, 0.50);
  /* background-color: rgba(233, 238, 243, 0.75); */
  height: 100%;
  text-align: center;
  line-height: 160px;
  backdrop-filter: blur(4px);
}
.el-row {
  width: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
}
.el-image{
  width: 100%;
  height: 100%;
  border: 1px red solid;
  background-size: 100% 100%;
  position: fixed;
}
.el-row{
  background-image: url('');
  background-size: cover;
  -moz-background-size:cover;
  -webkit-background-size:cover
}
p{
  
  height: 10%;
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>