<template>
  <div class="goods-page">
    <n-space vertical>
      <SearchBar @focus="handleSearchBar" />
      <n-select v-model:value="option.areaId" :options="areaOptions" />
      <n-select v-model:value="option.categoryId" :options="categoryOptions" />
    </n-space>
  </div>
  <router-view></router-view>
</template>
<script setup lang="ts">
import SearchBar from "components/SearchBar.vue";
import { effect, reactive, stop } from "vue";
import { AreaType, CategoryType } from "../goods/goodsType";
import { useRouter } from "vue-router";

const option = reactive({
  areaId: 0,
  categoryId: 0,
});
const router = useRouter();

const runner = effect(() => {
  console.log("runner");

  router.push({
    path: "/goods",
    query: { areaId: option.areaId, categoryId: option.categoryId },
  });
});

function handleSearchBar() {
  stop(runner);
  router.push({ path: "search" });
}

const areaOptions = [
  { label: "全上海", value: AreaType.QUANXUAN },
  { label: "黄浦", value: AreaType.HUANGPU },
  { label: "徐汇", value: AreaType.XUHUI },
  { label: "长宁", value: AreaType.CHANGNING },
  { label: "静安", value: AreaType.JINGAN },
  { label: "普陀", value: AreaType.PUTUO },
  { label: "虹口", value: AreaType.HONGKOU },
  { label: "杨浦", value: AreaType.YANGPU },
  { label: "闵行", value: AreaType.MINHANG },
  { label: "宝山", value: AreaType.BAOSHANG },
  { label: "嘉定", value: AreaType.JIADING },
  { label: "浦东", value: AreaType.PUDONG },
  { label: "金山", value: AreaType.JINSHANG },
  { label: "青浦", value: AreaType.QINGPU },
  { label: "奉贤", value: AreaType.FENGXIAN },
  { label: "崇明", value: AreaType.CHONGMING },
];

const categoryOptions = [
  { label: "全部", value: CategoryType.QUANXUAN },
  { label: "主食", value: CategoryType.ZHUSHI },
  { label: "零食", value: CategoryType.LINGSHI },
  { label: "母婴用品", value: CategoryType.MUYING },
  { label: "女性用品", value: CategoryType.NVXING },
  { label: "酒水饮料", value: CategoryType.JIUSHUI },
  { label: "日用品", value: CategoryType.RIYONG },
  { label: "团购平台", value: CategoryType.TUANGOU },
  { label: "超市", value: CategoryType.CHAOSHI },
  { label: "药品保健", value: CategoryType.YAOPIN },
  { label: "团餐配送", value: CategoryType.TUANCAN },
  { label: "加油站", value: CategoryType.JIAYOU },
  { label: "宠物", value: CategoryType.CHONGWU },
];
</script>

<style scoped lang="scss">
.goods-page {
  background-color: #fff;
  padding: 10px;
}
</style>
