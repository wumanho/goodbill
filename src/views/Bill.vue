<template>
  <BaseLayout class-prefix="layout">
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <InputItem field-name="备注" placeholder="在这里输入备注" :value.sync="record.notes"/>
    <Types :type.sync="record.type"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Tags from '@/components/Bill/Tags.vue';
import InputItem from '@/components/Bill/InputItem.vue';
import Types from '@/components/Bill/Types.vue';
import NumberPad from '@/components/Bill/NumberPad.vue';
import billModel from '@/models/billModel';

@Component({
  components: {Tags, InputItem, Types, NumberPad}
})
export default class Bill extends Vue {
  tags = window.tagList;
  records: RecordItem[] = billModel.get();
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  saveRecord() {
    billModel.create(this.record);
  }

  @Watch('records')
  onRecordsChanged() {
    billModel.save();
    location.reload();
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>

<style lang="scss" scoped>

</style>