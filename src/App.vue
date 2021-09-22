<template>
    <router-view />
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
body {
    background-color: #f3f5f7;
}
.clearfix:before,
.clearfix:after {
    content: '';
    display: block;
}

.clearfix:after {
    clear: both;
}

.clearfix {
    *zoom: 1;
}
li {
    list-style: none;
}
</style>
