<template>
    <b-container fluid>
        <div class="comment">
            {{id}}
            {{text}}
            {{author}}
            {{created}}
        </div>
    </b-container>
</template>

<script>
export default {
    name: "comment",
    props: {
        id: Number,
        text: String,
        author: String,
        created: String
    }
}
</script>

<style scope>
.comment {
    border: 1px solid var(--navbar-color);
}
</style>