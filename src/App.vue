<template>
  <q-layout view="hHh LpR fFf">
    <Header />
    <q-page-container class="main">
      <router-view />
    </q-page-container>
    <AboutUs />
  </q-layout>
  <Login />
  <StaffInformation />
</template>


<script>
import Login from './components/Login.vue'
import AboutUs from './components/AboutUs.vue'
import StaffInformation from './components/StaffInformation.vue'
import Header from './components/Header.vue'

export default {
  components: {
    AboutUs,
    Login,
    StaffInformation,
    Header
  }
}
</script>

<style lang="sass">
@import './css/app.sass'
</style>