<script setup lang="ts">
import { Modal } from 'ant-design-vue';

const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  open.value = false;
};

defineExpose({
  open: showModal
})
</script>

<template>
  <Modal v-model:open="open" title="基本信息" centered @ok="handleOk">
    <div class=""></div>
  </Modal>
</template>