<template lang="pug">
span.char(:class="classes")
  | {{ val }}
</template>

<script lang="ts">
export default {
  props: {
    val: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        newline: this.val.indexOf('\n') === 0,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.char {
  display: inline-block;
  white-space: pre-wrap;
}

/* TODO: This can be removed in favor of the ':blank' pseudo-class:
         https://drafts.csswg.org/selectors-4/#the-blank-pseudo */
.newline {
  display: inline;
}

/* Keep the following .char styles as low-specificity as possible so they are more easily overridden */
.typed {
  color: $char-typed-color;
  background-color: $char-typed-background-color;
}

.selected {
  color: $char-selected-color;
  background-color: $char-selected-background-color;
}

.erased {
  display: none;
}
</style>
