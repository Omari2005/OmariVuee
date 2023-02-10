<script>
import useProducts from '../composables/useProducts'
import ProductList from '../ProductList.vue'
export default {
    setup(props, context) {
        const { products } = useProducts();
        function changeDoneStatus(item) {
            context.emit("onChangeDoneStatus", item);
        }
        function deleteRecord(item) {
            context.emit("onDelete", item);
        }
        function showProductDetails() {
            context.emit("onShowProductDetails", id);
        }
        return {
            products,
            changeDoneStatus,
            deleteRecord,
            showProductDetails
        };
    },
    components: { ProductList }
}
</script>

<template>
    <ul>
        <ProductList v-for="item in products" :key="item.index" :itemData="item" :renderCheckbox="changeDoneStatus"
            :renderDeleteBtn="canDelete" @onChange="changeDoneStatus($event)" @onDelete="deleteRecord($event)" @onShow="showProductDetails" />
    </ul>
</template>