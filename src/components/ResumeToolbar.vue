<template>
  <div class="toolbar">
    <Tooltip title="导出PDF">
      <Button type="primary" shape="circle" @click="$emit('export')"> 📄</Button>
    </Tooltip>
    <Tooltip title="属性栏">
      <Button shape="circle" @click="openSiderbar"> 🎨</Button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Button, Tooltip } from 'ant-design-vue';
import bus from '../utils/bus';

defineEmits(["undo", "redo", "export"]);

const openSiderbar = () => {
  bus.emit('sendOpenSideBar', true)
}

</script>

<style scoped>
.toolbar {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: -2px -1px 7px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  color: white;
  display: flex;
  padding: 10px 40px;
  gap: 10px;
  justify-content: center;
}
</style>
