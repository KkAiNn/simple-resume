<template>
  <div id="resume-page" class="overflow-y-auto flex-1 flex justify-center p-[20px]">
    <div class="resume-canvas">
      <Template1 />
    </div>
  </div>
</template>

<script setup lang="ts">
import ResumeElement from "./ResumeElement.vue";
defineProps(["elements"]);
defineEmits(["update", "delete"]);
</script>

<style scoped>
.resume-canvas {
  width: 210mm;
  min-height: 297mm;
  padding: 10mm;
  background: #fff;
}
</style>
