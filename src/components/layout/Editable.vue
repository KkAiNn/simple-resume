<script lang="ts" setup>
const porps = defineProps(['modelValue', 'emptyText', 'class'])
const emit = defineEmits(['input', 'update:modelValue'])
const editableClass = computed(() => {
  return `editable ${porps.class}`
})
const input = (e: Event) => {
  // @ts-ignore
  let text = e.target.innerText
  emit('input', text)
}


const onBlur = (e) => {
  let text: string = e.target.innerText
  console.log(text)
  emit('update:modelValue', text.replace(/\n/g, ''))
}

</script>
<template>
  <div :class="editableClass" contenteditable @input="input" @blur="onBlur">
    <slot>{{ modelValue }}</slot>
  </div>
</template>