<!--
 * @Author: Arthur
 * @Date: 2020-09-29 16:30:07
 * @LastEditors: Arthur
 * @LastEditTime: 2020-09-30 09:51:22
 * @Description: file content
-->
<template>
    <div class="page">
        <header class="page-menu-list"></header>
        <div class="search-wrap">
            <div class="search">
                <a-input-search placeholder="请输入搜索的词" size="large" @search="onSearch">
                    <a-button slot="enterButton" class="search-btn">
                        搜索
                    </a-button>
                </a-input-search>
            </div>
        </div>
        <div class="page-content">
            <ul class="search-result">
                <li class="item">
                    <ProductItem></ProductItem>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript" src="./index">

</script>
<style lang="less">
    @import './index.less';
</style>