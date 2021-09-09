<template>
  <div class="flex lg:max-w-4xl max-w-3xl lg:flex-grow ">
    <div class="lg:w-1/2 marlene-bg-glass rounded-l-lg invisible lg:visible w-0">
      <div>
        <img src="https://cdn.jsdelivr.net/gh/MarleneJiang/ImgHosting/img/88920916_p1.png" alt="" class="-mt-20 w-10/12 ml-8">
      </div>
    </div>
    <div class="lg:bg-white lg:w-1/2 lg:p-8 lg:py-16 lg:px-8 space-y-7 marlene-rounded-r-lg shadow-sm w-max p-8 marlene-bg-glass-ex">
      <div class="space-y-3.5">
        <p class="mb-2 text-primary text-4xl">注册</p>
        <p class="text-blue-gray">期待与你在新の世界邂逅。</p>
      </div>
      <form class="space-y-8">
        <div class="space-y-6">
          <div class="flex space-x-2 block">
            <input
                class="border  border-gray focus:border-primary rounded-lg appearance-none p-1 pl-2 h-12 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="用户名"
                type="text">
            <input
                class="border  border-gray focus:border-primary rounded-lg appearance-none p-1 pl-2 h-12 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="邮箱"
                type="email">
          </div>
          <div class="flex space-x-2 block">
            <input
                class="border  border-gray focus:border-primary rounded-lg appearance-none p-1 pl-2 h-12 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="密码"
                type="password">
            <input
                class="border  border-gray focus:border-primary rounded-lg appearance-none p-1 pl-2 h-12 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="再次输入密码"
                type="password">
          </div>
          <div class="grid grid-cols-6 gap-4">
            <div class="col-end-7 col-span-2">
              <router-link class="text-primary" to="/login">已有账号?登录</router-link>
            </div>
          </div>
        </div>
        <div class="block text-center ">
          <button class="tracking-widest bg-primary min-w-full h-12 focus:bg-secondary hover:bg-secondary text-white rounded-lg text-2xl marlene-btn" type="submit">注 册</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>