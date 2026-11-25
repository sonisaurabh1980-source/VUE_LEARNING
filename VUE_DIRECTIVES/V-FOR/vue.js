const {createApp , ref} = Vue 
createApp({
    setup(){
        const message = ref("Info and example of v-for")
        const info = ref("list rendering in Vue is done by using the v-for directive, so that several HTML elements are created with a for-loop.")
        const loop = ref("Here a list of courses....")
        const list = ref(['Python', 'DBMS' , 'PDSA' , 'MAD-1'])
        return {message, info, loop, list}
    }
}).mount('#app')