<template>
  <div id="app">
    normal:
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
    hollow:
    <xx-button>default</xx-button>
    <xx-button
      type="primary"
      hollow
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
    >
      disable
    </xx-button>
    <hr>
    Loading:
    <xx-button
      loading
      disabled
    >
      Loading
    </xx-button>
    <hr>
    Icon:
    <xx-button icon="earth">
      Icon
    </xx-button>
    <xx-button icon="earth">
    </xx-button>
    <hr>
    Cirle:
    <xx-button
      circle
      icon="earth"
    >
    </xx-button>
    <xx-button
      circle
      hollow
      icon="earth"
    >
    </xx-button>
    <xx-button
      circle
      hollow
      icon="earth"
      type="error"
    >
    </xx-button>
    <xx-button
      circle
      icon="earth"
      type="success"
    >
    </xx-button>
    <xx-button
      circle
      icon="earth"
      type="warn"
    >
      circle
    </xx-button>
    <hr>
    Size:
    <xx-button size="smaller">
      smaller
    </xx-button>
    <xx-button size="small">
      small
    </xx-button>
    <xx-button>
      base
    </xx-button>
    <xx-button size="large">
      base
    </xx-button>
    <br>
    Size: 
    <xx-button
      size="smaller"
      circle
    >
      smaller
    </xx-button>
    <xx-button
      size="small"
      circle
    >
      small
    </xx-button>
    <xx-button
      circle
    >
      base
    </xx-button>
    <xx-button
      size="large"
      circle
    >
      base
    </xx-button>
    <br>
    Size Icon:
    <xx-button
      size="smaller"
      circle
      icon="earth"
    >
    </xx-button>
    <xx-button
      size="small"
      circle
      icon="earth"
    >
    </xx-button>
    <xx-button
      circle
      icon="earth"
    >
    </xx-button>
    <xx-button
      size="large"
      circle
      icon="earth"
    >
    </xx-button>
    <hr>
    <xx-tag></xx-tag>
    <xx-tag color="success">
      good
    </xx-tag>
    <xx-tag color="warn"></xx-tag>
    <xx-tag color="primary"></xx-tag>
    <xx-tag color="info"></xx-tag>
    <xx-tag color="error"></xx-tag>
    <xx-tag color="disabled"></xx-tag>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
</style>
