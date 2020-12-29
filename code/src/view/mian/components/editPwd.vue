<template>
    <div class="log">
        <el-drawer
            title="修改密码"
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
    name: 'editPwd',
    data() {
        return {
            visible: false,
            
        }
    },
    props: {
        showEdit: Boolean
    },
    watch: {
        showEdit(newd) {
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