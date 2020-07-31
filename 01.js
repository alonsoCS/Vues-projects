const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo con Vue',
        frutas: [{
                nombre: 'Manzana',
                cantidad: 1
            },
            {
                nombre: 'Pera',
                cantidad: 3
            },
            {
                nombre: 'Platano',
                cantidad: 20
            },
            {
                nombre: 'Tomate',
                cantidad: 0
            }
        ],
        nuevaFruta: "",
        total: 0
    },
    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            })
            this.nuevaFruta = ""

        },
        otroMetodo() {

        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})