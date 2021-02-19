<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag.id"
          @click="select(tag)" :class="{selected:selectedTags.indexOf(tag)>=0}">{{ tag.name }}
      </li>
    </ul>
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import store from '@/store/index2';
@Component
export default class Tags extends Vue {
  @Prop(Array) readonly dataSource: string[] | undefined;
  selectedTags: string[] = [];

  select(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
      this.$emit('update:value', this.selectedTags);
    }
  }

  create() {
    // const name = window.prompt('请输入标签名');
    // if (name) {
    //   try{
    //     tagsModel.create(name);
    //   }catch (err){
    //     alert(err)
    //   }
    // } else {
    //   alert('标签名不能为空');
    // }
    const name = window.prompt('请输入标签名');
    if (name){
      store.createTag(name);
    }else{
      alert("名字不能为空")
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  padding: 16px;
  font-size: 14px;
  overflow: auto;
  background: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #d9d9d9;
      padding: 0 15px;
      margin-top: 8px;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      margin-right: 12px;

      &.selected {
        background: red;
        color: white;
      }
    }
  }

  > .new {
    padding-top: 16px;

    > button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      color: #999;
      padding: 0 4px;
    }
  }
}
</style>