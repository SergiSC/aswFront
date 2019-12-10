<template>
    <div class="vetical-navbar">
        <div class="mx-auto">
            <img class="img-navbar" src="https://icon-library.net/images/bitbucket-icon/bitbucket-icon-8.jpg">
        </div>
        <div v-if="actualPage!='home'" class="mx-auto background-img">
            <a href="/home">
                <img class="img-navbar-home" src="../../assets/house.png" >
            </a>
        </div>
        <div v-if="actualPage!='issues'" class="mx-auto background-img">
            <a href="/issues">
                <img class="img-navbar-home" src="../../assets/list.png" >
            </a>
        </div>
        <div class="mx-auto background-img logout-img">
            <button class="bton-logout">
                <img class="img-navbar-logout" src="../../assets/logout.png" >
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data: function() {
        return {
            actualPage: String
        }
    },

    mounted: function() {
        this.actualPage = this.$route.fullPath.split('/')[1]
    },
    methods: {
    }

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
    margin: 30px auto 0 auto;
    z-index: 1;
}
.logout-img {
    position: absolute;
    bottom: 50px;
    margin-left: 10px !important;
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
.bton-logout {
    background: none;
    border: none;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
}
.bton-logout:focus {
    outline: none;
}

.img-navbar-logout {
    position: relative;
    width: 20px;
    height: 20px;    
}
</style>