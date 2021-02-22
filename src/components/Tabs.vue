<template>
  <ul class="tabs">
    <li v-for="item in dataSource"
        :key="item.key" @click="select(item)"
        :class="{selected:item.key === type,[classPrefix + '-item']:classPrefix}">
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = {
  key: string;
  value: string;
}

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array})
  dataSource!: DataSourceItem[];
  @Prop(String)
  readonly type!: string;
  @Prop(String)
  classPrefix?: string;

  select(item: DataSourceItem) {
      this.$emit("update:type",item.key)
  }
}
</script>

<style lang="scss" scoped>
.tabs {
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