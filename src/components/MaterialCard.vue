<template>
  <n-card :hoverable="true" class="card">
    <template #header>
      <div class="card-header">
        <n-tag type="error"> {{ product.productCategory }} </n-tag>
        <label class="label-header">
          {{ product.productName }}
        </label>
      </div>
    </template>
    <div>
      <p>商品价格：{{ product.price }}</p>
      <p>配送范围：{{ product.deliverArea }}</p>
      <p>起送要求：{{ product.purchaseNotes }}</p>
      <p>联系方式：{{ product.contactPhone }}</p>
      <p>提供企业：{{ product.supportCompany }}</p>
      <p>信息来源：{{ product.infoResourse }}</p>
    </div>
  </n-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const { product } = defineProps<{ product: any }>();
</script>

<style lang="scss">
.card-header {
  display: flex;
}

.label-header {
  margin-left: 20px;
  line-height: 1.2;
}

.card {
  height: 410px;
}
</style>
