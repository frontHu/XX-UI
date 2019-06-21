<template>
  <div>
    <code-box :code="code">
      <template v-slot:code>
        <xx-button icon="download"></xx-button> 
        <xx-button icon="smile" type="success">smile</xx-button> 
        <xx-button icon="bug" type="error">bug</xx-button>
        <xx-button icon="location" type="warn">location</xx-button>
        <br>
        <br>
        <xx-button icon="download" circle></xx-button>
        <xx-button icon="download" circle type="success"></xx-button>
        <xx-button icon="download" circle type="error"></xx-button>
        <xx-button icon="download" circle type="warn"></xx-button>
      </template>
    </code-box>
  </div>
</template>

<script>
export default {
  name: 'MButtonIcon',  
  data() {
    return {
      code: `
        <xx-button icon="download"></xx-button> 
        <xx-button icon="smile" type="success">smile</xx-button> 
        <xx-button icon="bug" type="error">bug</xx-button>
        <xx-button icon="location" type="warn">location</xx-button>
        <xx-button icon="download" circle></xx-button>
        <xx-button icon="download" circle type="success"></xx-button>
        <xx-button icon="download" circle type="error"></xx-button>
        <xx-button icon="download" circle type="warn"></xx-button>
      `
    }
  }
}
</script>

<style>

</style>
