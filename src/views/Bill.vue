<template>
  <BaseLayout class-prefix="layout">
    <Tags/>
    <Notes/>
    <Types/>
    <NumberPad/>
  </BaseLayout>
</template>

<script lang="ts">
import Tags from '@/components/Bill/Tags.vue';
import Notes from '@/components/Bill/Notes.vue';
import Types from '@/components/Bill/Types.vue';
import NumberPad from '@/components/Bill/NumberPad.vue';
export default {
  name: 'Bill',
  components: {NumberPad, Types, Notes, Tags}
};
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