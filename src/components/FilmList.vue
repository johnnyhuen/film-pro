<template>
    <div class="q-pa-md bg-grey-2">
        <div class="row q-px-sm">
            <h2 class="text-black">Category</h2>
        </div>
        <div class="row">
            <div v-for="film in this.$store.getters.getFilm" :key="film._id" class="col-2 col-xs-6 col-sm-2 q-px-sm q-py-md" loading="lazy">
                <router-link :to="`/film/${film._id}`">
                <q-responsive :ratio="2/3" class="q-mb-md">
                    <q-img :src="film.poster" class="rounded-borders" loading="lazy">
                        <template v-slot:loading>
                            <div class="text-black">
                                <q-spinner-ios />
                            </div>
                        </template>
                    </q-img>
                </q-responsive>
                </router-link>
                <div>
                     <router-link class="text-black text-bold film-link" :to="`/film/${film._id}`">{{ film.title }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
