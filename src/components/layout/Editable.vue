<script lang="ts" setup>
import { Input, Popconfirm, Switch } from 'ant-design-vue'

const { class: propsClass = '', value = null } = defineProps(['emptyText', 'class', 'value'])
const emit = defineEmits(['confirm', 'update:modelValue'])
const editableClass = computed(() => {
  return `editable ${propsClass}`
})

const state = ref({
  text: '',
  enable: true
})

watchEffect(() => {
  state.value = JSON.parse(JSON.stringify(value))
})


const openChange = (vis: boolean) => {
  if (vis) {
    state.value = JSON.parse(JSON.stringify(value))
  }
}

const confirm = () => {
  emit('confirm', state.value)
  emit('update:modelValue', state.value)
}
</script>
<template>
  <Popconfirm icon @openChange="openChange" @confirm="confirm" cancel-text="关闭" @click.stop>
    <template #icon></template>
    <template #title>
      <div class="w-[200px]">
        <div class="flex items-center gap-6">
          <Input v-model:value="state.text" />
          <Switch v-model:checked="state.enable" checked-children="展" un-checked-children="关" />
        </div>
      </div>
    </template>
    <div :class="editableClass" v-if="value?.enable">
      <slot>
        {{ value.text }}
      </slot>
    </div>
  </Popconfirm>
</template>