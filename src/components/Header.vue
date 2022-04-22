<template>
    <q-header elevated class="bg-white text-white q-py-sm" :height-hint="70">
        <q-toolbar>
            <q-toolbar-title>
                <router-link to="/"><q-img src="../../src/assets/images/logo.svg" style="width: 200px;"/></router-link>
            </q-toolbar-title>
            <q-btn :to="{ name: 'Home' }" stretch flat label="Home" class="text-primary" />
            <div v-if="!this.$store.getters.getLoggedIn" style="margin-left: 20px;">
            <q-btn color="primary" @click="this.$store.commit('openLogin', true)" label="Login" />
            </div>  
            <div v-else style="margin-left: 20px;">
                <q-btn @click="this.$store.commit('openInfo', true)" stretch flat label="Information" class="text-primary" />
                <q-btn color="primary" @click="this.$store.commit('logout')" label="Logout" />
            </div>
        </q-toolbar>
    </q-header>
</template>