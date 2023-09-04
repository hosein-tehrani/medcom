<template>
    <div>
        <v-navigation-drawer
        permanent
        :rail="rail"
        location="right"
      >
        <template #prepend>
          <v-btn v-id @click="rail = !rail" class="elevation-0 float-left" :icon="rail ? 'mdi-arrow-left' : 'mdi-close'" ></v-btn>
            <div class="text-center">
                <img v-show="!rail" width="82px" class="my-4" src="~/assets/img/logo.svg"/>
            </div>
        </template>
        <v-list>
          <v-list-item
          color="primary"
          v-for="(item , idx) in menuItems"
          :key="idx"
          :prepend-icon="item.icon"
          :title="item.name"
          :value="item.direct"
          >
        </v-list-item>
        </v-list>
        <v-list>
          <v-list-item style="bottom : 0; position: fixed;" class="text-secondary" prepend-icon="mdi-logout" value="logout">خروج از حساب کاربری</v-list-item>
        </v-list>
      </v-navigation-drawer>
      <div class="header"></div>
      <div class="customContainer">
        <v-main>
          <div class="d-flex justify-space-between align-center my-3">
            <p>خانه</p>
            <div class="d-flex">
              <v-btn height="45" variant="outlined" color="primary500" class="mx-5 rounded-xl" >
                <v-icon>mdi mdi-wallet</v-icon>
                250,000 تومان</v-btn> 
              <v-btn variant="outlined" color="primary500" icon="mdi-bell"></v-btn>
            </div>
          </div>
          <slot />
        </v-main>
      </div>
    </div>

</template>
<script>
  export default {
    data () {
      return {
        rail: false,

        drawer: true,
        menuItems: [
            {icon: "mdi-home", name:"خانه", direct:"/"},
            {icon: "mdi-cup", name:"آزمایشگاه", direct:"/labratory"},
            {icon: "mdi-history", name:"تاریخچه", direct:"/history"},
            {icon: "mdi-message-question", name:"پشتیبانی", direct:"/backup"},
            {icon: "mdi-wallet", name:"کیف پول", direct:"/pocket"},
            {icon: "mdi-account", name:"حساب کاربری", direct:"/profile"},
        ]
      }
    },
  }
</script>
<style scoped>
.customContainer {
  width: 98%;
  margin: 0 auto;
  max-width: 1600px;
}
</style>