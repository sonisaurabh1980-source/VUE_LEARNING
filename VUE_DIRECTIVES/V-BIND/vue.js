const {createApp , ref} = Vue 
createApp({
    setup(){
        const message = ref("V-Bind")
        const info = ref("v-bind, bind an HTML attribute to data in the Vue instance. ")
        const val = ref("font-size: 30px;")
        return {message, info, val}
    }
}).mount('#app')