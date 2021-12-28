<template>
  <a-config-provider :locale="locale" :autoInsertSpaceInButton="false">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");

export default defineComponent({
  data() {
    return {
      locale: zhCN,
    };
  },
});
</script>

<style lang="less">
@import "./assets/styles/common";

html {
  .flex-column();
  -webkit-font-smoothing: antialiased;
}

body {
  .flex-column();
  flex: 1;
}

html,
body {
  min-width: @page-min-width;
}

#app {
  .flex-column();
  flex: 1;
  .full-page();

  & .xh_block {
    width: @page-block-width;
    margin: 0 auto;
    overflow: hidden;
  }
}
</style>
