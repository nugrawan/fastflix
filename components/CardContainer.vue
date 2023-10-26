<template>
    <b-card-group class="grid-container">
        <slot></slot>
    </b-card-group>
</template>
<script>
</script>
<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
}

@media screen and (max-width : 960px) {
    .grid-container {
        grid-template-columns: repeat(6, 1fr);
    }
}

@media screen and (max-width : 580px) {
    .grid-container {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>