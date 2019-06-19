<template>
  <button
    class="xx-btn"
    :class="[
      type ? `xx-btn-${type}` : '',
      size ? `xx-btn-${size}` : '',
      disabled ? `xx-btn-disabled` : '',
      hollow ? `xx-btn-${type}-hollow` : '',
      circle && !$slots.default ? 'xx-btn-circle' : ''
    ]"
    :disabled="disabled"
    @click="btnclick"
  >
    <i
      v-if="loading"
      class="iconfont icon-sync xx-btn__icon xx-btn__loading"
    ></i>
    <i 
      v-if="icon"
      class="iconfont xx-btn__icon"
      :class="`icon-${icon}`"
    ></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
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
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    btnclick: function(ev) {
      this.$emit('click', ev);
    }
  }
}
</script>
