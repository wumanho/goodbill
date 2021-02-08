<template>
  <BaseLayout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="#right"/>
      </router-link>
    </div>
    <div class="newTagBtn-wrapper">
      <Button @click.native="createTag">新建标签</Button>
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
// tagsModel.get();
@Component({
  components: {Button}
})
export default class Labels extends Vue {
  tags = window.tagList;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name){
      window.createTag(name);
    }else{
      alert("名字不能为空")
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;

  > .tag {
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
}
</style>