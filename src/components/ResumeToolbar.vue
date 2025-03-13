<template>
  <div class="toolbar">
    <Button type="default" @click="$emit('undo')">撤销 ⬅</Button>
    <Button @click="$emit('redo')">重做 ➡</Button>
    <Button @click="$emit('export')">导出 PDF 📄</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue';

defineEmits(["undo", "redo", "export"]);

</script>

<style scoped>
.toolbar {
  /* width: 100%; */
  background: #ffffffbd;
  color: white;
  display: flex;
  padding: 10px;
  gap: 10px;
  justify-content: center;
  border-bottom: 1px solid #eee;
}
</style>
