<template>
  <div class="bigPic">
    <img src="../../static/img/zhanwei.png" 
      @dblclick="handleDBClick">
    <dialog-back :isShow="isShow"
      @on-close="closeDialog"
      bigSrc="http://10.72.90.76:9008/GetBigBgPic?496c8c076f894cd5b46ec91dd29f2fcf">
    </dialog-back>
  </div>
</template>

<script>
import DialogBack from '@/components/background'
export default {
  name: 'BigPic',
  components: { DialogBack },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    handleDBClick() {
      this.isShow = true
    },
    closeDialog() {
      this.isShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.bigPic{
  height:100%;
}
</style>


