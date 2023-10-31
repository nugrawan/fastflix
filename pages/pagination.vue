<template>
    <div>
        <h1>Data List</h1>
        <ul>
            <li v-for="item in paginatedItems" :key="item.id">{{ item.name }}</li>
        </ul>

        <b-pagination v-model="currentPage" :total-rows="totalItems" :per-page="itemsPerPage" class="mt-3"></b-pagination>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' },
            ],
            currentPage: 1,
            itemsPerPage: 5,
        };
    },
    computed: {
        totalItems() {
            return this.items.length;
        },
        paginatedItems() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.items.slice(startIndex, endIndex);
        },
    },
};
</script>
  