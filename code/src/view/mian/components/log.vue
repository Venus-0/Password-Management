<template>
    <div class="log">
        <el-drawer
            title="用户访问日志"
            :visible.sync="visible"
            direction="ltr"
            size="30%"
            :destroy-on-close="true"
            :show-close="true"
            :wrapperClosable="true"
            :before-close="close"
        >
            <el-table
                :data="tableData"
                height ="90vh"
            >
                <el-table-column
                    property="date"
                    label="日期"
                    width="200"
                ></el-table-column>
                <el-table-column
                    property="name"
                    label="姓名"
                    width="200"
                ></el-table-column>
                <el-table-column
                    property="address"
                    label="地址"
                ></el-table-column>
            </el-table>
        </el-drawer>

    </div>
</template>
<script>
export default {
    name: 'log',
    data() {
        return {
            visible: false,
            tableData: []
        }
    },
    props: {
        showLog: Boolean
    },
    watch: {
        showLog(newd) {
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