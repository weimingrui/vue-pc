<!--
 * @Author: Arthur
 * @Date: 2020-09-30 09:06:06
 * @LastEditors: Arthur
 * @LastEditTime: 2020-10-12 09:28:35
 * @Description: file content
-->
<template>
  <div class="product-item-contain">
    <img class="product-img" />
    <div class="info">
        <p class="price">
          <span class="price-deteail">￥ 12.5</span>
          <span class="postalicon">包邮</span>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'production-item',
  props: {
    detail: Object,
    default: function() {
      return {

      }
    }
  },
  data() {
      return {
        detail: null,
        detailPagePath: '',
        next
      }
  },
  methods: {
    // 购买handle
    buy(product={}) {
      this.$emit('shopping');

    }
  }
}
</script>

<style scoped>
.product-item-contain{
  cursor: pointer;
}
.product-img{
  width: 188px;
  height: 188px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  border: none;
}
</style>
