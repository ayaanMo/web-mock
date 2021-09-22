<template>
    <div class="parent">
        <div class="child"></div>
    </div>
    <div class="center">123</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'TestPage',
});
</script>
<style>
.center {
    text-align: center;
    border: 1px solid red;
    height: 100px;
    line-height: 100px;
}
.center_text {
    width: 500px;
}
.parent {
    height: 200px;
    width: 200px;
    background-color: red;
}
.child {
    height: 50px;
    width: 50px;
    background-color: pink;
    margin: 0 auto;
}
</style>
