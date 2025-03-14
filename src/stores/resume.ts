import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useResumeStore = defineStore('resume', () => {
  const templateId = ref('template1')
  const resume = ref({
    profile: {
      avatar: {
        name: '头像',
        src: '',
        enable: true
      },
      name: {
        name: '姓名',
        text: '张三',
        enable: true
      },
      info: [{
        name: '性别',
        text: '男',
        enable: true
      }, {
        name: '年龄',
        text: '20',
        enable: true
      }, {
        name: '工龄',
        text: '3年',
        enable: true
      }, {
        name: '学历',
        text: '本科',
        enable: true
      }, {
        name: '手机号',
        text: '15029388441',
        enable: true
      }, {
        name: '邮箱',
        text: 'user@resume.com',
        enable: true
      }, {
        name: '意向岗位',
        text: '意向岗位',
        enable: true
      },],
      desc: {
        name: '在职状态',
        text: '已离职，正在寻找工作',
        enable: true
      }
    }
  })
  return { templateId, resume }
})
