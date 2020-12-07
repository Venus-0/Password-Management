<template>
  <div class="pwdRequired">
      <div class="innerForm">
          <el-progress
      type="line"
      :percentage="pgpercent.main"
      :status="pgstatus.main"
      :stroke-width="8"
    ></el-progress>
    <h2>Our minium require:</h2>
    <div class="progress" >
        <el-progress type="circle" :percentage="pgpercent.pwdlength" :status="pgstatus.pwdlength" :stroke-width="4" width="25"></el-progress>
        <label>密码长度超过12位</label>
    </div>
    <div class="progress">
        <el-progress type="circle" :percentage="pgpercent.num" :status="pgstatus.num" :stroke-width="4" width="25"></el-progress>
        <label>至少包含一个数字</label>
    </div>
    <div class="progress">
        <el-progress type="circle" :percentage="pgpercent.upper" :status="pgstatus.upper" :stroke-width="4" width="25"></el-progress>
        <label>至少包含一个大写字母</label>
    </div>
    <div class="progress">
        <el-progress type="circle" :percentage="pgpercent.lower" :status="pgstatus.lower" :stroke-width="4" width="25"></el-progress>
        <label>至少包含一个小写字母</label>
    </div>
    <div class="progress">
        <el-progress type="circle" :percentage="pgpercent.nomail" :status="pgstatus.nomail" :stroke-width="4" width="25"></el-progress>
        <label>不是你的电子邮箱</label>
    </div>
    </div>
  </div>
</template>
<script>
// const Reg = /^(?=.*?[A-Za-z]+)(?=.*?[0-9]+)(?=.*?[A-Z]).*$/
const numReg = /^(?=.*?[0-9]+).*$/;
const upperReg =  /^(?=.*?[A-Z]+).*$/;
const lowerReg =  /^(?=.*?[a-z]+).*$/;

const data = {'mail':'','pwd':''};
export default {
    
    name: "pwdRequired",
    data(){
        return{
            pgstatus: {
                main:'warning',
                pwdlength:'warning',
                num:'warning',
                upper:'warning',
                lower:'warning',
                nomail:'warning'
            },
            pgpercent:{
                main: 0,
                pwdlength: 0,
                num: 0,
                upper: 0,
                lower: 0,
                nomail: 0,
            },
        }
    },
    props:{
        'pwd': String,
        'mail': String
    },
    watch:{
        //父空间传值到子控件后监听数值变动更改require
        pwd(newPwd){
            
            data.pwd = newPwd;
        
            this.pgpercent.pwdlength = (data.pwd.length<12)?0:100;
            this.pgpercent.num = (numReg.test(data.pwd))?100:0;
            this.pgpercent.upper = (upperReg.test(data.pwd))?100:0;
            this.pgpercent.lower = (lowerReg.test(data.pwd))?100:0;
            this.pgpercent.nomail = (data.mail!==data.pwd)?100:0;
           
            this.pgstatus.pwdlength = (data.pwd.length<12)?'warning':'success';
            this.pgstatus.num = (numReg.test(data.pwd))?'success':'warning';
            this.pgstatus.upper = (upperReg.test(data.pwd))?'success':'warning';
            this.pgstatus.lower = (lowerReg.test(data.pwd))?'success':'warning';
            this.pgstatus.nomail = (data.mail!==data.pwd)?'success':'warning';

            if(this.pgpercent.pwdlength==100&&this.pgpercent.pwdlength==this.pgpercent.num&&this.pgpercent.pwdlength==this.pgpercent.upper&&this.pgpercent.pwdlength==this.pgpercent.lower&&this.pgpercent.pwdlength==this.pgpercent.nomail){
                this.$emit('changePwdStatusEvent',true)
            }
            else{
                this.$emit('changePwdStatusEvent',false)
            }
           
        },
        //监听mail传值后监听
        mail(newMail){
            data.mail = newMail;
            console.log(newMail)
           
        }
    },
    methods:{
        
    }
};
</script>
<style scoped>
.pwdRequired {
    margin-top: 1%;
    width: 50%;
    margin-left: 15%;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.innerForm{
    border: 10px solid rgba(255, 255, 255, 0);
    text-align: left;
}
.progress{
    font-size: 16px ;
    /* border: 1px green solid; */
    /* font-weight: ; */
}
.progress label{
    margin-left: 2px;
    /* border: 1px red solid; */
}
</style>