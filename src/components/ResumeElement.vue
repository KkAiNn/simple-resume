<template>
  <div class="element" :style="{
    position: 'absolute', top: `${props.element.y}px`, left: `${props.element.x}px`, width: `${props.element.width}px`,
    height: `${props.element.height}px`, border: '1px solid black', background: 'white',
  }" @mousedown="startDrag">
    <textarea v-if="element.type === 'text'" v-model="element.text" />
    <img v-if="element.type === 'image'" :src="element.src" alt="图片" />
    <button class="delete-btn" @click="$emit('delete', element.id)">❌</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps(["element"]);
const emit = defineEmits(["update", "delete"]);

const startDrag = (event) => {
  const startX = event.clientX - props.element.x;
  const startY = event.clientY - props.element.y;

  const onMouseMove = (e) => {
    let newX = e.clientX - startX;
    let newY = e.clientY - startY;

    newX = Math.round(newX / 20) * 20; // 吸附网格
    newY = Math.round(newY / 20) * 20;

    emit("update", { ...props.element, x: newX, y: newY });
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
};

</script>

<style scoped>
.element {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

textarea {
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  resize: none;
}

.delete-btn {
  position: absolute;
  top: -10px;
  right: -10px;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
