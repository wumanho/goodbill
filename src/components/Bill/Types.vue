<template>
  <ul class="types">
    <li :class="type === '-' && 'selected'" @click="switchType('-')">支出</li>
    <li :class="type === '+' && 'selected'" @click="switchType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type = '-'; // "-" 表示支出 "+"表示收入
  switchType(type: string) {
    this.type = type;
  }
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