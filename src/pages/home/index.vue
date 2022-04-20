<template>
  <div class="goods-body">
    <div class="goods-page">
      <n-space vertical>
        <SearchBar
          v-model:value="option.keywords"
          @focus="handleSearchBar"
        ></SearchBar>
        <n-select
          v-model:value="option.areaId"
          :options="areaOptions"
          @update:value="handleSelect"
        />
        <n-select
          v-model:value="option.categoryId"
          @update:value="handleSelect"
          :options="categoryOptions"
        />
      </n-space>
    </div>
    <div class="context">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import SearchBar from "components/SearchBar.vue";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { areaOptions, categoryOptions } from "@/utils/options/index.ts";

const option: any = ref({
  areaId: 0,
  categoryId: 0,
  keywords: "",
});

const router = useRouter();
const route = useRoute();

onMounted(() => {
  const { keywords, areaId, categoryId } = route.query as Record<
    string,
    string
  >;
  option.value.keywords = keywords;
  option.value.areaId = Number(areaId ? areaId : "");
  option.value.categoryId = Number(categoryId ? categoryId : "");

  handleSelect();
});

function handleSelect() {
  const query: any = {};
  const { areaId, categoryId, keywords } = option.value;

  if (areaId) query.areaId = areaId;
  if (categoryId) query.categoryId = categoryId;
  if (keywords) query.keywords = keywords;
  router.push({
    path: "/goods",
    query,
  });
}

function handleSearchBar() {
  // stop(runner);
  router.push({ path: "search" });
}
</script>

<style scoped lang="scss">
.goods-body {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.goods-page {
  background-color: #fff;
  padding: 10px;
}
.context {
  display: flex;
  flex-grow: 1;
}
</style>
