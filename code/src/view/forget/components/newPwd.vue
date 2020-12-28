<template>
    <div class="newPwd">
         <el-row :gutter="0">
            <el-col class="title" :span="16" :offset="4">
                <h2>设置新密码</h2>
            </el-col>
        </el-row>
        <el-row  :gutter="0">
            <el-col class="form" :span="12" :offset="6">
                <el-input class="recoveryText" v-model="mail"  placeholder="输入您的恢复码" size="small" clearable ></el-input>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.newPwd{
    border: red 1px solid;
    text-align: center;
}
</style>