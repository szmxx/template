<!--
 * @Author: weicong
 * @Date: 2021-03-22 15:59:56
 * @LastEditTime: 2021-03-22 16:03:42
 * @LastEditors: weicong
 * @Description: 
-->
<template>
  <svg
    :style="svgColor"
    fill="currentColor"
    :class="svgClass"
    aria-hidden="true"
  >
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "DistSvg",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return `DistSvg ${this.className}`;
      }
      return "DistSvg";
    },
    svgColor() {
      if (this.color) {
        return {
          color: this.color,
        };
      }
      return "";
    },
  },
};
</script>

<style scoped>
.DistSvg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
