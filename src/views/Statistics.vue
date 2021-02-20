<template>
    <BaseLayout>
        <Types classPrefix="xxx" :type.sync="value"/>
    </BaseLayout>
</template>

<script lang="ts">
import Types from '@/components/Bill/Types.vue';
import Vue from "vue";
import {Component} from 'vue-property-decorator';
@Component({
  components:{
    Types
  }
})
export default class Statistics extends Vue{
    value = "-"
}
</script>

<style lang="scss" scoped>
  ::v-deep .xxx-item{
    background: white;
    &.selected{
      background: #c4c4c4;
      &::after{
        display: none;
      }
    }
  }
</style>