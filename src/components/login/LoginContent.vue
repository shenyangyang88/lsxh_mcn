<template>
  <a-layout-content :style="{ background: '#fff' }">
    <a-row justify="center" align="middle" :style="{ height: '100%' }">
      <a-col flex="0 0 auto"> <slot></slot> </a-col>
    </a-row>
  </a-layout-content>
</template>
