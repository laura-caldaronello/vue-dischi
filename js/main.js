var app = new Vue({
    el: '#root',
    data: {
        albums: [],
        genres: [],
        selected: 'All'
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

            // metto le seguenti righe nel then per assicurarmi che le istruzioni vengano eseguite ad album ottenuti
            this.albums.forEach((album) => {
                let genre = album.genre;
                if (!this.genres.includes(genre)) {
                    this.genres.push(genre);
                }
            });
            console.log(this.genres);

        });

    }
});
Vue.config.devtools = true;