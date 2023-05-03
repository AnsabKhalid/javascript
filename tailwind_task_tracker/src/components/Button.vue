<template>
  <button
    @click="onBtnClick()"
    :style="{ background: color }"
    class="text-white focus:outline-none font-medium rounded-lg text-xl px-3.5 py-2 text-center dark:bg-slate-800 dark:hover:bg-slate-950"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onBtnClick() {
      this.$emit("btn-click");
    },
  },
};
</script>

<style lang="scss" scoped></style>
