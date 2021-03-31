var app = new Vue({
    el: '#root',
    data: {
        albums: []
    },
    methods: {

    },
    mounted() {

        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((got) => {
            // se non uso l'operatore spread mi viene fuori un array con alla posizione 0 un array di 10 items
            this.albums.push(...got.data.response);
            console.log(this.albums);
        });

    }
});
Vue.config.devtools = true;