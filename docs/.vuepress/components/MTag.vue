<template>
  <div>
    <code-box :code="code">
      <template v-slot:code>
        <xx-tag>标签一</xx-tag>
        <xx-tag color="success">标签一</xx-tag>
        <xx-tag color="error">标签一</xx-tag>
        <xx-tag color="info">标签一</xx-tag>
        <xx-tag color="primary">标签一</xx-tag>
        <xx-tag color="disabled">标签一</xx-tag>
      </template>
    </code-box>
  </div>
</template>

<script>
export default {
  name: 'MTag',
  data() {
    return {
      code: `
        <xx-tag>标签一</xx-tag>
        <xx-tag color="success">标签一</xx-tag>
        <xx-tag color="error">标签一</xx-tag>
        <xx-tag color="info">标签一</xx-tag>
        <xx-tag color="primary">标签一</xx-tag>
        <xx-tag color="disabled">标签一</xx-tag>`
    }
  }
}
</script>

<style>

</style>
