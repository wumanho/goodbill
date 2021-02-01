<template>
  <BaseLayout>
    <ul class="tags">
      <li>
        <span>衣</span>
        <Icon name="#right"/>
      </li>
      <li>
        <span>食</span>
        <Icon name="#right"/>
      </li>
      <li>
        <span>住</span>
        <Icon name="#right"/>
      </li>
      <li>
        <span>行</span>
        <Icon name="#right"/>
      </li>
    </ul>
    <div class="newTagBtn-wrapper">
      <button class="newTagBtn">新建标签</button>
    </div>
  </BaseLayout>
</template>

<script lang="ts">
export default {
  name: 'Labels',
};
</script>

<style lang="scss" scoped>
  .tags{
    background: white;
    font-size: 16px;
    > li{
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      border-bottom: 1px solid #e6e6e6;
      > svg{
        color: #666;
      }
    }
  }
  .newTagBtn-wrapper{
    text-align: center;
    > .newTagBtn{
      background: #767676;
      color: white;
      border-radius: 4px;
      border:none;
      margin: 40px 0;
      height: 40px;
      padding: 0 16px;
    }
  }
</style>