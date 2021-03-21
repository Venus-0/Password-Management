<template>
    <div class="mainForm">
        <el-container
            :direction="vertical"
            style="height: 100%"
        >
            <el-header class="header">
                <el-row :gutter="0">
                    <el-col
                        :span="3"
                        :offset="0"
                    >0</el-col>

                    <el-col
                        class="search"
                        :span="8"
                        :offset="1"
                    >
                        <el-input
                            placeholder="搜索"
                            v-model="input3"
                            class="input-with-select"
                        >
                            <el-button
                                slot="append"
                                icon="el-icon-search"
                            ></el-button>
                        </el-input>
                    </el-col>
                    <el-col
                        class="userFunc"
                        :span="4"
                        :offset="8"
                    >

                        <el-dropdown
                            trigger="click"
                            size="default"
                            split-button
                            circle
                        >
                            <i class="el-icon-user"></i>
                            <label>{{ $store.state.mailAddress }}</label>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item
                                    icon="el-icon-key"
                                    @click.native="showEdit()"
                                >
                                    修改密码
                                </el-dropdown-item>
                                <el-dropdown-item
                                    icon="el-icon-notebook-1"
                                    @click.native="showLog()"
                                >
                                    操作日志
                                </el-dropdown-item>
                                <el-dropdown-item
                                    icon="el-icon-lock"
                                    @click.native="showPwd()"
                                >
                                    强密码生成工具
                                </el-dropdown-item>
                                <el-dropdown-item
                                    icon="el-icon-remove-outline"
                                    divided
                                    @click.native="logout()"
                                >
                                    注销
                                </el-dropdown-item>

                            </el-dropdown-menu>
                        </el-dropdown>

                        <!-- <el-button
                            class="setting"
                            size="default"
                            icon="el-icon-setting"
                            circle
                            @click="visible = !visible"
                        ></el-button> -->

                    </el-col>
                </el-row>
            </el-header>

            <el-container>
                <el-aside width="220px">
                    <el-menu
                        @open="handleOpen"
                        @close="handleClose"
                    >
                        <el-submenu
                            v-for="(sublist, index) in list"
                            :index="index + 1"
                            :key="index"
                        >
                            <template slot="title">
                                <span>{{sublist.title}}</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item
                                    v-for="(subitem, subIndex) in sublist.menus"
                                    :index="(index + 1) + '-' + (subIndex + 1)"
                                    :key="subIndex"
                                >{{subitem.item}}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>

                    </el-menu>

                </el-aside>
                <el-container>
                    <el-main>
                        <router-view />
                    </el-main>
                </el-container>
            </el-container>
            <logForm
                :showLog="stateLog"
                @callState="callSate"
            >
            </logForm>
            <editForm
                :showEdit="stateEdit"
                @callState="callSate"
            ></editForm>
            <pwdForm
                :showPwd="statePwd"
                @callState="callSate"
            ></pwdForm>
        </el-container>

    </div>
</template>
<script>
import logForm from './components/log'
import editForm from './components/editPwd'
import pwdForm from './components/pwd'
export default {
    components: { logForm, editForm, pwdForm },
    name: "main",
    data() {
        return {
            single: true,
            isCollapse: false,
            list: '',
            stateLog: false,
            stateEdit: false,
            statePwd: false,
        }

    },
    mounted: function () {
        //获取列表信息并加载
        let dataString = this.$store.state.userData;
        this.list = JSON.parse(dataString);
    },
    methods: {
        showLog() {
            this.stateLog = true;
        },
        showEdit() {
            this.stateEdit = true;
        },
        showPwd() {
            this.statePwd = true;
        },
        callSate(state) {
            this.stateLog = false;
            this.stateEdit = false;
            this.statePwd = false;
        },
        logout() {
            //注销写在这
        }
    }
};
</script>
<style scoped>
.mainForm,
.el-container,
#app,
html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
.mainForm {
    height: calc(100vh);
}
.userFunc {
    text-align: right;
}
.el-row {
    margin-top: 0.5%;
}
.setting {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.el-main {
    border: 1px rgba(240, 240, 240, 1) solid;
}

.header {
    height: 60px;
    border: 1px rgba(245, 245, 245, 1) solid;
}

</style>