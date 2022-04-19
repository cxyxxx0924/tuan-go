<template>
  <div class="goods-page">
    <template v-if="loading">
      <n-skeleton text :repeat="10" />
      <n-skeleton text style="width: 60%" />
    </template>
    <template v-else>
      <div class="goods">
        <n-grid
          cols="1 s:2 m:3 l:4 xl:5 2xl:6"
          :x-gap="12"
          :y-gap="8"
          responsive="screen"
        >
          <template v-for="item in products" :key="products.id">
            <n-grid-item>
              <MaterialCard :product="item" />
            </n-grid-item>
          </template>
        </n-grid>
      </div>
      <div class="footer">
        <n-space justify="center">
          <n-pagination
            v-model:page="pageNum"
            :page-count="total"
            :page-slot="5"
          >
          </n-pagination>
          <!-- <n-button size="small" type="info" @click="">确定</n-button> -->
        </n-space>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import MaterialCard from "components/MaterialCard.vue";
import { axios } from "http/axios/index.ts";
import { ref, effect, onUpdated } from "vue";
import { useRoute } from "vue-router";

const pageNum = ref(1);
const total = ref(0);
const pageSize = ref(20);

const route = useRoute();
const areaId = ref();
const categoryId = ref();
onUpdated(() => {
  areaId.value = route.query.areaId;
  categoryId.value = route.query.categoryId;
});

const products = ref();

const loading = ref(true);

let productData: any;
effect(async () => {
  try {
    loading.value = true;
    productData = await axios("/goods/product", {
      params: {
        pageSize: pageSize.value,
        pageNum: pageNum.value,
        areaId: areaId.value,
        categoryId: categoryId.value,
      },
    });
    total.value = Math.ceil(productData.total / 20);
    products.value = productData.items;
    loading.value = false;
  } catch (error) {
    console.error("fetch goods has error", error);
  }
});
</script>

<style lang="scss" scoped>
.goods-page {
  background-color: #f8f8f8;
  padding: 20px;
  padding-top: 10px;
}

.goods {
  margin-top: 10px;
}

.footer {
  margin-top: 10px;
}
</style>
