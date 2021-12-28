<template>
  <a-layout-sider
    width="446"
    theme="light"
    :style="{
      background: 'rgba(30, 42, 189, 0.03)',
    }"
  >
    <div class="login_sider_wrap">
      <img
        src="../../assets/login-logo.png"
        width="234"
        height="64"
        class="login_sider_logo"
      />
    </div>
  </a-layout-sider>
</template>

<style lang="less">
@import "../../assets/styles/common";

.login_sider_wrap {
  .full-page();

  & > .login_sider_logo {
    position: absolute;
    top: 0;
    left: 40px;
  }
}
</style>
