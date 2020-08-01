Vue.component('padre', {
    template: //html
        `<div class="p-5 bg-dark text-white">
            <h2>Componente Padre: {{numeroPadre}}</h2>
            <botton class="btn btn-danger" @click="numeroPadre++">+</botton>
            <hijo :numero="numeroPadre" @nombreHijo="nombrePadre=$event"></hijo>
            {{nombrePadre}}
        </div>`,
    data() {
        return {
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
})