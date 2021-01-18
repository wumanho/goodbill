<template>
  <div class="nav">
    <router-link to="/labels">
      <svg>
        <use xlink:href="#label"/>
      </svg>
      标签
    </router-link>
    <router-link to="/bill">
      <svg>
        <use xlink:href="#bill"/>
      </svg>
      记账
    </router-link>
    <router-link to="/statistics">
      <svg>
        <use xlink:href="#statistics"/>
      </svg>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
    const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try {
      importAll(require.context('../assets/icons', true, /\.svg$/));
    } catch (e) {
      console.log(e);
    }
    export default {
      name: 'Nav'
    };
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  //justify-content: space-around;
}
</style>