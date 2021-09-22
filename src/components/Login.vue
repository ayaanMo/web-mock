<template>
    <div class="login_box">
        <div class="login_head" @click="animationChange('display')">
            <div class="login_title">
                <span>Web-Mock</span>
            </div>
            <div class="login_paragraph">
                <p>伪造数据,我们更高效</p>
                <p>但,不止于此</p>
            </div>
        </div>
        <div
            :class="
                isShow
                    ? 'animate__animated animate__fadeInDown'
                    : 'animate__animated animate__fadeOutUp'
            "
        >
            <el-button type="primary" size="medium" @click="animationChange('hidden')">
                开始吧
            </el-button>
        </div>
        <div
            v-show="!isShow"
            class="login_form"
            :class="
                isShow
                    ? 'animate__animated animate__fadeOutRight'
                    : 'animate__animated animate__fadeInLeft'
            "
        >
            <el-form :model="loginForm" :rules="rules" ref="loginForm">
                <el-form-item>
                    <el-button
                        type="success"
                        size="medium"
                        @click="submitForm"
                        :class="isValid ? '' : 'animate__animated animate__shakeX'"
                    >
                        登录
                    </el-button>
                </el-form-item>
                <el-form-item prop="userName">
                    <el-input
                        placeholder="用户名,没有的话会自动注册"
                        v-model="loginForm.userName"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="passWord">
                    <el-input
                        placeholder="密码"
                        v-model="loginForm.passWord"
                        type="password"
                    ></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Login',
    data() {
        return {
            isShow: true,
            loginForm: {
                userName: '',
                passWord: '',
            },
            rules: {
                userName: [{ required: true, message: '请输入用户名' }],
                passWord: [{ required: true, message: '请输入密码' }],
            },
            isValid: true,
        };
    },
    methods: {
        animationChange(val: string) {
            if (val === 'hidden') {
                this.isShow = false;
            } else {
                this.isShow = true;
                let el: any = this.$refs['loginForm'];
                this.isValid = true;
                el.resetFields();
            }
        },
        submitForm() {
            let el: any = this.$refs['loginForm'];
            el.validate((valid: boolean) => {
                if (!valid) {
                    this.isValid = false;
                    return false;
                } else {
                    this.isValid = true;
                    this.$router.push('/home');
                }
            });
        },
    },
});
</script>
<style>
.login_box {
    position: absolute;
    height: 200px;
    width: 300px;
    z-index: 1;
    top: 50%;
    left: 50%;
    margin-left: -150px;
    margin-top: -100px;
}
.login_head:hover {
    cursor: pointer;
}
.login_title {
    height: 50px;
    width: 100%;
    margin-bottom: 15px;
    text-align: center;
}
.login_title span {
    color: white;
    text-shadow: 0px 0px 10px black;
    font-size: 48px;
    line-height: 36px;
}
.el-button--medium {
    width: 320px;
}
.el-form-item {
    width: 320px;
}
.login_paragraph {
    height: 50px;
    width: 100%;
    margin-bottom: 20px;
}
.login_paragraph > p {
    margin-bottom: 10px;
}
.login_paragraph p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    line-height: 1em;
    color: white;
    min-width: 100%;
    text-align: center;
}
.login_form {
    margin-top: -35px;
}
</style>
