<template>
  <div class="preview" v-if="isShow">
    <div class="mask"></div>
    <div class="wrap">
      <div class="preview-area">
        <i class="iconfont icon-sider_delete"  @click="closeMyself"></i>
        <!-- 上半部分大图显示 -->
        <div class="img-content">
          <img class="arrow-left" src="../../static/img/pic_left.png">
          <div class="picDiv">
            <img class="bigPic" :src="bigSrc">
            <div class="control">
              <i class="iconfont icon-jietu" title="截图"></i>
              <i class="iconfont icon-renxiangcaiji" title="显示框"></i>
              <i class="iconfont icon-people-search" title="1:N检索"></i>
            </div>
          </div>
          <img class="arrow-right" src="../../static/img/pic_right.png"> 
        </div>
        <!-- 人员信息 -->
        <!-- <div class="infor"> -->
         <infor-tabs></infor-tabs>
        <!-- </div>  -->
      </div>
    </div>
  </div>
</template>

<script>
import inforTabs from './informationTabs'
export default {
  name: 'DialogBackground',
  components: { inforTabs },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    bigSrc: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  },
  methods: {
    closeMyself() {
      this.$emit('on-close')
    }
  }
}
</script>

<style lang="less" scoped>
.preview{
  .mask{
    background: #333;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2000;
    opacity: 0.85;
  }
  .wrap{
    position: fixed;
    max-height: 100%;
     overflow-y: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2000;
    .preview-area{
      
      .iconfont{
        float:right;
        font-size:40px;
        &:hover{
          color:white;
        }
      }
      .img-content{
        text-align: center;
        .arrow-left{
          position: absolute;
          top: 0;
          left:10%;
          bottom: 0;
          margin: auto;
          width: 45px;
          height: 84px;
          display: block;
          cursor: pointer;
        }
        .picDiv{
          .bigPic{
            width:60%;
            height:500px;
            position:relative;
            top:30px;  
          }
         .control{
            position:relative;
            width:15%;
            height:50px;
            background:#333;
            border-radius: 25px;
            opacity:0.5;
            top:-80px;
            left:42.5%;
           .iconfont{
              font-size:45px;
              color:grey;
              float:left;
              width:33%;
              line-height:50px;
              &:hover{
                color:white;
              }
            }
          }
        }
        .arrow-right{
          position: absolute;
          top: 0;
          right:10%;
          bottom: 0;
          margin: auto;
          width: 45px;
          height: 84px;
          display: block;
          cursor: pointer;
        } 
      }
      .infor{
        background:yellow;
      }
    }
  }
}

</style>


