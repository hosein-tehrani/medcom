<template>
    <div>
        <v-navigation-drawer
        v-model="drawer"
        location="right"
      >
        <template v-slot:prepend class="text-center">
            <div class="text-center">
                <img width="82px" class="my-4" src="~/assets/img/logo.svg"/>
            </div>
        </template>

        <v-list density="compact" nav>
          <v-list-item location="right" direction="rtl" v-for="(item , idx) in menuItems" :key="idx" :prepend-icon="item.icon" :title="item.name" :value="item.direct"><n-link :to="item.direct"/></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"><slot /></v-main>
    </div>

</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        menuItems: [
            {icon: "mdi-home-outline", name:"خانه", direct:"/"}
        ]
      }
    },
  }
</script>