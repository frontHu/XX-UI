<template>
  <div>
    <code-box :code="code">
      <template v-slot:code>
        <xx-tag v-for="v in list" :color="v" :name="v" closable @on-close="handleClose(v)">{{v}}</xx-tag>
      </template>
    </code-box>
  </div>
</template>

<script>
export default {
  name: 'MTagClose',
  data() {
    return {
      list: ['success', 'error', 'info', 'primary', 'disabled', 'default'],
      code: `
      <template v-slot:code>
        <xx-tag v-for="v in list" :color="v" :name="v" closable @on-close="handleClose(v)">{{v}}</xx-tag>
      </template>
      <script>
        export default {
          name: 'MTagClose',
          data() {
            return {
              list: ['success', 'error', 'info', 'primary', 'disabled', 'default'],
            }
          },
          methods: {
            handleClose(v) {
              let i = this.list.findIndex(n => n === v)
              this.list.splice(i, 1)
            }
          }
        }
      <\/script>
      `
    }
  },
  methods: {
    handleClose(v) {
      let i = this.list.findIndex(n => n === v)
      this.list.splice(i, 1)
    }
  }
}
</script>

<style>

</style>
