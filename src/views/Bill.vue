<template>
  <BaseLayout class-prefix="layout">
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Notes :value.sync="record.notes"/>
    <Types :type.sync="record.type"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    {{record}}
  </BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Tags from '@/components/Bill/Tags.vue';
import Notes from '@/components/Bill/Notes.vue';
import Types from '@/components/Bill/Types.vue';
import NumberPad from '@/components/Bill/NumberPad.vue';

type Record = {
  tags: string[];
  type: string;
  notes: string;
  amount: number;
}

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Bill extends Vue {
  tags = ['衣', '食', '住', '行'];
  records: Record[] = [];
  record: Record = {tags: [], notes: '', type: '-', amount: 0};

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  saveRecord(){
    const newRecord = JSON.parse(JSON.stringify(this.record))
    this.records.push(newRecord)
  }

  @Watch("records")
  onRecordsChanged(){
    localStorage.setItem("records",JSON.stringify(this.records))
    console.log(this.records);
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