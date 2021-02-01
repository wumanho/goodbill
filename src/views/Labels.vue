<template>
  <BaseLayout>
    <ul class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{ tag.name }}</span>
        <Icon name="#right"/>
      </li>
    </ul>
    <div class="newTagBtn-wrapper">
      <button class="newTagBtn" @click="createTag">新建标签</button>
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagsModel from '@/models/tagsModel';
tagsModel.get();

@Component
export default class Labels extends Vue {
  tags = tagsModel.data;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      try{
        tagsModel.create(name);
      }catch (err){
        alert(err)
      }
    } else {
      alert('标签名不能为空');
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;

  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    border-bottom: 1px solid #e6e6e6;

    > svg {
      color: #666;
    }
  }
}

.newTagBtn-wrapper {
  text-align: center;

  > .newTagBtn {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    margin: 40px 0;
    height: 40px;
    padding: 0 16px;
  }
}
</style>