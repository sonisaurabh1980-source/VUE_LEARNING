const {createApp , ref} = Vue 
createApp({
    setup(){
        const message = ref("Info and example for v-if")
        const info = ref("Conditional rendering in Vue is done by using the v-if, v-else-if and v-else directives.")
        const condition = ref("Here, I am taking a voting eligiblity condition...")
        const age = ref("42")
        return {message, info, condition, age}
    }
}).mount('#app')