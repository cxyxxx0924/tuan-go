<template>
  <n-card :hoverable="true" class="card">
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
      <n-ellipsis style="max-width: 300px">
        <label>起送要求：{{ product.purchaseNotes }}</label>
      </n-ellipsis>
      <n-space>
        <label>联系方式：</label>
        <template v-if="showPhone">
          <template v-for="phone of phones" :key="phone">
            <n-button
              dashed
              type="info"
              size="small"
              @click="handlePhone(phone)"
              >{{ phone }}
            </n-button>
          </template>
        </template>

        <!-- <template v-if="product.contactPhone">
          
        </template> -->
      </n-space>
      <n-ellipsis style="max-width: 300px">
        <label>提供企业：{{ product.supportCompany }}</label>
      </n-ellipsis>
    </n-space>

    <template #footer>
      <n-space justify="space-between">
        <n-ellipsis style="max-width: 150px">
          <label class="footer-label">{{ product.infoResourse }}</label>
        </n-ellipsis>
        <label class="footer-label">{{ product.releaseTime }}</label>
      </n-space>
    </template>
  </n-card>
</template>

<script lang="ts" setup>
import { useMessage } from "naive-ui";
import useClipboard from "vue-clipboard3";
const { product } = defineProps<{ product: any }>();
const message = useMessage();
const { toClipboard } = useClipboard();

function hanleCard() {
  console.log("productAddress", product.productAddress);
  window.location.href = product.productAddress;
}
const phones = product.contactPhone.split(",");
phones.length = phones.length > 2 ? 2 : phones.length;
const showPhone = !!product.contactPhone.trim();
console.log("showPhone", showPhone);
function handlePhone(phone: string) {
  console.log("phone", phone);
  message.success("已复制联系方式");
  // copyValue(phone);
  toClipboard(phone);
}
</script>

<style lang="scss">
.card-header {
  display: flex;
}

.label-header {
  line-height: 1.2;
}

.footer-label {
  color: #999;
}
</style>
