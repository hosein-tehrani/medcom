<template>
  <v-app>
    <NuxtLayout>  
      <v-row>
        <v-col  cols="12" md="9">
          <v-card class="p-2">
            <v-card-title>
              <v-row>
                <v-col>آزمایشات</v-col>
                <v-col>
                  <v-btn rounded="xl" color="primary" class="float-left">آزمایش جدید</v-btn>
                </v-col>
              </v-row>
            </v-card-title>
            <v-divider></v-divider>
            <v-data-table
              items-per-page="'10'"
              hide-footer
              :headers="headers"
              :items="items"
              class="elevation-1"
            >
            <template v-slot:item.status="{ item }">
              <v-chip :color="getColor(item.columns.status).color">
                {{ getColor(item.columns.status).text }}
              </v-chip>
            </template>
            <template v-slot:item.operation="{ item }">
              <v-btn>
                جزئیات
              </v-btn>
            </template>
          </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="p-2">
            <v-avatar src=""></v-avatar>
            <h4 class="text-center">حسین قنبری</h4>
            <h4 class="text-center">۰۹۱۲۳۴۵۶۷۸۹</h4>
            <v-row>
              <v-col>
                <div class="text-center person-detail">
                  180
                  قد
                </div>
              </v-col>
              <v-col>
                <div class="text-center person-detail">
                  75
                  وزن
                </div>
              </v-col>
              <v-col>
                <div class="text-center person-detail">
                  30
                  سن
                </div>
              </v-col>
            </v-row>
            <v-btn rounded="xl" block color="primary">محاسبه BMI</v-btn>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
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
        <v-col cols="12" md="4">
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
        <v-col cols="12" md="4">
          
        </v-col>
      </v-row>
    </NuxtLayout>
  </v-app>
</template>
<script>
import { VDataTable } from 'vuetify/labs/VDataTable'
import BloodPressureChart from './components/BloodPressureChart.vue'
import  BloodSugarChart from './components/BloodSugarChart.vue'
  export default {
    components:{ VDataTable, BloodSugarChart, BloodPressureChart },
    data () {
      return {
        headers: [
        {
            title: 'تاریخ',
            align: 'start',
            sortable: false,
            key: 'date',
          },
          { title: 'دسته', sortable: false, align: 'start', key: 'category' },
          { title: 'نمونه گیر', sortable: false, align: 'start', key: 'tester' },
          { title: 'وضعیت', sortable: false, align: 'start', key: 'status' },
          { title: '', sortable: false, align: 'start', key: 'operation' }
        ],
        items: [
          {
            date: '1402/02/02',
            category: 'بزرگسالان(آقایان) ',
            tester: 'علی اکبری ',
            status: 'done',
          },
          {
            date: '1402/02/02',
            category: 'نسخه‌خوان',
            tester: 'علی اکبری ',
            status: 'readyToPay',
          },
          {
            date: '1402/02/02',
            category: 'بزرگسالان(آقایان) ',
            tester: 'علی اکبری ',
            status: 'paid',
          },
          {
            date: '1402/02/02',
            category: 'بزرگسالان(آقایان) ',
            tester: 'علی اکبری ',
            status: 'paid',
          },
          {
            date: '1402/02/02',
            category: 'بزرگسالان(آقایان) ',
            tester: 'علی اکبری ',
            status: 'paid',
          },
          {
            date: '1402/02/02',
            category: 'بزرگسالان(آقایان) ',
            tester: 'علی اکبری ',
            status: 'paid',
          },
          {
            date: '1402/02/02',
            category: 'بزرگسالان(آقایان) ',
            tester: 'علی اکبری ',
            status: 'paid',
          },               

        ],
        statusDic:{
          done: {color: 'primary', text: 'انجام شده'},
          readyToPay: {color: 'info', text: 'آماده پرداخت'},
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