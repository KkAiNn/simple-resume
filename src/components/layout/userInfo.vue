<script lang="ts" setup>
import Sortable from "sortablejs"
import { useResumeStore } from "../../stores/resume"
const { resume } = storeToRefs(useResumeStore())

const form = computed(() => { return resume.value.profile })

onMounted(() => {
  const el = document.querySelector('#userInfo_desc')
  new Sortable(el, {
    animation: 150,
    ghostClass: 'blue-background-class',
    onEnd: function (evt) {
      if (evt.newIndex !== evt.oldIndex) {
        const item = form.value.info.splice(evt.oldIndex, 1)[0];
        form.value.info.splice(evt.newIndex, 0, item);
      }
    }
  });
})


const handleConfirm = (e, index: number) => {
  form.value.info[index] = e
}

</script>

<template>
  <div class="userInfo flex flex-col gap-5" title="点击编辑信息">
    <Editable class="px-[8px] text-[36px] w-fit" :value="form.name" @confirm="(e) => form.name = e"></Editable>
    <div class="flex flex-wrap items-center" id="userInfo_desc" title="按住拖拽排序">
      <Editable class="info-item" v-for="item, index in form.info" :key="item.name" :value="item"
        @confirm="(e) => handleConfirm(e, index)">
      </Editable>
      <!-- <Editable class="info-item" v-model="form.age"></Editable>
      <Editable class="info-item" v-model="form.workTime"></Editable>
      <Editable class="info-item" v-model="form.education"></Editable>
      <Editable class="info-item" v-model="form.phone"></Editable>
      <Editable class="info-item" v-model="form.email"></Editable>
      <Editable class="info-item" v-model="form.job"></Editable> -->
      <!-- <div class="info-item">{{ form.age }}</div>
      <div class="info-item">{{ form.workTime }}</div>
      <div class="info-item">{{ form.education }}</div>
      <div class="info-item">{{ form.phone }}</div>
      <div class="info-item">{{ form.email }}</div>
      <div class="info-item">{{ form.job }}</div> -->
    </div>
    <Editable class="info-item" :value="form.desc" @confirm="(e) => form.desc = e"></Editable>
  </div>
</template>

<style lang="scss" scoped>
.userInfo {
  cursor: pointer;
  flex: 1;

  .name {
    padding: 0 8px;
    font-size: 36px;
  }

  &:hover {
    .name {
      box-shadow: 0 0 5px #ccc;
    }

    :deep(.info-item) {
      box-shadow: 0 0 5px #ccc;
    }
  }
}


:deep(.info-item) {
  transition: all 0.3s;
  width: fit-content;
  border-right-color: #ccc;
  border-radius: 2px;
  border-right: 2px #ccc solid;
  cursor: alias !important;
  min-width: 10px;
  height: 14px;
  line-height: 14px;
  text-align: left;
  padding: 0 8px;
  margin: 5px 0;
  outline: 0;
  float: left;

  &:nth-last-of-type(1) {
    border-right: 1px transparent inset;
  }
}

.divider {
  width: 1px;
  background-color: #d9d9d9;
  height: 12px;
  margin: 0 5px;
}
</style>