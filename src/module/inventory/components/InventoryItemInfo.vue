<script lang="ts" setup>
import { ref } from 'vue'
import { useMainStore } from '~/stores/main'
import closeIcon from '~/assets/images/close-icon.svg'

const mainStore = useMainStore()
let count = ref('')
</script>

<template>
    <div class="inventory-top__info" :class="{ active: mainStore.info }">
        <button class="inventory-top__info-close" @click="mainStore.deActiveInfo">
            <img :src="closeIcon" alt="">
        </button>
        <div class="inventory-top__info-img">
            <img :src="mainStore.infoImg" alt="">
        </div>
        <div class="inventory-top__info-title skeleton"></div>
        <div class="inventory-top__info-text-1 skeleton"></div>
        <div class="inventory-top__info-text-2 skeleton"></div>
        <div class="inventory-top__info-text-3 skeleton"></div>
        <div class="inventory-top__info-text-4 skeleton"></div>
        <div class="inventory-top__info-text-5 skeleton"></div>
        <div class="inventory-top__info-bottom">
            <button v-if="!mainStore.infoDelItem" class="inventory-top__info-bottom-button-del"
                @click="mainStore.infoDelItem = true">Удалить предмет</button>
            <input type="text" v-model="count" class="inventory-top__info-bottom-input" placeholder="Введите количество"
                v-if="mainStore.infoDelItem">
            <div class="inventory-top__info-bottom-buttons" v-if="mainStore.infoDelItem">
                <button class="inventory-top__info-bottom-button-cancel"
                    @click="mainStore.infoDelItem = false">Отмена</button>
                <button class="inventory-top__info-bottom-button-accept"
                    @click="mainStore.deleteItem(count)">Подтвердить</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>