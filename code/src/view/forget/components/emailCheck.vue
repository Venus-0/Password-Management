<template>
    <div class="mailCheck">
        <el-row :gutter="0">
            <el-col class="title" :span="16" :offset="4">
                <h2>验证邮箱</h2>
                <h4>请输入你的电子邮箱地址，我们会发送一封含有验证码的邮件.</h4>
            </el-col>
        </el-row>
        <el-row  :gutter="0">
            <el-col class="form" :span="12" :offset="6">
                <el-input class="mailText" v-model="mail"  placeholder="输入您的电子邮箱地址" size="small" clearable >
                    <el-button id="getCode" slot="append"  size="default"  @click="getMail()">获取验证码</el-button>
                </el-input>
                <el-input class="codeText" v-model="code" placeholder="输入您的验证码" size="small" clearable >
                    <el-button slot="append"  size="default" @click="checkCode()">确定</el-button>
                </el-input>
            </el-col>
        </el-row>

    </div>
</template>
<script>
var timer;
export default {
    name: "mailCheck",
    data() {
        return {
            mail:'',
        };
    },
    methods: {
        goNext() {
            this.$store.commit('changeActiveStatus', 1);
            this.$router.push({
                name: 'recovery'
            })
        },
        getMail(){
            //用户输入邮箱后获取验证码
            console.log(this.mail)
            this.$store.commit('changeMailAddress',this.mail)
            this.wait(60,document.getElementById('getCode'));
        },
        checkCode(){
            //验证验证码
            this.goNext();
        }, 
        wait(time,obj){
            let wait = time;
              if (wait == 0) {
                obj.removeAttribute("disabled");            
                obj.innerHTML="获取验证码";
                wait = 30;
            } else {
                obj.setAttribute("disabled", true);
                obj.innerHTML="重新发送("+ wait +")";
                wait--;
                let that = this;
                timer = setTimeout(function() {
                    console.log(wait);  
                    that.wait(wait,obj);
                },1000)
            }
        }
    },
    beforeDestory: function () {
        clearTimeout(timer);
    },
};
</script>
<style scoped>
.mailCheck {
    text-align: center;
    width: 100%;
    
}
.title{
    text-align: left;
    font-size: 12px;
    margin-bottom: 10px;
}
.title h4 {
    margin-left: 20px;
    margin-top: 5px;
}
.mailText{
    margin-bottom: 5%;
}
.codeText{
    width: 70%;
    
}
</style>