<script lang="ts" setup>
import { Input, Popconfirm, Switch } from 'ant-design-vue'

const { modelValue: data = { text: '', enable: true }, class: propsClass = '' } = defineProps(['modelValue', 'emptyText', 'class'])
const emit = defineEmits(['input', 'update:modelValue'])
const editableClass = computed(() => {
  return `editable ${propsClass}`
})

const state = reactive({
  text: data.text,
  enable: data.enable
})


const openChange = (vis: boolean) => {
  console.log(vis, data)
  if (vis) {
    state.text = data.text
    state.enable = data.enable
  }
}

const confirm = () => {
  emit('update:modelValue', state)
}
</script>
<template>
  <Popconfirm icon @openChange="openChange" @confirm="confirm" cancel-text="关闭">
    <template #icon></template>
    <template #title>
      <div class="w-[200px]">
        <div class="flex items-center gap-6">
          <Input v-model:value="state.text" />
          <Switch v-model:checked="state.enable" checked-children="展" un-checked-children="关" />
        </div>
      </div>
    </template>
    <div :class="editableClass" v-if="data.enable">
      <slot>
        {{ data.text }}
      </slot>
    </div>
  </Popconfirm>
</template>