<template>
    <div id="forget">
        <div class="head"></div>
        <div class="content">
            <el-row :gutter="0">
                <el-col class="col-title" :span="12" :offset="4"> 
                    <div id="form">
                        <div class="title">
                            <h1>重制密码</h1>
                            <h3>忘记密码?请根据引导操作来找回您的密码</h3>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col class="col-content" :span="12" :offset="6">
                    <el-steps :active="active" finish-status="success" align-center="true" >
                        <el-step title="邮箱验证"></el-step>
                        <el-step title="恢复码验证"></el-step>
                        <el-step title="密码修改"></el-step>
                    </el-steps>
                    

                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: "forget",
    data() {
        return {
            active: 0
        };
    },
};
</script>
<style scoped>
.title h3 {
    margin-left: 10px;
    margin-top: 5px;
}
.title {
  text-align: left;
  font-size: 12px;
  margin-bottom: 10px;
}
/* .col-title {
    width: 100%;
    border: red 1px solid;
} */
.col-content{
    
    border: lightgray 1px solid;
}
.opacity{
    border: rgba(255, 255, 255, 0) solid;
}
.content {
    position: fixed;
    top: 80px;
    width: 100%;
    right: 0;
    left: 0;
    bottom: 0;
}
.head {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #f0f0f0;
    width: 100%;
    height: 80px;
}
</style>