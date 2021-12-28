<template>
  <a-layout>
    <login-sider />
    <login-content>
      <router-view />
    </login-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginSider from "../components/login/LoginSider.vue";
import LoginContent from "../components/login/LoginContent.vue";

export default defineComponent({
  components: {
    LoginSider,
    LoginContent,
  },
});
</script>

<style lang="less">
@import "../assets/styles/login";

.login_title {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.85);
}

.login_sub_title {
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.25);
}
</style>
