<template>
  <a-space direction="vertical" :size="4" :style="{ marginBottom: '24px' }">
    <div class="login_title">忘记密码</div>
  </a-space>
  <a-form ref="forgetRef" name="forget" :model="forgetFormState">
    <a-form-item name="email" :style="{ paddingTop: '8px' }">
      <a-input
        v-model:value="forgetFormState.email"
        placeholder="请输入邮箱"
      ></a-input>
    </a-form-item>
    <a-form-item name="password" :style="{ paddingTop: '8px' }">
      <a-input-password
        v-model:value="forgetFormState.password"
        placeholder="新密码由6-20位数字和字母组合"
      ></a-input-password>
    </a-form-item>
    <a-form-item name="confirmPassword" :style="{ paddingTop: '8px' }">
      <a-input-password
        v-model:value="forgetFormState.confirmPassword"
        placeholder="新密码由6-20位数字和字母组合"
      ></a-input-password>
    </a-form-item>
    <a-form-item :style="{ paddingTop: '16px', marginBottom: '16px' }">
      <a-button
        type="primary"
        shape="round"
        html-type="submit"
        :disabled="forgetFormDisabled"
        :style="{ width: '100%', height: '40px' }"
      >
        立即重置
      </a-button>
    </a-form-item>
    <a-row justify="end" align="middle">
      <a-col>
        <a-button
          type="link"
          :style="{ height: '20px', padding: '0' }"
          @click="toLogin"
          >登录已有账号</a-button
        >
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts">
import type { FormInstance } from "ant-design-vue";
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";

interface ForgetFormState {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
}

export default defineComponent({
  setup() {
    const router = useRouter();

    const forgetRef = ref<FormInstance>();
    const forgetFormState = ref<ForgetFormState>({
      email: "",
      code: "",
      password: "",
      confirmPassword: "",
    });
    const forgetFormDisabled = computed(() => {
      return true;
    });

    const toLogin = () => {
      router.push({ path: "/login", replace: true });
    };

    return {
      forgetRef,
      forgetFormState,
      forgetFormDisabled,
      toLogin,
    };
  },
});
</script>
