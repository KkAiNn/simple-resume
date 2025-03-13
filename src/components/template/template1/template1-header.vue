<script setup lang="ts">
import { Divider, Tooltip } from 'ant-design-vue';
import Avatar from '../../layout/Avatar.vue';
defineOptions({
  name: 'template1-header'
})
</script>

<template>
  <div class="flex items-center border-b-[1px] border-b-solid border-b-[#d9d9d9] pb-[20px] header-info">
    <Avatar />
    <UserInfo />
  </div>
</template>

<style scoped lang="scss">
// .header-info {}

.avatar {
  /* 1寸 */
  width: 25mm;
  height: 35mm;
  /* 2寸 */
  /* width: 35mm;
  height: 49mm; */
}
</style>