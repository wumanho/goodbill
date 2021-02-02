<template>
  <base-layout>
    <div>
      <Icon name="#left"/>
      <span>编辑标签</span>
    </div>
    <Notes field-name="标签名" placeholder="请输入标签名"/>
  </base-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagsModel from '@/models/tagsModel';
import Notes from '@/components/Bill/Notes.vue';
@Component({
  components: {Notes}
})
export default class EditLabel extends Vue {
  created() {
    //获取url中的参数
    const id = this.$route.params.id;
    tagsModel.get();
    //获取所有tags
    const tags = tagsModel.data
    //找到传入参数对应的tag
    const tag = tags.filter( t=>t.id === id)[0]
    if (tag){
      console.log(tag);
    }else{
      this.$router.replace("/404")
    }
  }
}
</script>

<style lang="scss" scoped>

</style>