<template>
  <BaseLayout class-prefix="layout">
    <Tags @update:value="onUpdateTags"/>
    <InputItem field-name="备注" placeholder="在这里输入备注" :value.sync="record.notes"/>
    <Types :type.sync="record.type"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </BaseLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tags from '@/components/Bill/Tags.vue';
import InputItem from '@/components/Bill/InputItem.vue';
import Types from '@/components/Bill/Types.vue';
import NumberPad from '@/components/Bill/NumberPad.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, Tags, InputItem, Types, NumberPad},
  computed: {
    recodeList() {
      return this.$store.state.recordList;
    }
  }
})
export default class Bill extends Vue {
  //tags = oldStore.tagList;
  //records: RecordItem[] = oldStore.recordList;
  created() {
    this.$store.commit('getRecords');
  }

  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record);
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