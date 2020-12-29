<template>
    <div class="mainForm">
        <el-container :direction="vertical" style="height: 100%">
            <el-header style="height: 50px">
                <el-row :gutter="0">
                    <el-col :span="3" :offset="0">0</el-col>

                    <el-col class="search" :span="8" :offset="1">
                        <el-input  placeholder="搜索"  v-model="input3" size='small' class="input-with-select">
                        <el-button
                                slot="append"
                                icon="el-icon-search"
                        ></el-button>
                        </el-input>
                    </el-col>
                    <el-col class="userFunc" :span="6" :offset="6">
                        <i class="el-icon-user"></i>
                        <label>{{ $store.state.mailAddress }}</label>
                        <el-button
                            class="setting"
                            size="default"
                            icon="el-icon-setting"
                            circle
                        ></el-button>
                    </el-col>
                </el-row>
            </el-header>

            <el-container>
                <el-aside width="200px"> aside </el-aside>
                <el-container>
                    <el-main> main </el-main>
                    <el-footer> footer </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    name: "main",
    data() {
        return {};
    },
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
.userFunc {
    text-align: right;
}
.search,.userFunc{
    margin-top: 0.5%;
}
.search{
  
}
.setting {
    background-color: #b8e9e5;
    border: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.el-col {
    
}
.el-header {
    
}
.el-aside {
    background-color: lightcyan;
    border: 1px blue solid;
}
.el-main {
    background-color: antiquewhite;
    border: 1px green solid;
}
.el-footer {
    background-color: beige;
    border: 1px yellowgreen solid;
}
</style>