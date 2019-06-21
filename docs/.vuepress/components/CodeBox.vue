<template>
  <div class="xx-code">
    <div class="xx-code-sample">
      <slot name="code"></slot>
    </div>
    <CollapseTransition>
      <div class="xx-code-source" v-show="isShow">
        <div class="xx-code-source-container">
          <pre>
          <code ref="code" class="xml">{{code}}</code> 
        </pre>
        </div>
      </div>
    </CollapseTransition>
    <div class="xx-code-toggle"  @click="isShow = !isShow">
      <span>{{ isShow ? '隐藏代码' : '显示代码' }}</span> 
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";
import CollapseTransition from "./../../../untils/collapse-transition";
export default {
  name: "CodeBox",
  components: {
    CollapseTransition
  },
  props: {
    code: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      hljs.highlightBlock(this.$refs.code);
    });
  }
};
</script> 

<style lang="scss">
.xx-code {
  border: 1px solid #e2ecf4;
  border-radius: 4px;
  padding: 20px;
  &:hover {
    box-shadow: 0 0 10px rgba(63, 81, 181, 0.25);
    transition: all 0.3s;
  }
  .xx-code-sample {
    border-bottom: 1px solid #e2ecf4;
    padding-bottom: 10px;
  }
  .xx-code-source {
    padding-top: 10px;
    transition: all 0.3s;
    .xx-code-source-container {
      @import "./../styles/highlight-style.scss";
      pre {
        background-color: #fafafa;
        code: {
          color: #666;
        }
      }
    }
  }
  .xx-code-toggle {
    text-align: center;
    font-size: 12px;
    border-top: 1px dashed #e2ecf4;
    margin-top: 10px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    color: #666;
    transition: all 0.3s;
    &:hover {

      background-color: #f6f8fa;
      span {
        // tran
        color: #0F49ED;
      }
    }
  }
}
</style>
