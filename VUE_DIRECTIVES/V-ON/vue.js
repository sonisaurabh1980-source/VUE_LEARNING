const {createApp, ref} = Vue 
createApp({
    setup(){
        const lightOn = ref("false")
        return {lightOn}
    }
}).mount('#app')