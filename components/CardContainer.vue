<template>
    <div class="mb-5">
        <b-card-group class="grid-container">
            <slot></slot>
        </b-card-group>
        <b-container v-show="total >= 24 && to.length > 0">
            <b-row class="more-btn">
                <b-button class="more-btn" :to="to" variant="outline-light">More...</b-button>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    props: {
        to: {
            type: String,
            default: ''
        },
        total: {
            type: Number,
            default: 24
        }
    }
}
</script>
<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
}

.more-btn {
    display: flex;
    justify-content: end;
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