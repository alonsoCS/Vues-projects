const app = new Vue({
    el: "#app",
    data: {
        mensaje: 'Hola soy VueWeb',
        contador: 0,

    },
    computed: {
        invertido() {
            let arreglo = this.mensaje.split('');
            let reverso = arreglo.reverse();
            let cadenaInvertida = reverso.join('');
            return cadenaInvertida;
        },
        color() {
            return {
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador <= 20,
                'bg-danger': this.contador > 20
            }
        }

    }
})