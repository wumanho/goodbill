<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="#label"/>
      标签
    </router-link>
    <router-link to="/bill" class="item" active-class="selected">
      <Icon name="#bill"/>
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="#statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
    import Icon from '@/components/Icon.vue';
    export default {
      name: 'Nav',
      components: {Icon}
    };
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
  nav{
    @extend %innerShadow;
    display: flex;
    > .item{
      font-size: 12px;
      padding:2px 0;
      display: flex;
      width: 33.3333%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
   > .selected{
     color: $color-hl;
   }
  }
</style>