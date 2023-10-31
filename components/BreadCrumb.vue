<template>
    <div>
        <b-breadcrumb :items="data" variant="dark"></b-breadcrumb>
    </div>
</template>
  
<script>
export default {
    props: {
        items: {
            type: Array,
            default: function () {
                return [];
            }
        }
    },
    data() {
        return {
            data: [
                {
                    text: 'Home',
                    href: '/'
                },
                ...this.items
            ]
        }
    }
}
</script>
<style scoped>
.breadcrumb {
    padding: 1rem 0;
    background-color: black;
}

.breadcrumb a {
    color: white;
}
</style>