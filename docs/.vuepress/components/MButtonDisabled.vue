<template>
  <div>
    <code-box :code="code">
      <template v-slot:code>
        <xx-button disabled>disabled</xx-button>
        <xx-button type="primary" disabled>text disabled</xx-button>
        <xx-button type="text" disabled>text disabled</xx-button>
      </template>
    </code-box>
  </div>
</template>

<script>
export default {
  name: 'MButtonDisabled',
  data() {
    return {
      code: `
        <xx-button disabled>disabled</xx-button>
        <xx-button type="primary" disabled>disabled</xx-button>
        <xx-button type="text" disabled>disabled</xx-button>
      `
    }
  }
}
</script>

<style>

</style>
