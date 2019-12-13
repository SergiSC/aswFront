<template>
    <div class="layout">
        <NavBar></NavBar>
        <b-jumbotron header="Welcome to Issue Tracker" class="jumbo-home">
            <p>Your Username: Name</p>
            <b-button class="jumbo-button" href="/issues">Go to Issues List</b-button>
        </b-jumbotron>
        <p class="devteam-p">Developer team:</p>
        <b-row>
            <b-col>
                <div>
                    <b-card
                        title="Santiago Lasobras Planell"
                        img-src="https://media.licdn.com/dms/image/C4E03AQHm9yZOA_Dryg/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=-9YVW3jK2Rf1TQhFd6QQbwEUsBAxX5d-aDlIyyD00tA"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 15rem;"
                        class="mx-auto card-devteam"
                    >
                        <a href="https://www.linkedin.com/in/santiagolasobras/" target="_blank" variant="primary">LinkedIn</a>
                    </b-card>
                    </div>
            </b-col>
            <b-col>
                <div>
                    <b-card
                        title="Sergi Serrano Casalins"
                        img-src="https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/e35/15043521_1804570996456815_6262664386083553280_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=103&oh=244d6baa74175e1e8cbe46a48d0310dd&oe=5E7738E9"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 15rem;"
                        class="mx-auto card-devteam"
                    >
                        <a href="https://www.linkedin.com/in/sergi-serrano-casalins/" target="_blank" variant="primary">LinkedIn</a>
                    </b-card>
                    </div>
            </b-col>
            <b-col>
                <div>
                    <b-card
                        title="Víctor Tomàs Rodríguez"
                        img-src="https://media.licdn.com/dms/image/C5603AQElsnGYYUyD-w/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=wAvxxErTy6gLXEpmXSbNlXNJE4SONZLzyCWweoI-8LM"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 15rem;"
                        class="mx-auto card-devteam"
                    >
                        <a href="https://www.linkedin.com/in/victor-tomas-208375162/" target="_blank" variant="primary">LinkedIn</a>
                    </b-card>
                    </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import NavBar from './verticalNavBar/NavBar.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    name: 'Home',
    components: {NavBar}
}
</script>

<style scoped>
.layout {
    margin-left: 70px;
    margin-bottom: 50px;
    overflow: hidden;
}
.jumbo-home {
    margin: 50px;
    border-radius: 25px;
    border: 3px solid var(--navbar-color) !important;
    padding: 20px !important;
}
.jumbo-button{
    background-color: var(--navbar-color) !important;
    border: 1px solid var(--navbar-color) !important;
}
.jumbo-button:hover {
    background-color: white !important;
    color: var(--navbar-color);
}
.devteam-p {
    font-weight: bold;
    color: var(--navbar-color);
    display: flex;
    margin: 10px 50px;
}
.div-card {
    justify-content: center;
}
.card-devteam {
    border: 2px solid var(--navbar-color);
}
</style>