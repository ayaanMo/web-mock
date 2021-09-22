<template>
    <div>
        <Login />
        <div class="login_bg"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Login from '@/components/Login.vue'; // @ is an alias to /src
export default defineComponent({
    name: 'LoginPage',
    components: {
        Login,
    },
});
</script>
<style>
.login_bg {
    width: 100%;
    height: 100vh; /* 重点一 */
    margin: 0 auto;
    background-image: url('../assets/pic/bridge.jpeg');
    /* CSS属性 定义背景图像的重复方式*/
    background-repeat: no-repeat; /* 不重复 */
    /* 设置背景图片大小 */
    background-size: cover; /* 重点二 */
    overflow: hidden;
}
</style>
