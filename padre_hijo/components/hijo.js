Vue.component('hijo', {
    template: //html
        `<div class="p-5 bg-success">
            <p>{{numero}}</p>
            <h4>{{nombre}}</h4>
        </div>`,
    props: ['numero'],
    data() {
        return {
            nombre: 'Ignacio'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre)
    }
})