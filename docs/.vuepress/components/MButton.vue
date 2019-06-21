<template>
  <div>
    <code-box :code="code">
      <template v-slot:code>
        <xx-button>default</xx-button>
        <xx-button type="primary">primary</xx-button>
        <xx-button type="text">文字按钮</xx-button>
        <br>
        <br>
        <xx-button type="primary">primary</xx-button>
        <xx-button type="warn">warn</xx-button>
        <xx-button type="error">error</xx-button>
        <xx-button type="success">success</xx-button>
      </template>
    </code-box>
  </div>
</template> 

<script>
export default {
  name: "MButton",
  data() {
    return {
      code: `
        <xx-button>default</xx-button>
        <xx-button type="primary">primary</xx-button>
        <xx-button type="text">文字按钮</xx-button>
        <xx-button type="primary">primary</xx-button>
        <xx-button type="warn">warn</xx-button>
        <xx-button type="error">error</xx-button>
        <xx-button type="success">success</xx-button>`
    };
  }
};
</script>

<style>
</style> 
