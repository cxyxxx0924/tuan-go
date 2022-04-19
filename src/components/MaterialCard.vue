<template>
  <n-card :hoverable="true" class="card" @click="hanleCard">
    <template #header>
      <div class="card-header">
        <n-space vertical>
          <n-space>
            <n-tag type="error" size="small">
              <span>{{ product.productCategory }}</span>
            </n-tag>
            <template v-if="product.addressType === '1'">
              <n-tag type="info" size="small"> 官方 </n-tag>
            </template>
          </n-space>
          <n-ellipsis style="max-width: 300px">
            <label class="label-header">
              {{ product.productName }}
            </label>
          </n-ellipsis>
        </n-space>
      </div>
    </template>

    <n-space vertical>
      <label>商品价格：{{ product.price }}</label>
      <n-ellipsis style="max-width: 300px">
        <label>配送范围：{{ product.deliverArea }}</label>
      </n-ellipsis>
      <label>起送要求：{{ product.purchaseNotes }}</label>
      <n-ellipsis style="max-width: 300px">
        <label>联系方式：{{ product.contactPhone }}</label>
      </n-ellipsis>
      <label>提供企业：{{ product.supportCompany }}</label>
    </n-space>

    <template #footer>
      <n-space justify="space-between">
        <p class="footer-label">{{ product.infoResourse }}</p>
        <p class="footer-label">{{ product.releaseTime }}</p>
      </n-space>
    </template>
  </n-card>
</template>

<script lang="ts" setup>
const { product } = defineProps<{ product: any }>();
function hanleCard() {
  console.log("productAddress", product.productAddress);
  window.location.href = product.productAddress;
}
</script>

<style lang="scss">
.card-header {
  display: flex;
}

.label-header {
  line-height: 1.2;
}

.card {
  height: 330px;
}

.footer-label {
  color: #999;
}
</style>
