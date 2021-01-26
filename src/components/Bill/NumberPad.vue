<template>
  <div class="numberPad">
    <div class="output">{{ output || 0}}</div>
    <div class="buttons">
      <button @click="counter">1</button>
      <button @click="counter">2</button>
      <button @click="counter">3</button>
      <button @click="remove">删除</button>
      <button @click="counter">4</button>
      <button @click="counter">5</button>
      <button @click="counter">6</button>
      <button @click="clear">清空</button>
      <button @click="counter">7</button>
      <button @click="counter">8</button>
      <button @click="counter">9</button>
      <button class="ok">OK</button>
      <button class="zero" @click="counter">0</button>
      <button @click="counter">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  output = '0';

  counter(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const text = button.textContent as string;
    if (this.output.length === 16) {
      return;
    }
    //如果当前输入框中的值为0
    if (this.output === '0') {
      if (text !== '.') {
        this.output = text;
      } else {
        this.output += text;
      }
    } else {
      this.output += text;
    }
  }

  remove() {
    this.output = this.output.slice(0, -1);
  }

  clear() {
    this.output = '0';
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  > .output {
    @extend %outerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }

  > .buttons {
    @extend %clearFix;

    > button {
      width: 25%;
      height: 64px;
      background: transparent;
      border: none;

      &.ok {
        height: 64*2px;
        float: right;
      }

      &.zero {
        width: 50%;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 8%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 12%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 16%);
      }

      &:nth-child(14) {
        background: darken($bg, 20%);
      }

      &:nth-child(12) {
        background: darken($bg, 24%);
      }

    }
  }
}
</style>