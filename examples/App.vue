<template>
  <div id="app">
    <xx-button>default</xx-button>
    <xx-button
      type="primary"
    >
      primary
    </xx-button>
    <xx-button
      type="success"
    >
      success
    </xx-button>
    <xx-button type="warn">
      warn
    </xx-button>
    <xx-button type="error">
      error
    </xx-button>
    <xx-button type="text">
      text
    </xx-button>
    <xx-button disabled>
      disable
    </xx-button>
    <hr>
    <xx-button>default</xx-button>
    <xx-button
      type="primary"
      hollow
      disabled
    >
      primary
    </xx-button>
    <xx-button
      type="success"
      hollow
    >
      success
    </xx-button>
    <xx-button
      type="warn"
      hollow
    >
      warn
    </xx-button>
    <xx-button
      type="error"
      hollow
    >
      error
    </xx-button>
    <xx-button
      type="text"
      disabled
    >
      text
    </xx-button>
    <xx-button
      disabled
      hollow
    >
      disable
    </xx-button>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
</style>
