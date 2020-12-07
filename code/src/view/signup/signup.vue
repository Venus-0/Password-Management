<template>
  <div>
    <div class="head"></div>
    <el-row :gutter="0">
      <el-col :span="12" :offset="4">
        <div id="form">
          <div class="title">
            <h1 style="">注册</h1>
            <h3>填写此表单以访问PassSecured.</h3>
            <h3>注意:请妥善保管注册信息,这是您找回密码时的重要凭证</h3>
          </div>
          <el-form
            :model="signform"
            ref="signform"
            :rules="rules"
            size="small"
            :label-position="labelPosition"
            label-width="120px"
          >
            <el-form-item label="Email">
              <el-input
                v-model="signform.email"
                placeholder="Emial"
                clearable
                @blur="email2Child"
              ></el-input>
            </el-form-item>

            <el-form-item label="Password">
              <el-input
                v-model="signform.password"
                placeholder="Password"
                clearable
                @focus="pwdRequired"
                @input="Pwd2Child"
                :show-password="true"
              ></el-input>
              <transition name="slide">
                <!-- 此处写点击密码框弹出密码强度显示界面 -->
                <pwdRequired
                  v-show="visible"
                  :pwd="pwd"
                  :mail="mail"
                  @changePwdStatusEvent="changePwdStatus"
                ></pwdRequired>
              </transition>
            </el-form-item>

            <el-form-item label="Check Password">
              <el-input
                v-model="signform.passwordCheck"
                placeholder="Check Password"
                clearable
                @blur="pwdReCheck"
                :validate-event="false"
                :show-password="true"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit" :disabled="disable"
                >立即注册</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
const mailReg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
const infoStatus = {
  mailStatus: false,
  pwdStatus: false,
  pwdReCheckStatus: false,
};
import pwdRequired from "./components/pwdRequired";
export default {
  components: { pwdRequired },
  name: "signup",
  data() {
    return {
      signform: {
        email: "",
        password: "",
        passwordCheck: "",
      },
      labelPosition: "left",
      visible: false,
      pwd: "",
      mail: "",
      disable: true,
    };
  },
  watch:{
      
  },
  methods: {
    pwdRequired() {
      //设置密码强度提示
      this.visible = true;
    },
    Pwd2Child() {
      //密码传值到子组件
      this.pwd = this.signform.password;
    },
    email2Child() {
      //邮箱传值到子组件
      this.mail = this.signform.email;
      if (mailReg.test(this.signform.email)) {
        this.changeMailStatus(true);
      } else {
        this.changeMailStatus(false);
      }
      
    },
    onSubmit() {
      //注册提交事件
    },
    changeBtnStatus(status) {
      //改变提交按钮禁用状态
      this.disable = status;
    },
    //改变infoStatus中对象状态
    changeMailStatus(status) {
      infoStatus.mailStatus = status;
      console.log(infoStatus);
    },
    changePwdStatus(status) {
      infoStatus.pwdStatus = status;
      console.log(infoStatus);
    },
    changeReCheckStatus(status) {
      infoStatus.pwdReCheckStatus = status;
      console.log(infoStatus);
    },
    pwdReCheck() {
      if (this.signform.password == this.signform.passwordCheck) {
        this.changeReCheckStatus(true);
      }
      else{
        this.changeReCheckStatus(false);
      }
    },
  },
};
</script>
<style scoped>
.el-form {
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
.slide-enter-active {
  transition: 0.3s ease-in;
  transform-origin: 50% 0;
  animation: slide-down 0.3s ease-in;
}
@keyframes slide-down {
  0% {
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>