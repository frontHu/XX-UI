<template>
  <transition name="slide-fade">
    <span
      class="xx-tag"
      :class="[
        color ? `xx-tag--${color}` : ''
      ]"
    >
      <span class="xx-tag__text">
        <slot>标签一</slot>
      </span>
      <i
        v-if="closable"
        class="iconfont icon-close xx-tag__close"
        @click="closeTag"
      ></i>
    </span>
  </transition>
</template>

<script>
export default {
  name: 'XxTag',
  props: {
    color: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    closeTag(evt) {
      if(this.color === 'disabled') {
        return
      }
      if (typeof this.name === 'undefined') {
        this.$emit('on-close', evt)
      } else {
        this.$emit('on-close', evt, this.name)
      }
    }
  }
};
</script>

<style>
</style>
