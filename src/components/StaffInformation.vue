<template>
    <q-dialog v-model="this.$store.getters.getInfo" persistent>
        <q-card>
            <q-card-section>
            <div class="text-h6">Staff information</div>
            </q-card-section>
            <q-card-section>
            <q-form @submit="onSubmit" @reset="onReset">
                <q-card-section>
                <q-input filled type="password" label="New password" v-model="newPassword" 
                    lazy-rules :rules="[ val => val && val.length > 0 || 'Please input new password']" />
                <q-input filled type="password" label="Confirm New password" v-model="confirmPassword" 
                    lazy-rules :rules="[ val => val && val.length > 0 || 'Please confirm your password']" />
                    <div v-if="error" class="text-red">Change Password Error</div>
                    <div v-if="notMatch" class="text-red">Password and confirm password don't match</div>
                </q-card-section>
                <q-card-actions>
                <q-btn label="Cancel" type="reset" @click="this.$store.commit('openInfo', false)" />
                <q-btn label="Update" type="submit" color="primary" />
                </q-card-actions>
            </q-form>
            </q-card-section>
        </q-card>
    </q-dialog>
    <q-dialog v-model="success" persistent>
        <q-card>
            <q-card-section>
            <p>Update password successfully!</p>
            <q-btn label="Close" color="primary" @click="this.success=false" />
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
import { ref } from 'vue'
import http from '../common/http-commons'
const newPassword = ref(null)
const confirmPassword = ref(null)
const error = ref(null)
const notMatch = ref(null)
const success = ref(false)

export default {
    methods: {
        onSubmit() {
            const store = this.$store
            if (newPassword.value != null && newPassword.value === confirmPassword.value){
                const body = {
                    "key": store.getters.getSession.s,
                    "newpwd": newPassword.value
                }
                console.log(body)
                http.put('/update', body)
                    .then((response)=>{
                        console.log(response)
                        newPassword.value = null
                        confirmPassword.value = null
                        store.commit('openInfo', false)
                        success.value = true
                    })
                    .catch((err)=>{
                        error.value = true
                    })
            } else {
                notMatch.value = true
            }
        },
        onReset() {
            newPassword.value = null
            confirmPassword.value = null
            error.value = null
            notMatch.value = null
        }        
    },
    setup() {
        return {
            newPassword,
            confirmPassword,
            error,
            notMatch,
            success
        }

    }
}
</script>