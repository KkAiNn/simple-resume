<script lang="ts" setup>
import Sortable from "sortablejs"

const editUserDialogRef = ref()
const form = ref({
  name: {
    text: '张三',
    enable: true
  },
  sex: {
    text: '男',
    enable: true
  },
  age: {
    text: '20',
    enable: true
  },
  workTime: {
    text: '3年',
    enable: true
  },
  education: {
    text: '本科',
    enable: true
  },
  phone: {
    text: '15029388441',
    enable: true
  },
  email: {
    text: 'user@resume.com',
    enable: true
  },
  job: {
    text: '意向岗位',
    enable: true
  },
  desc: {
    text: '已离职，正在寻找工作',
    enable: true
  }
})


const handleEditUserInfo = () => {
  editUserDialogRef.value.open()
}

onMounted(() => {
  const el = document.querySelector('#userInfo_desc')
  new Sortable(el, {
    animation: 150,
    ghostClass: 'blue-background-class'
  });
})

</script>

<template>
  <div class="userInfo flex flex-col gap-5" title="点击编辑信息">
    <Editable class=" w-fit" v-model="form.name">
      <div class="name  text-[36px]">
        {{ form.name.text }}
      </div>
    </Editable>
    <div class="flex flex-wrap items-center" id="userInfo_desc" title="按住拖拽排序">
      <Editable class="info-item" v-model="form.sex"></Editable>
      <Editable class="info-item" v-model="form.age"></Editable>
      <Editable class="info-item" v-model="form.workTime"></Editable>
      <Editable class="info-item" v-model="form.education"></Editable>
      <Editable class="info-item" v-model="form.phone"></Editable>
      <Editable class="info-item" v-model="form.email"></Editable>
      <Editable class="info-item" v-model="form.job"></Editable>
      <!-- <div class="info-item">{{ form.age }}</div>
      <div class="info-item">{{ form.workTime }}</div>
      <div class="info-item">{{ form.education }}</div>
      <div class="info-item">{{ form.phone }}</div>
      <div class="info-item">{{ form.email }}</div>
      <div class="info-item">{{ form.job }}</div> -->
    </div>
    <Editable class="info-item" v-model="form.desc"></Editable>
  </div>
  <EditUserDialog ref="editUserDialogRef" />
</template>

<style lang="scss" scoped>
.userInfo {
  margin-left: 20px;
  cursor: pointer;

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