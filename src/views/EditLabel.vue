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
import InputItem from '@/components/Bill/InputItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, InputItem}
})
export default class EditLabel extends Vue {
  tag: Tag = undefined;

  created() {
      //获取url中的参数
      this.tag = window.findTag(this.$route.params.id);
      if(!this.tag){
        this.$router.replace('/404');
      }
  }

  updateTagName(value: string) {
    if (this.tag) {
      window.updateTag(this.tag.id,value)
    }
  }

  goBack() {
    this.$router.back();
  }

  remove(id: string) {
    if (window.confirm('确认要删除该标签吗')) {
      window.remove(id);
      this.$router.back();
    } else {
      return;
    }
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