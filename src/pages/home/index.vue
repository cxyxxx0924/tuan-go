<template>
  <div class="goods-page">
    <n-space vertical>
      <SearchBar
        v-model:value="option.keyword"
        @focus="handleSearchBar"
      ></SearchBar>
      <n-select v-model:value="option.areaId" :options="areaOptions" />
      <n-select v-model:value="option.categoryId" :options="categoryOptions" />
    </n-space>
  </div>
  <router-view></router-view>
</template>
<script setup lang="ts">
import SearchBar from "components/SearchBar.vue";
import { effect, onMounted, reactive, stop } from "vue";
import { useRouter, useRoute } from "vue-router";
import { areaOptions, categoryOptions } from "utils/options";

const option: any = reactive({
  areaId: 0,
  categoryId: 0,
  keyword: "",
});

const router = useRouter();
const route = useRoute();

onMounted(() => {
  option.keyword = route.query?.keyword;
});

const runner = effect(() => {
  const query: any = {};
  if (option.areaId) query.areaId = option.areaId;
  if (option.categoryId) query.categoryId = option.categoryId;
  if (option.keyword) query.keyword = option.keyword;
  router.push({
    path: "/goods",
    query,
  });
});

function handleSearchBar() {
  stop(runner);
  router.replace({ path: "search" });
}
</script>

<style scoped lang="scss">
.goods-page {
  background-color: #fff;
  padding: 10px;
}
</style>
