<template>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
</template>

<script lang="ts">
export default {
name: "Types"
}
</script>

<style lang="scss" scoped>
.types {
  display: flex;
  background: #c4c4c4;
  font-size: 24px;

  > li {
    width: 50%;
    text-align: center;
    line-height: 64px;
    height: 64px;
    position: relative;

    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>