<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col align-self="center" class="text-center p-5 mt-5 err-cont">
                <b-icon icon="exclamation-triangle-fill" scale="3" variant="warning"></b-icon>
                <div class="m-3">
                    <h1 v-if="error.statusCode === 404">Page not found</h1>
                    <h1 v-else>An error occurred</h1>
                </div>
                <NuxtLink to="/">Back to Home</NuxtLink>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    props: ['error'],
}
</script>
<style scoped>
.err-cont {
    min-height: 40vh;
}
</style>