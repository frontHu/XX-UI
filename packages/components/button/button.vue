<template>
  <button
    class="xx-btn"
    :class="[
      type ? `xx-btn-${type}` : '',
      size ? `xx-btn-${size}` : '',
      disabled ? `xx-btn-disabled` : '',
      hollow ? `xx-btn-${type}-hollow` : '',
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'XxButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hollow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
