<template>
    <div class="finish">
        <el-row :gutter="0">
            <el-col class="title" :span="16" :offset="4">
                <h1>重置完成</h1>
                <h3>
                    稍后页面自动返回，若未返回
                    <router-link to="/">点击</router-link> 此处
                </h3>
            </el-col>
        </el-row>
    </div>
</template>
<script>
var timer;
export default {
    name: "finish",
    mounted: function () {
        this.goBack();
    },
    beforeDestory: function () {
        clearTimeout(timer);
    },
    methods: {
        goBack() {
            let that = this;
            timer = setTimeout(function () {
                that.$router.push({
                    path: "/",
                });
            }, 5000);
        },
    },
};
</script>
<style scoped>
.title {
    text-align: left;
    font-size: 12px;
    margin-bottom: 10px;
}
.title h3 {
    margin-left: 20px;
    margin-top: 5px;
}
</style>