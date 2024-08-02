<script lang="ts" setup>
import InventoryLeftCard from '~/module/inventory/components/InventoryLeftCard.vue'
import InventoryItems from '~/module/inventory/components/InventoryItems.vue'
import InventoryItemInfo from '~/module/inventory/components/InventoryItemInfo.vue'
import closeIcon from '~/assets/images/close-icon.svg'
</script>

<template>
  <div class="container">
    <div class="inventory">
      <div class="inventory-top">
        <InventoryLeftCard />
        <InventoryItems />
        <InventoryItemInfo />
      </div>
      <div class="inventory-footer">
        <div class="inventory-footer__content skeleton"></div>
        <button class="inventory-footer__close">
          <img :src="closeIcon" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>