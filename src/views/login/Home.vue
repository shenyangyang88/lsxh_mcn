<template>
  <a-space direction="vertical" :size="4" :style="{ marginBottom: '24px' }">
    <div class="login_title">欢迎使用蓝色星合</div>
    <div class="login_sub_title">MCN机构后台</div>
  </a-space>
  <a-form
    ref="loginRef"
    name="login"
    :model="loginFormState"
    :rules="loginFormRules"
    v-on:finish="loginFormFinish"
    v-on:finishFailed="loginFormFinishFailed"
  >
    <a-form-item name="email" :style="{ paddingTop: '8px' }">
      <a-input
        v-model:value="loginFormState.email"
        placeholder="请输入邮箱"
      ></a-input>
    </a-form-item>
    <a-form-item name="password" :style="{ paddingTop: '8px' }">
      <a-input-password
        v-model:value="loginFormState.password"
        placeholder="请输入密码"
      ></a-input-password>
    </a-form-item>
    <a-form-item :style="{ paddingTop: '16px', marginBottom: '16px' }">
      <a-button
        type="primary"
        shape="round"
        html-type="submit"
        :disabled="loginFormDisabled"
        :style="{ width: '100%', height: '40px' }"
      >
        登录
      </a-button>
    </a-form-item>
    <a-row justify="space-between" align="middle">
      <a-col>
        <a-button
          type="link"
          :style="{ height: '20px', padding: '0' }"
          @click="toRegister"
          >立即注册</a-button
        >
      </a-col>
      <a-col>
        <a-button
          type="text"
          :style="{
            height: '20px',
            padding: '0',
            color: 'rgba(0, 0, 0, 0.65)',
          }"
          @click="toForget"
          >忘记密码？</a-button
        >
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts">
import type { FormInstance } from "ant-design-vue";
import type { RuleObject } from "ant-design-vue/es/form";
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";

interface LoginFormState {
  email: string;
  password: string;
}

export default defineComponent({
  setup() {
    const router = useRouter();

    const loginRef = ref<FormInstance>();
    const loginFormState = ref<LoginFormState>({
      email: "",
      password: "",
    });
    let notfindEmail = "";
    let notfindPassword = "";
    const validateEmail = async (_rule: RuleObject, value: string) => {
      if (value) {
        if (/\S+@\S+\.\S+/.test(value)) {
          if (value === notfindEmail) {
            return Promise.reject("该邮箱未注册，请点击立即注册");
          }
          return Promise.resolve();
        }
        return Promise.reject("邮箱格式错误");
      }
      return Promise.resolve();
    };
    const validatePassword = async (_rule: RuleObject, value: string) => {
      if (value) {
        if (value === notfindPassword) {
          return Promise.reject("该邮箱未注册，请点击立即注册");
        }
      }
      return Promise.resolve();
    };
    const loginFormRules = {
      email: [
        {
          validator: validateEmail,
          trigger: "change",
        },
      ],
      password: [
        {
          validator: validatePassword,
          trigger: "change",
        },
      ],
    };
    const loginFormDisabled = computed(() => {
      return !(
        /\S+@\S+\.\S+/.test(loginFormState.value.email) &&
        loginFormState.value.password
      );
    });
    const loginFormFinish = (values: LoginFormState) => {
      if (loginRef.value) {
        notfindEmail = values.email;
        notfindPassword = values.password;
        loginRef.value.validateFields();
      }
    };
    const loginFormFinishFailed = ({ values }: { values: LoginFormState }) => {
      if (loginRef.value) {
        notfindEmail = values.email;
        notfindPassword = values.password;
        loginRef.value.validateFields();
      }
    };

    const toRegister = () => {
      router.push({ path: "/login/register", replace: true });
    };

    const toForget = () => {
      router.push({ path: "/login/forget", replace: true });
    };

    return {
      loginRef,
      loginFormState,
      loginFormRules,
      loginFormDisabled,
      loginFormFinish,
      loginFormFinishFailed,
      toRegister,
      toForget,
    };
  },
});
</script>
