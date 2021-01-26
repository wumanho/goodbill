<template>
  <label class="notes">
    {{ value }}
    <span class="name">备注</span>
    <input type="text" v-model="value" placeholder="请在这里添加备注"/>
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';
}
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  background: #f5f5f5;
  align-items: center;
  font-size: 14px;

  > .name {
    padding: 0 16px;
  }

  > input {
    background: transparent;
    border: none;
    padding: 16px 0;
    flex-grow: 1;
  }
}
</style>