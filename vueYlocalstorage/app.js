const app = new Vue({
    el: "#app",
    data: {
        titulo: 'GYM con Vue',
        tareas: [],
        nuevaTarea: '',
        color: 'bg-danger'
    },
    methods: {
        AgregarTarea() {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
            this.nuevaTarea = ''
        },
        editarTarea(index) {
            this.tareas[index].estado = true;
            this.color = 'bg-info'
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminarTarea(index) {
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created() {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if (datosDB === null) {
            this.tareas = [];
        } else {
            this.tareas = datosDB;
        }
    }
})