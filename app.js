const App = {
data() {
return{
    title: 'Список Заметок',
    placeholderString: 'Введите название заметки',
    inputValue: '',
    notes:[]
}
},

methods: {

//     inputChangeHandler(event){
//         this.inputValue = event.target.value
//     },

    addNewNote(){
    if(this.inputValue !== ""){
    this.notes.push(this.inputValue)
    this.inputValue= ''
    }
},
    deleteNote(index){
        this.notes.splice(index, 1)
},
    toUpperCase(item){
    return item.toUpperCase()
}
},

computed: {
    doubleCountComputed(){
        return this.notes.length * 2
}
},

watch: {
    inputValue(value){
        if(value.length > 13){
            this.inputValue= ""
        }
}
}

}

Vue.createApp(App).mount('#app');