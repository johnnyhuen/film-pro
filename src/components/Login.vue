<template>
    <q-dialog v-model="this.$store.getters.getLoginPop" persistent>
        <q-card>
            <q-card-section>
            <div class="text-h6">Login</div>
            </q-card-section>
            <q-card-section>
            <q-form @submit="onSubmit" @reset="onReset">
                <q-card-section>
                <q-input filled label="username" v-model="name"
                    lazy-rules :rules="[ val => val && val.length > 0 || 'Please input your username']" />
                <q-input filled type="password" label="password" v-model="password" 
                    lazy-rules :rules="[ val => val && val.length > 0 || 'Please input your password']" />
                    <div v-if="error" class="text-red">Login Error</div>
                </q-card-section>
                <q-card-actions>
                <q-btn label="Cancel" type="reset" @click="this.$store.commit('openLogin', false)" />
                <q-btn label="Login" type="submit" color="primary" />
                </q-card-actions>
            </q-form>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
import { ref } from 'vue'
import http from '../common/http-commons'
const login = ref(false)
const name = ref(null)
const password = ref(null)
const error = ref(null)

export default {
    methods: {
        onSubmit() {
            const store = this.$store
            const body = {
                "user": name.value,
                "pwd": password.value
            }
            console.log(body)
            http.post('/auth', body)
                .then((response)=>{
                    console.log(response.data)
                    store.commit('updateSession', response.data)
                })
                .then(()=>{
                    store.commit('login')
                    name.value = null
                    password.value = null
                    store.commit('openLogin', false)
                })
                .catch((err)=>{
                    error.value = true
                })
        },
        onReset() {
            name.value = null
            password.value = null
        }
    },
    setup() {
        return {
            name,
            password,
            error,
            login
        }
    }
}
</script>