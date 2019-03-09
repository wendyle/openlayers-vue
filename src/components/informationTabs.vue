<template>
  <div class="infor-tabs">
    <div class="tabs">
      <div class="tab-person">
        <i :class="[{handleTab:nowIndex===0},{text:nowIndex!==0}]" @click="toggleTabs(0)">新增人员</i>
      </div>
      <div class="tab-control"><i :class="[{handleTab:nowIndex===1},{text:nowIndex!==1}]" @click="toggleTabs(1)">人员详情</i></div>
      <div class="tab-video"><i :class="[{handleTab:nowIndex===2},{text:nowIndex!==2}]" @click="toggleTabs(2)">视频录像</i></div>
    </div>
    <div class="tab-content">
      <!-- 新增人员组件 -->
      <new-person v-if="nowIndex===0"></new-person>
      <!-- 人员详情 -->
      <person-control v-if="nowIndex===1"></person-control>
    </div>
  </div>
</template>

<script>
import personControl from './personControl'
import newPerson from './newPerson'
export default {
  name: 'inforTabs',
  components: { newPerson, personControl },
  data() {
    return {
      index: 0,
      nowIndex: 0
    }
  },
  methods: {
    toggleTabs(index) {
      this.nowIndex = index
    }
  }
}
</script>

<style scoped>
.infor-tabs{
}
.tabs{
  width:100%;
  padding-bottom:10px;
  border-bottom:2px solid grey;
  display: inline-flex;
  font-size:18px;
  padding-left:40%;
}
.tab-person{
  background-image:url(../../static/img/box_person.png);
	background-repeat: no-repeat;
  background-size: 25px 25px;
  background-position: 10px 0px;
}
.tab-control{
  margin-left:20px;
  background-image:url(../../static/img/box_control.png);
	background-repeat: no-repeat;
  background-size: 25px 25px;
  background-position: 10px 0px;
}
.tab-video{
  margin-left:20px;
  background-image:url(../../static/img/box_vedio.png);
	background-repeat: no-repeat;
  background-size: 23px 23px;
  background-position: 10px 0px;
}
.handleTab{
  margin-left: 45px;
	margin-top: 5px;
	font-style: normal;
  color:#6288d9;
  padding-bottom:10px;
  border-bottom: 2px solid #6288d9;
}
.text{
	margin-left: 45px;
	margin-top: 5px;
	font-style: normal;
}
.tab-content{
  background:	#DCDCDC;
  width:60%;
  margin-left:18.5%;
  margin-top:20px;
}
</style>






