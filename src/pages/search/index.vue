<template>
  <div class="search-body">
    <div class="search-header">
      <n-input class="search-bar" placeholder="搜索" @change="handleSearch">
        <template #prefix>
          <n-icon :component="FlashOutline" />
        </template>
      </n-input>
      <n-button quaternary type="error" @click="cancelSearch"> 取消 </n-button>
    </div>
    <div class="search-history">
      <n-space vertical>
        <template v-if="history.length">
          <div class="history-header">
            <h3>历史记录</h3>
            <n-button quaternary type="error" @click="removeHistory">
              删除历史
            </n-button>
          </div>
          <n-space>
            <template v-for="item of history" :key="item">
              <n-tag type="success" @click="handleSearch(item)">
                {{ item }}
              </n-tag>
            </template>
          </n-space>
        </template>
      </n-space>
    </div>
    <div class="search-history">
      <h3>热门搜索</h3>
      <n-space>
        <template v-for="item of hotSearchs" :key="item">
          <n-tag type="error" @click="handleSearch(item)"> {{ item }} </n-tag>
        </template>
      </n-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FlashOutline } from "@vicons/ionicons5";
import { useLocalStorage } from "@vueuse/core";
import { useRouter } from "vue-router";
import { hotSearchs } from "utils/options";

const router = useRouter();

const historySearch = useLocalStorage<any>("my-history", { historySearch: [] });
console.log("history", historySearch.value);
const history = historySearch.value.historySearch;

function handleSearch(value: string) {
  if (!history.find((item: any) => item === value)) history.push(value);
  router.replace({ path: "goods", query: { keyword: value } });
}

function removeHistory() {
  history.length = 0;
}

function cancelSearch() {
  router.back();
}
</script>

<style lang="scss">
.search-body {
  padding: 30px;
  padding-top: 20px;
}

.search-header {
  display: flex;
}
.search-bar {
  flex: 1;
  margin-right: 10px;
}
.search-history {
  margin-top: 30px;
}
.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
