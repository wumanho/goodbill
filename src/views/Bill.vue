<template>
  <BaseLayout class-prefix="layout">
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Notes :value.sync="record.notes"/>
    <Types :type.sync="record.type"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Tags from '@/components/Bill/Tags.vue';
import Notes from '@/components/Bill/Notes.vue';
import Types from '@/components/Bill/Types.vue';
import NumberPad from '@/components/Bill/NumberPad.vue';
import model from '@/model';


@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Bill extends Vue {
  tags = ['衣', '食', '住', '行'];
  records: RecordItem[] = model.get();
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  saveRecord(){
    const newRecord: RecordItem = model.clone(this.record)
    newRecord.createTime = new Date();
    this.records.push(newRecord)
  }

  @Watch("records")
  onRecordsChanged(){
    model.save(this.records)
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