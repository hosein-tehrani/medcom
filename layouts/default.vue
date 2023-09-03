<template>
    <div>
        <v-navigation-drawer
        v-model="drawer"
        location="right"
      >
        <template v-slot:prepend>
            <div class="text-center">
                <img width="82px" class="my-4" src="~/assets/img/logo.svg"/>
            </div>
        </template>

        <v-list density="compact" nav>
          <v-list-item location="right" direction="rtl" v-for="(item , idx) in menuItems" :key="idx" :prepend-icon="item.icon" :title="item.name" :value="item.direct"><n-link :to="item.direct"/></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <div class="header"></div>
      <v-main style="height: 250px" class="ma-4">
        <slot />
      </v-main>
    </div>

</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        menuItems: [
            {icon: "mdi-home-outline", name:"خانه", direct:"/"},
            {icon: "mdi-home-outline", name:"آزمایشگاه", direct:"/labratory"},
            {icon: "mdi-home-outline", name:"تاریحچه", direct:"/history"},
            {icon: "mdi-home-outline", name:"پشتیبانی", direct:"/backup"},
            {icon: "mdi-home-outline", name:"کیف پول", direct:"/pocket"},
            {icon: "mdi-home-outline", name:"حساب کاربری", direct:"/profile"},
        ]
      }
    },
  }
</script>