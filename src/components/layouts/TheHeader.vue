<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <a href="/" class="navbar-brand">
        <img :src="logo.src" :alt="logo.title">
          <span class="title">{{ logo.title }}</span>
        </a>
      </div>

      <div id="top-navbar-collapse" :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]">
        <ul class="nav navbar-nav">
          <li v-for="(item, index) in navList" :class="{ active: index === activeNavIndex }">
            <a href="#" @click="changeNavIndex(index)">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      logo: {
        src: `${this.uploadsUrl}png/vue.png`,
        title: "VuejsCaff",
      },
      navList: ["社区", "头条", "问答", "教程"],
      activeNavIndex: 0,
      showCollapsedNav: false
    };
  },
  beforeCreate() {
    // 在当前实例上添加一个 uploadsUrl 属性
    this.uploadsUrl = "https://yp.dayanyu.com.cn/images/";
  },
  methods: {
    changeNavIndex(index) {
      this.activeNavIndex = index
    },
     toggleNav() {
      this.showCollapsedNav = !this.showCollapsedNav
    }
  }
};
</script>

<style scoped>
.title {
  color: #525252;
}
.navbar-default .navbar-nav > .active > a {
  background: rgba(0, 0, 0, 0.03);
}
.navbar-brand > img {
  display: inline-block;
}
</style>