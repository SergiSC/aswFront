<template>
    <div class="vetical-navbar">
        <img class="img-navbar" src="https://icon-library.net/images/bitbucket-icon/bitbucket-icon-8.jpg">
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
.vetical-navbar {
    width: 70px;
    height: 100%;
    background-color: var(--navbar-color);
    position: fixed;
    top:0px;
}
.img-navbar {
    width: 50px;
    height: 50px;
    margin-top: 50px;
}
</style>