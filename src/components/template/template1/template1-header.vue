<script setup lang="ts">
import { Divider } from 'ant-design-vue';
import Avatar from '../../layout/Avatar.vue';

const form = ref({
  name: '张三',
  sex: '男',
  age: '20',
  workTime: '3年',
  education: '本科',
  phone: '15029388441',
  email: 'user@resume.com',
  job: '意向岗位',
  desc: '已离职，正在寻找工作'
})

watchEffect(() => {
  console.log(form.value)
})

defineOptions({
  name: 'template1-header'
})
</script>

<template>
  <div class="flex items-center ">
    <Avatar />
    <div class="userInfo flex flex-col gap-5">
      <Editable v-model="form.name" class="name">
        {{ form.name }}
      </Editable>
      <div class="flex flex-wrap items-center">
        <Editable v-model="form.sex"></Editable>
        <Divider type="vertical" v-if="!!form.sex" />
        <Editable v-model="form.age"></Editable>
        <Divider type="vertical" v-if="form.age" />
        <Editable v-model="form.workTime"></Editable>
        <Divider type="vertical" v-if="form.workTime" />
        <Editable v-model="form.education"></Editable>
        <Divider type="vertical" v-if="form.education" />
        <Editable v-model="form.phone"></Editable>
        <Divider type="vertical" v-if="form.phone" />
        <Editable v-model="form.email"></Editable>
        <Divider type="vertical" v-if="form.email" />
        <Editable v-model="form.job"></Editable>
      </div>
      <Editable v-model="form.desc">
      </Editable>
    </div>
  </div>
</template>

<style scoped lang="scss">
.avatar {
  /* 1寸 */
  width: 25mm;
  height: 35mm;
  /* 2寸 */
  /* width: 35mm;
  height: 49mm; */
}

.userInfo {
  margin-left: 20px;

  .name {
    font-size: 36px;
  }
}
</style>