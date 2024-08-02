<script lang="ts" setup>
import { reactive, ref, computed } from 'vue';
import draggable from 'vuedraggable';
import { useMainStore } from '~/stores/main'

const mainStore = useMainStore()

const onStartDrag = (evt: any) => {
    mainStore.onStartDrag(evt)
};

const onItemMove = (evt: any) => {
    mainStore.onItemMove(evt)
};

</script>

<template>
    <draggable v-model="mainStore.items" @start="onStartDrag" @end="onItemMove" item-key="id"
        class="inventory-top__items" :move="(evt: any) => {
            if (mainStore.items[evt.newIndex] && mainStore.items[evt.newIndex].image !== '') {
                console.error('Невозможно переместить изображение в занятую ячейку!');
                return false;
            }
        }">
        <template #item="{ element, index }">
            <div :key="element.id" class="inventory-top__item" @click="mainStore.activeInfo(element.image, index)">
                <img v-if="element.image" :src="element.image" alt="Item Image" />
                <div class="count" v-if="element.count !== 0">
                    {{ element.count }}
                </div>
            </div>
        </template>
    </draggable>
</template>

<style scoped></style>
