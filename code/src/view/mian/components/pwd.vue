<template>
    <div class="log">
        <el-drawer
            title="密码生成"
            :visible.sync="visible"
            direction="ltr"
            size="30%"
            :destroy-on-close="true"
            :show-close="true"
            :wrapperClosable="true"
            :before-close="close"
        >
            
        </el-drawer>

    </div>
</template>
<script>
export default {
    name: 'pwd',
    data() {
        return {
            visible: false,
            
        }
    },
    props: {
        showPwd: Boolean
    },
    watch: {
        showPwd(newd) {
            this.visible = newd
        },

    },
    methods: {
        close(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done(this.callstate());
                })
                .catch(_ => { });
        },
        callstate() {
            this.$emit('callState', false);
        }
    },


};
</script>
<style scoped>
</style>