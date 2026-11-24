const {createApp , ref} = Vue 
createApp({
    setup(){
        const message = ref("Hello Learner 👋")
        const info = ref("Be excited for learning Vue with me!!")
        return {message, info}
    }
}).mount('#app')
