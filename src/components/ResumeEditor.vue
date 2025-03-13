<template>
  <div class="flex flex-col h-screen">
    <ResumeToolbar @undo="undo" @redo="redo" @export="exportPDF" />
    <div class="flex-1 flex overflow-hidden ">
      <!-- <ResumeSidebar @addElement="addElement" /> -->
      <ResumeCanvas :elements="elements" @update="updateElement" @delete="deleteElement" ref="canvasRef" />
      <!-- <ResumeSidebar @addElement="addElement" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import jsPDF from 'jspdf';
import html2canvas from "html2canvas"
import ResumeSidebar from "./ResumeSidebar.vue";
import ResumeCanvas from "./ResumeCanvas.vue";
import ResumeToolbar from "./ResumeToolbar.vue";
import { v4 as uuidv4 } from 'uuid';

const elements = ref(); // 存储简历的所有元素
const history = ref([]);
const historyIndex = ref(-1);

const saveHistory = () => {
  history.value = history.value.slice(0, historyIndex.value + 1);
  history.value.push(JSON.stringify(elements.value));
  historyIndex.value++;
};

const undo = () => {
  if (historyIndex.value > 0) {
    historyIndex.value--;
    elements.value = JSON.parse(history.value[historyIndex.value]);
  }
};

const redo = () => {
  if (historyIndex.value < history.value.length - 1) {
    historyIndex.value++;
    elements.value = JSON.parse(history.value[historyIndex.value]);
  }
};

const addElement = (type) => {
  const newElement = {
    id: uuidv4(),
    type,
    // x: 100,
    // y: 100,
    // width: 200,
    // height: 50,
    // text: type === "text" ? "请输入内容" : "",
  };
  elements.value.push(newElement);
  saveHistory();
};

const updateElement = (updatedElement) => {
  const index = elements.value.findIndex((el) => el.id === updatedElement.id);
  if (index !== -1) {
    elements.value[index] = updatedElement;
    saveHistory();
  }
};

const deleteElement = (id) => {
  elements.value = elements.value.filter((el) => el.id !== id);
  saveHistory();
};

const exportPDF = () => {
  const canvasRef = document.querySelector(".resume-canvas");
  // import("html2canvas").then((html2canvas) => {
  html2canvas(canvasRef as HTMLElement).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("resume.pdf");
  });
  // });
}; 
</script>

<style scoped>
.resume-editor {
  display: flex;
  height: 100vh;
}
</style>
