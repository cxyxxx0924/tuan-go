<template>
  <div class="goods-page">
    <SearchBar />
    <div class="goods">
      <n-grid
        cols="1 s:2 m:3 l:4 xl:5 2xl:6"
        :x-gap="12"
        :y-gap="8"
        responsive="screen"
      >
        <template v-for="(item, index) in items" :key="items.id">
          <n-grid-item>
            <MaterialCard :product="item" />
          </n-grid-item>
        </template>
      </n-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import MaterialCard from "components/MaterialCard.vue";
import SearchBar from "components/SearchBar.vue";
import axios from "http/axios";

const { items } = await axios("/goods/product");
const noPhones = items.filter((item) => !item.contactPhone);
console.log("noPhones", noPhones);
</script>

<style lang="scss">
.goods-page {
  margin: 10px;
}

.goods {
  margin-top: 10px;
}
</style>
