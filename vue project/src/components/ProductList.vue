<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()

const filteredPost = computed(() => store.getters.filteredPost)
const search = ""
const ChangeSearch = (e) => store.commit('ChangeSearch', e.target.value)

</script>
<template>
    <div class="w-full">
        <h2 class="text-2xl font-bold">Video</h2>
        <ul class="w-60 space-y-2">
            <input type="text" v-model="search" @input="ChangeSearch" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
            <li v-for="item in filteredPost" :key="item.index" class="flex flex-row justify-between items-center">
                <span>{{ item.name }} - <a :href="item.url"><img :src="item.img"></a></span>
                <button 
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    @click.prevent="store.dispatch('addItemToCartAction', item.id)"
                >Add video</button>
            </li>
        </ul>
    </div>
</template>