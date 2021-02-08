<template>
  <base-layout>
    <div class="topBar">
      <router-link to="/labels/">
        <Icon name="#left"/>
      </router-link>
      <span class="title">编辑标签</span>
      <span class="right"/>
    </div>
    <div class="input-wrapper">
      <InputItem :value="tag.name" @update:value="updateTagName" field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="btn-wrapper">
      <Button @click.native="remove(tag.id)">删除标签</Button>
    </div>
  </base-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagsModel from '@/models/tagsModel';
import InputItem from '@/components/Bill/InputItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, InputItem}
})
export default class EditLabel extends Vue {
  tag?: { id: string; name: string } = undefined;

  created() {
    //获取url中的参数
    const id = this.$route.params.id;
    tagsModel.get();
    //获取所有tags
    const tags = tagsModel.data;
    //找到传入参数对应的tag
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      this.tag = tag;
      console.log(tag);
    } else {
      this.$router.replace('/404');
    }
  }

  updateTagName(value: string) {
    if (this.tag) {
      try {
        tagsModel.update(this.tag.id, value);
      } catch (error) {
        alert(error);
      }
    }
  }
  goBack(){
    this.$router.back()
  }

  remove(id: string) {
    tagsModel.remove(id);
  }
}
</script>

<style lang="scss" scoped>
.topBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {

  }

  > svg {

  }

  > .right {
    width: 24px;
    height: 18px;
  }
}

.input-wrapper {
  background: white;
  margin-top: 8px;
}

.btn-wrapper {
  text-align: center;
  padding: 16px;
}
</style>