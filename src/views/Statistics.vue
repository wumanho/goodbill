<template>
  <BaseLayout>
<!--    <Types classPrefix="xxx" :type.sync="type"/>-->
    <Tabs classPrefix="type" :type.sync="type" :data-source="typeArray"/>
    <Tabs :type.sync="dataType" :data-source="dateArray"/>
  </BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import Types from '@/components/Bill/Types.vue';

@Component({
  components: {
    Tabs,
    Types,
  }
})
export default class Statistics extends Vue {
  type = '-';
  dataType = "day"
  dateArray = [
    {key: 'day', text: '按天'},
    {key: 'week', text: '按周'},
    {key: 'month', text: '按月'}];
  typeArray = [
    {key:"-",text:"支出"},
    {key:"+",text:"收入"}
  ]
}
</script>

<style lang="scss" scoped>
::v-deep .type-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}
</style>