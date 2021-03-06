var app = new Vue({
    el: '#root',
    data: {
        albums: [],
        genres: [],
        selected: 'All',
        seen: -1
    },
    methods: {
        // seen conterrà l'indice dell'album selezionato, oppure -1 se non è selezionato nessuno 
        albumDetails: function(itemIndex) {
            if (this.seen == -1) {
                this.seen = itemIndex;
            }
            else {
                this.seen = -1;
            }
        }
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

            // ordine per anno: si potrebbe utilizzare il sort ma voglio farlo "artigianalmente"
            for (let k = 0; k < this.albums.length; k++) {
                for (let i = 0; i < this.albums.length - 1; i++) {
                    if (parseInt(this.albums[i].year) > parseInt(this.albums[i + 1].year)) {
                        // scambio di posizione in modo che il più grande venga dopo
                        let bigger = this.albums[i];
                        let smaller = this.albums[i + 1];
                        this.albums[i] = smaller;
                        this.albums[i + 1] = bigger;
                    }
                    // successivamente aumenta l'indice, per continuare a confrontare il bigger finchè il più grande di tutti non è in fondo; tutta questa operazione va fatta tante volte quanti sono gli elementi dell'array albums, così ognuno degli elementi ha l'opportunità di essere messo per ultimo se è il più grande (per questo il for)
                };
            };
        });

    }
});
Vue.config.devtools = true;