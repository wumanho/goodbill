<template>
  <button class="btn">
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.btn {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  margin: 40px 0;
  height: 40px;
  padding: 0 16px;
}
</style>