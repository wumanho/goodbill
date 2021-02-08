<template>
  <label class="notes">
    <span class="name">{{ fieldName }}</span>
    <input type="text" :value="value" @input="onValueChange($event.target.value)" :placeholder="placeholder"/>
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class InputItem extends Vue {
  @Prop({required:true,type:String}) readonly fieldName!: string;
  @Prop(String) readonly placeholder?: string;
  @Prop({default:"",type:String}) readonly value!: string;
  //content = this.value;

  onValueChange(newValue: string) {
      this.$emit("update:value",newValue)
  }
}
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  //background: #f5f5f5;
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