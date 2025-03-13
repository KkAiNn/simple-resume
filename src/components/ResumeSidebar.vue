<template>
  <div class="sidebar">
    <h3 contenteditable @beforeinput="onBeforeInput" @input="onInput" @paste="onPaste">属性</h3>
    <button @click="$emit('addElement', 'text')">文本</button>
    <button @click="$emit('addElement', 'image')">图片</button>
    <button @click="$emit('addElement', 'icon')">图标</button>
  </div>
</template>

<script lang="ts" setup>
/**
 * 重点关注的输入类型
 */
const ALLOW_INPUT_TYPE = [
  // 输入类型
  'insertParagraph', // 输入新行 (直接按下 回车)
  'insertLineBreak', // 输入换行符 (按下 shift + 回车)
  'insertText', // 输入文本
  'insertCompositionText', // 中文合成输入
  'insertFromPaste', // 粘贴输入
  'insertFromDrop', // 从别的地方拖拽输入，在 firefox 中尝试
  // 删除类型
  'deleteContentBackward', // 向前删除，即直接按下删除键
  'deleteContentForward', // 向后删除，win 按下 delete 键，mac 按下 fn + delete
  'deleteByCut', // 剪切，通过 ctrl + x 或 cmd + x 剪切
  'deleteByDrag', // 从当前输入框中拖拽到其他地方
  // 历史
  'historyUndo', // ctrl + z 或 cmd + z
  'historyRedo', // ctrl + shift + z 或 cmd + shift + z
]

// 在 onBeforeInput 中对非重点关注事件类型直接阻止
const onBeforeInput = (event: InputEvent) => {
  const target = (event.target as HTMLElement);
  const eventType = event.inputType;

  // 非重点关注的事件类型直接阻止
  if (!ALLOW_INPUT_TYPE.includes(eventType)) {
    event.preventDefault();
    return;
  }

}
const onInput = (event) => {
  console.log(event);
}

const onPaste = (event: ClipboardEvent) => {
  // 阻止默认事件，否则系统会派发一个 data 为 null 的 beforeinput 与 input 事件
  // event.preventDefault();
  // // 获取输入的纯文本内容
  // const pasteText = event.clipboardData?.getData("text") || '';
  // // 手动触发一个 beforeinput 事件，虽然这里 inputType 可以随意填写，为了语义化以及后续排错等，还是按规定触发 insertFromPaste 类型的事件。
  // if (pasteText) {
  //   event.target?.dispatchEvent(new InputEvent('beforeinput', {
  //     inputType: 'insertFromPaste',
  //     data: pasteText,
  //     bubbles: true,
  //     cancelable: true
  //   }))
  // }
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  background: #ffffffbd;
  padding: 10px;
}

button {
  display: block;
  margin: 5px 0;
}
</style>
