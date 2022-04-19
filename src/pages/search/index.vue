<template>
  <div class="search-body">
    <div class="search-header">
      <SearchBar @change="handleSearch"></SearchBar>

      <n-button quaternary type="error" @click="deleteSearch">
        搜索取消
      </n-button>
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
import SearchBar from "components/SearchBar.vue";

const router = useRouter();

const historySearch = useLocalStorage<string[]>("my-history", []);
console.log("history", historySearch.value);
const history = historySearch.value;

function handleSearch(value: string) {
  console.log("value", value);

  if (!history.find((item: any) => item === value)) history.push(value);
  router.push({ path: "goods", query: { keywords: value } });
}

function removeHistory() {
  history.length = 0;
}

function cancelSearch() {
  router.back();
}
function deleteSearch() {
  router.push({ path: "goods" });
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
