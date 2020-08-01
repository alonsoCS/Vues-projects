Vue.component('hijo', {
    template: //html
        `<div>
            <button @click="aumentar(3)">+3</button>
            <button @click="restar(3)">-3</button>
            <h1>numero:{{$store.state.numero}}</h1>
            <button @click="obtenerCursos">obtenerCursos</button>
            <ul v-for="curso of cursos">
                <li>{{curso.nombre}}</li>
            </ul>
            </div>`,
    computed: {
        ...Vuex.mapState(['numero', 'cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'restar']),
        ...Vuex.mapActions(['obtenerCursos'])
    }

})