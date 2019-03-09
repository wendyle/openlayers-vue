<template>
  <div class="new-person">
    <div class="left">
      <div>
        <span>库类型:</span>
        <select >
          <option v-for="(item,index) in libLists"
            :key="index"
            :value="item"
            :label="item">
          </option>
        </select>
      </div>
      <div>
        <span>名单库:</span>
        <select>
          <option v-for="(item,index) in nameLists"
            :key="index"
            :value="item"
            :label="item">
          </option>
        </select>
      </div>
      <div>
        <span>姓名:</span>
        <input>
      </div>
      <div>
        <span>性别:</span>
        <select>
          <option v-for="(item,index) in sexLists"
            :key="index"
            :value="item"
            :label="item">
          </option>
        </select>
      </div>
      
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
export default {
  name: 'newPerson',
  data() {
    return {
      libLists: ['重点人员', '基础人员'],
      nameLists: ['力维基础人员'],
      sexLists: ['男', '女']
    }
  }
}
</script>

<style lang="less" scoped>
.new-person{

}
</style>

