<template>
    <div class="home_layout">
        <div class="home_top">
            <div class="home_nav w">
                <!-- logo模块 -->
                <div class="hone_nav_logo"><span>Web Mock</span></div>
                <!-- 搜索模块 -->
                <div class="hone_nav_search">
                    <el-input
                        placeholder="Search Web Mock"
                        clearable
                        v-model="serchInput"
                        size="mini"
                        suffix-icon="el-icon-search"
                    ></el-input>
                </div>
                <div class="hone_nav_project">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            # 我的项目
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item icon="el-icon-s-custom">
                                    个人项目
                                </el-dropdown-item>
                                <el-dropdown-item icon="el-icon-user-solid">
                                    团队项目
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <!-- 导航栏 -->
                <div class="hone_nav_menu">
                    <ul>
                        <li class="hone_nav_workspace">
                            <i class="el-icon-s-platform"></i>
                            工作台
                        </li>
                        <li class="home_nav_data">
                            <i class="el-icon-data-analysis"></i>
                            数 据
                        </li>
                        <li class="home_nav_document">
                            <i class="el-icon-document"></i>
                            文 档
                        </li>
                    </ul>
                </div>
                <!-- 用户模块 -->
                <div id="home_nav_user">
                    <el-dropdown size="small">
                        <span class="el-dropdown-link">
                            <el-avatar
                                size="small"
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                            ></el-avatar>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item icon="el-icon-edit">编辑资料</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-switch-button" @click="exit">
                                    退出
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>
        </div>
        <div class="home_header">
            <div class="home_header_main w">
                <div class="home_header_content">
                    <div class="home_header_content_user">
                        <div class="home_header_content_user_span">
                            <i class="el-icon-user"></i>
                        </div>
                    </div>
                    <div class="home_header_content_desc">
                        <span>
                            <h2>个人项目</h2>
                            <p>这里将展示你的个人项目，当然也包括协同项目。</p>
                        </span>
                    </div>
                    <div class="home_header_content_modules">
                        <el-radio-group v-model="modulesRadio" size="small">
                            <el-radio-button label="全部"></el-radio-button>
                            <el-radio-button label="我创建的"></el-radio-button>
                            <el-radio-button label="我加入的"></el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav_content"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'HomePage',
    data() {
        return {
            serchInput: '',
            modulesRadio: '全部',
        };
    },
    methods: {
        exit() {
            this.$router.push('/login');
        },
    },
});
</script>
<style>
.w {
    width: 1020px;
    margin: auto;
}
.home_layout {
    /* 定义flex布局 */
    display: flex;
    /* 决定主轴方向 */
    flex-direction: column;
    /* 属性定义项目在主轴上的对齐方式 */
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
}
.home_top {
    width: 100%;
    height: 60px;
    background-color: #495060;
}
.home_nav {
    height: 100%;
}
.home_nav ul li {
    float: left;
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    font-weight: 400;
    box-sizing: border-box;
}
.home_nav ul li:hover {
    cursor: pointer;
    color: #fff;
}
.home_nav div {
    float: left;
}
.hone_nav_logo {
    width: 100px;
    margin: 0 40px;
    line-height: 60px;
    text-align: center;
    color: whitesmoke;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: 0px 0px 10px black;
}
.hone_nav_search {
    height: 32px;
    width: 150px;
    margin: 14px 40px 14px 0;
}
.el-input--mini .el-input__inner {
    border: 1px solid #606774;
    background-color: #606774;
    color: rgba(255, 255, 255, 0.7);
    height: 32px;
    line-height: 32px;
}
.hone_nav_project {
    width: 140px;
    margin: 22px 20px 22px 0;
}
.el-dropdown {
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
}
.hone_nav_menu {
    margin: 19px 0;
}
.hone_nav_workspace {
    width: 104px;
}
.home_nav_data {
    width: 90px;
}
.home_nav_document {
    width: 82px;
}
#home_nav_user {
    width: 50px;
    float: right;
    margin: 16px 10px 14px 0;
}
/* 头部栏设置 */
.home_header {
    height: 110px;
    background-image: url('../assets/pic/cloud.jpeg');
    /* CSS属性 定义背景图像的重复方式*/
    background-repeat: no-repeat; /* 不重复 */
    /* 设置背景图片大小 */
    background-size: cover; /* 重点二 */
}
.home_header_main {
    height: 110px;
    overflow: hidden;
}
.home_header_content {
    height: 50px;
    margin-top: 30px;
}
.home_header_content_user {
    float: left;
    margin: 0 40px;
}
.home_header_content_user_span {
    width: 50px;
    height: 50px;
    background-color: #2d8cf0;
    border-radius: 4px;
    box-shadow: 0 10px 50px rgb(45 140 240 / 40%);
    color: #fff;
    font-size: 28px;
    text-align: center;
    line-height: 50px;
}
.home_header_content_desc {
    float: left;
    margin-top: 4px;
}
.home_header_content_desc h2 {
    font-size: 18px;
    font-weight: 700;
}
.home_header_content_desc p {
    font-size: 12px;
    color: #9a9ca0;
    font-weight: 400;
}
.home_header_content_modules {
    float: right;
    height: 32px;
    width: 214px;
    margin-top: 9px;
    margin-right: 20px;
}
.el-radio-group {
    border: 4px;
}
/* 内容区设置 */
.nav_content {
    width: 100%;
    height: 300px;
}
</style>
