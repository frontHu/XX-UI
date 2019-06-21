<template>
  <div>
    <code-box :code="code">
      <template v-slot:code>
        <xx-button loading>loading</xx-button> 
        <xx-button loading></xx-button> 
      </template>
    </code-box>
  </div>
</template>

<script>
export default {
  name: 'MButtonLoading',
  data() {
    return {
      code: `
        <xx-button loading>loading</xx-button> 
        <xx-button loading></xx-button> 
      `
    }
  }
}
</script>

<style>

</style>
