<template>
    <div>
        <div class="head"></div>
        <div class="content">
            <el-row :gutter="0">
                <el-col :span="12" :offset="4">
                    <div id="form">
                        <div class="title">
                            <h1 style="">注册</h1>
                            <h3>填写此表单以访问PassSecured.</h3>
                            <h3>请妥善保管注册信息</h3>
                        </div>
                        <router-view></router-view>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: "signup",
    data() {
        return {
        };
    },
};
</script>
<style scoped>
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
.content {
    text-align: center;
    position: fixed;
    top: 80px;
    width: 100%;
    right: 0;
    left: 0;
    bottom: 0;
}
/* #form {
    width: 100%;
    border: 1px red solid;
} */
</style>