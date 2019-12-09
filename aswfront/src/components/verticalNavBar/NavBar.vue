<template>
    <div class="vetical-navbar">
        <img class="img-navbar" src="https://icon-library.net/images/bitbucket-icon/bitbucket-icon-8.jpg">
        <div class="background-img">
            <img class="img-navbar-home" src="../../assets/house.png" >
        </div>
        <div class="background-img">
            <img class="img-navbar-home" src="../../assets/list.png" >
        </div>
        <div class="background-logout-img">
            <img class="img-navbar-home" src="../../assets/list.png" >
        </div>
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
    top:0;
    left:0;
}
.background-img {
    background-color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 50px auto 0 auto;
    z-index: 1;
}
.img-navbar {
    width: 50px;
    height: 50px;
    margin-top: 50px;
}
.img-navbar-home {
    position: relative;
    width: 20px;
    height: 20px;    
    margin-top: 15px;
}
.background-logout-img {
    background-color: white;
    position: absolute;
    margin: auto;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    bottom: 50px;
    z-index: 1;
}
</style>