<template>
    <div class="newPwd">
        <el-row :gutter="0">
            <el-col class="title" :span="16" :offset="4">
                <h2>设置新密码</h2>
            </el-col>
        </el-row>
        <el-row :gutter="0">
            <el-col :span="12" :offset="6">
                <el-form
                    :model="signform"
                    ref="signform"
                    :rules="rules"
                    size="small"
                    :label-position="labelPosition"
                    label-width="120px"
                >
                    <el-form-item label="Password">
                        <el-input
                            v-model="signform.password"
                            placeholder="Password"
                            clearable
                            @focus="pwdRequired"
                            @input="Pwd2Child"
                            @blur="pwdCheck"
                            :show-password="true"
                        ></el-input>
                        <div class="component">
                            <transition name="slide">
                            <!-- 此处写点击密码框弹出密码强度显示界面 -->
                            <pwdRequired
                                v-show="visible"
                                :pwd="pwd"
                                :mail="mail"
                                @changePwdStatusEvent="changePwdStatus"
                            ></pwdRequired>
                        </transition>
                        </div>
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
                        <el-button
                            type="primary"
                            @click="onSubmit"
                            :disabled="disable"
                            >确定</el-button
                        >
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
const mailReg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
const infoStatus = {
    pwdStatus: false,
    pwdReCheckStatus: false,
};
import {forget} from '../../../../static/js/forget'
import pwdRequired from "@/view/signup/components/pwdRequired";
export default {
    components: { pwdRequired },
    name: "newPwd",
    data() {
        return {
            signform: {
                password: "",
                passwordCheck: "",
            },
            labelPosition: "left",
            visible: false,
            pwd: "",
            mail: '',
            disable: true,
        };
    },
    methods: {
        pwdRequired() {
            //设置密码强度提示
            this.mail = this.$store.state.mailAddress;
            this.visible = true;
        },
        Pwd2Child() {
            //密码传值到子组件
            this.pwd = this.signform.password;
        },
        onSubmit() {
            //注册提交事件
            let that = this;
            let UID = this.$route.params.userID
            let pwd = this.signform.password;
            let mail = this.$store.state.mailAddress;
            forget.newPwd(UID,pwd,mail).then(function (res) { 
                if(res){
                alert('修改成功')
                this.goNext()
            }
            else{
                alert('操作异常，请重试');
            }
             });
            
            
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
            } else {
                this.changeReCheckStatus(false);
            }
            if (
                infoStatus.pwdStatus &&
                infoStatus.pwdReCheckStatus
            ) {
                this.changeBtnStatus(false);
            }
        },
        pwdCheck() {
            this.visible = false;
            if (
                infoStatus.pwdStatus &&
                infoStatus.pwdReCheckStatus
            ) {
                this.changeBtnStatus(false);
            }
        },
        goNext(){
            this.$store.commit('changeActiveStatus', 3);
            this.$router.push({
                name: 'finish'
            })
        },
    },
    destroyed() {
        if (this.$store.state.activeStatus === 2) {
            this.$store.commit('changeActiveStatus', 0);
        }
    },
};
</script>
<style scoped>
.newPwd {
    overflow: scroll;   
}
.el-input {
    width: 80%;
}
.component{
    margin-top: 1%;
    margin-bottom: -3%;
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