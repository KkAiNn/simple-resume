<template>
  <div class="sidebar overflow-y-auto" :class="{ 'show': isOpen }">
    <div class="text-[28px] font-bold text-center w-full py-2">个人信息</div>
    <div v-for="item, index in formArr" :key="index" class="py-[8px]">
      <div class="backdrop-blur-8 w-full p-[12px] bg-[#ffffffbd] hover:bg-[#d8e3e7] cursor-pointer rounded-[8px]">
        <div class="text-center text-[18px] font-medium">{{ item.name }}</div>
        <div class="flex items-center justify-between py-[8px] gap-8">
          <Input v-model:value="item.text" v-if="item.name !== '头像'" />
          <Button @click="uploadAvatar" v-else>点击上传头像</Button>
          <Switch v-model:checked="item.enable" checked-children="展" un-checked-children="关" size="default" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Button, Input, Switch } from 'ant-design-vue';
import { useResumeStore } from '../stores/resume';
import bus from '../utils/bus';

onMounted(() => {
  bus.on('sendOpenSideBar', () => {
    isOpen.value = !isOpen.value
  })
})

const { resume } = storeToRefs(useResumeStore())
const form = computed(() => { return resume.value.profile })

const formArr = computed(() => {
  let arr = []
  for (const key in form.value) {
    const element = form.value[key];
    arr.push(element)
  }
  return arr
})

const isOpen = ref(false)

const hasEnable = computed(() => {
  let flag = false
  for (const key in form.value) {
    if (Object.hasOwnProperty.call(form.value, key)) {
      const element = form.value[key];
      if (!element.enable) {
        flag = true
      }
    }
  }
  return flag
})

watch(() => hasEnable.value, () => {
  if (!isOpen.value)
    isOpen.value = hasEnable.value
})

const uploadAvatar = async (e: Event) => {
  document.getElementById('filed').click()
}

</script>

<style scoped>
.sidebar {
  width: 0;
  transform: translateX(400px);
  transition: all 0.3s;

  &.show {
    background: #ffffffbd;
    width: 400px;
    padding: 10px;
    transform: translateX(0);
  }
}

button {
  display: block;
  margin: 5px 0;
}
</style>
