<template>
    <div class="recovery">
        <el-row :gutter="0">
            <el-col class="title" :span="16" :offset="4">
                <h2>恢复码验证</h2>
                <h4>恢复码在您注册时已经发送至您的邮箱,这是您唯一找回密码的途径</h4>
            </el-col>
        </el-row>
         <el-row  :gutter="0">
            <el-col class="form" :span="12" :offset="6">
                <el-input class="recoveryText" v-model="recoveryKey"  placeholder="输入您的恢复码" size="small" clearable >
                    <el-button  slot="append"  size="default"  @click="checkRecovery()">确定</el-button>
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {forget} from '../../../../static/js/forget'
export default {
    name: 'recovery',
    data() {
        return {
            recoveryKey:''
        }
    },
    methods: {
        goNext(userID){
            this.$store.commit('changeActiveStatus', 2);
            this.$router.push({
                name: 'newPwd',
                params:{
                    userID:userID
                }
            })
        },
        checkRecovery(){
            //验证恢复码
            let userIdRecovery = this.$route.params.userIdRecovery;
            forget.recovery(this.recoveryKey,userIdRecovery).then((res)=>{
                this.goNext(res)
            });
        }
    },
    mounted: function () {

    },
    destroyed() {
        if (this.$store.state.activeStatus === 1) {
            this.$store.commit('changeActiveStatus', 0);
        }
    },
}
</script>
<style scoped>
.recovery {
    border: red 1px solid;
    text-align: center;
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
</style>