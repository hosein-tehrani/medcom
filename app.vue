<template>
  <v-app>
    <NuxtLayout>  
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12">
            <v-card class="pa-5 light-box-shadow-1">
              <v-toolbar-title>
                <div class="d-flex justify-space-between align-center">
                  <h5>آزمایشات</h5>
                    <v-btn color="primary" class="rounded-xl elevation-0">آزمایش جدید</v-btn>
                </div>
              </v-toolbar-title>
              <v-divider class="my-3"></v-divider>
              <v-data-table
              items-per-page="5"
               :headers="headers"
                :items="desserts"
                 item-value="name"
                class="elevation-0"
              >
              <template #[`item.status`]="{item}">
                <v-btn :color="getColor(item.columns.status).color" class="rounded-xl elevation-0 text-white">{{ getColor(item.columns.status).text }}</v-btn>
              </template>
              <template #[`item.details`]>
                <v-btn color="gray100" class="rounded-xl elevation-0">جزئیات</v-btn>
              </template>
            </v-data-table>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="light-box-shadow-1 pa-5">
              <v-toolbar-title>
                <div class="d-flex justify-space-between align-center">
                  <h5 class="mediumFont">قند خون</h5>
                  <div class="d-flex mb-2">
                    <v-btn icon="mdi-exclamation" size="small" color="gray100" />
                    <v-btn icon="mdi-plus" size="small" color="primary" class="mx-1" />
                  </div>
                </div>
              </v-toolbar-title>
              <v-divider></v-divider>
              <blood-sugar-chart /> 
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="light-box-shadow-1 pa-5">
              <v-toolbar-title>
                <div class="d-flex justify-space-between align-center">
                  <h5 class="mediumFont">فشار خون</h5>
                  <div class="d-flex mb-2">
                    <v-btn icon="mdi-exclamation" size="small" color="gray100" />
                    <v-btn icon="mdi-plus" size="small" color="primary" class="mx-1" />
                  </div>
                </div>
              </v-toolbar-title>
              <v-divider></v-divider>
             <blood-pressure-chart />
            </v-card>
          </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <v-col cols="12">
            <v-card class="light-box-shadow-1 pa-5 text-center">
              <v-avatar size="100">
                <img src="~/assets/img/avatar.jpg" />
              </v-avatar>
              <h3>{{ userName }}</h3>
              <p>{{ userPhoneNumber }}</p>
              <v-row class="my-3">
                <v-col v-for="(box, i) in boxes" :key="i" cols="12" md="4">
                  <v-card color="primary50" class="rounded-lg elevation-0 pa-5">
                    <h3>
                      {{ box.value }}
                    </h3>
                    {{ box.title }}
                  </v-card>
                </v-col>
              </v-row>
              <v-btn width="100%" height="45" class="rounded-xl white-text elevation-0" color="primary">محاسبه BMI</v-btn>
            </v-card>
          </v-col>
          <v-col cols="12">
            <img width="100%" class="rounded-lg" src="~/assets/img/wallpaper.jpg" />
          </v-col>
          <v-col cols="12">
          <v-card class="light-box-shadow-1 pa-5">
            <v-toolbar-title>
              <div class="d-flex justify-space-between align-center">
                <h5 class="mediumFont">بیمه</h5>
                  <v-btn class="rounded-xl elevation-0 text-primary" color="primary50">ویرایش</v-btn>
              </div>
            </v-toolbar-title>
            <v-divider class="my-3"></v-divider>
            <div class="d-flex align-center justify-center">
              <div cols="12" md="9">
                <p>
                  {{ insuranceText }}
                </p>
              </div>
              <div cols="5" md="3">
                <div class="d-flex justify-center align-center bg-secondary50 ml-2 backgroundImg">
                  <img style="z-index: 2" class="mt-2 mb-1 " width="40px" src='~/assets/img/danger.svg' />
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
        </v-col>
      </v-row>
    </NuxtLayout>
  </v-app>
</template>
<script>
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";import BloodPressureChart from './components/BloodPressureChart.vue'
import  BloodSugarChart from './components/BloodSugarChart.vue'
  export default {
    components:{ VDataTable, BloodSugarChart, BloodPressureChart,  VDataTableServer,
    VDataTableVirtual, },
    data () {
      return {
        insuranceText : 'اطلاعات بیمه خود را وارد کنید تا پس از اعتبارسنجی، از مزایای بیمۀ خود به هنگام پرداخت استفاده نمایید.',
        userName : 'حسین قنبری',
        userPhoneNumber : "09101568920",
        boxes : [
        {
          title : 'قد',
          value : 180
        },
        {
          title : 'وزن',
          value : 75
        },
        {
          title : 'سن',
          value : 30
        }
        ],
        headers: [
          {
            title: 'تاریخ',
            align: 'start',
            key: 'date',
          },
          { title: 'دسته', align: 'end', key: 'category' },
          { title: 'نمونه گیر', align: 'end', key: 'sampler' },
          { title: 'وضعیت', align: 'end', key: 'status' },
          { title: '', align: 'end', key: 'details' },
        ],
        desserts: [
          {
            date: '1402/02/02',
            category: "بزرگسالان (آقایان)",
            sampler: 6.0,
            status: "readyToPay",
          },
          {
            date: '1402/03/03',
            category: "نسخه خوان",
            sampler: 0.0,
            status: "paid",
          },
          {
            date: '1402/04/04',
            category: "بزرگسالان (بانوان)",
            sampler: 26.0,
            status: "done",
          },
          {
            date: '1402/05/05',
            category: "نسخه خوان",
            sampler: 16.0,
            status: "paid",
          },
          {
            date: '1402/06/06',
            category: "بزرگسالان (آقایان)",
            sampler: 16.0,
            status: "readyToPay",
          },
        ],
        statusDic:{
          done: {color: 'primary', text: 'انجام شده'},
          readyToPay: {color: 'info', text:"در انتظار پرداخت"},
          paid: {color: 'success', text: 'پرداخت شده'},
        }
      }
    },
    methods: {
      getColor (status) {
        return this.statusDic[status]
      },
    },
  }
</script>
<style scoped>
.backgroundImg {
  width: 70px ; height : 70px ; border-radius: 50%
}
</style>