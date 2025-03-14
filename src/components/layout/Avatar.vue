<script lang="ts" setup>
import AvatarImg from "@/assets/image/avatar.png"
import { useResumeStore } from "../../stores/resume";
const { resume } = storeToRefs(useResumeStore())
const { width = 120, height = 150 } = defineProps<{
  width?: number,
  height?: number
}>()
const src = ref<string>('')

const filePreview = (e) => {
  console.log(e);
  var files = e.target.files[0]
  if (!e || !window.FileReader) return  // 判断是否支持FileReader
  let reader = new FileReader()
  reader.readAsDataURL(files) // 文件转换
  reader.onloadend = function (e) {
    console.log(e)
    resume.value.profile.avatar.src = e.target.result as string
  }
}

const selectImg = () => {
  document.getElementById('filed').click()
}

const handleRemove = () => {
  resume.value.profile.avatar.src = ''
  resume.value.profile.avatar.enable = false
}

const avatarStyle = computed(() => {
  return {
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: resume.value.profile.avatar.enable ? `url(${resume.value.profile.avatar.src || AvatarImg})` : '',
    backgroundSize: `cover`,
    backgroundPosition: 'center'
  }
})
</script>

<template>
  <input type="file" id="filed" hidden="" @change="filePreview">
  <div @click="selectImg()" class="cursor-pointer flex-shrink-0 avatar" :style="avatarStyle">
    <div class=" upload_overly w-full h-full flex items-center justify-center">
      点击上传头像
    </div>
    <div class="avatar-remove" @click.stop="handleRemove">x</div>
  </div>
</template>

<style scoped lang="scss">
.avatar {
  position: relative;

  .upload_overly {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00000030;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    color: #fff;
  }

  &:hover {
    .upload_overly {
      opacity: 1;
      visibility: visible;
    }

    .avatar-remove {
      opacity: 1;
      visibility: visible;
    }
  }

  &-remove {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-color: red;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 0 5px;
  }
}
</style>