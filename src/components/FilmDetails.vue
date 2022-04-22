<template>
    <div class="bg-grey-2">
        <div class="row">
        <div class="container q-pa-lg">
            <div class="row bg-white q-pa-md" style="z-index: 10;">
            <div class="col-12">
                <q-breadcrumbs>
                    <q-breadcrumbs-el label="Home" to="/" />
                    <q-breadcrumbs-el label="Film" />
                    <q-breadcrumbs-el :label="`${filmDetails.title}`" />
                </q-breadcrumbs>
            </div>
            <div class="col-12 col-md-9">
                <h1>{{ filmDetails.title }}</h1>
                <p><span style="margin-right: 30px;">{{ filmDetails.duration }}</span><span>{{ filmDetails.year }}</span></p>
                <h2>Film Details</h2>
                <p>Director: {{ filmDetails.director }}</p>
                <p>Genre: {{ filmDetails.genre }}</p>
                <p>Language: {{ filmDetails.language }}</p>
                <p>Released Date: {{ filmDetails.released }}</p>
            </div>
            <div class="col-12 col-md-3">
                <q-img
                    :src="`${filmDetails.poster}`" style="max-width: 300px;"
                />                    
            </div>
            </div>
        </div>

        </div>


    </div>
</template>

<script>
export default {
    props: ['name'],
    computed: {
        filmDetails() {
            const data = this.$store.getters.getFilmId(this.name)
            console.log(data)
            data.duration = (data.runtime/60 < 1)? `${data.runtime}m` : (data.runtime % 60 < 1)? `${Math.floor(data.runtime / 60)}h` : `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`
            return data
        }
    }
}
</script>