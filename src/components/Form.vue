<template>
   <div class="wrapper">
    <h1>Form Component</h1>
    <input
      class="noteTitle"
      type="text"
      v-model="title"
      placeholder="Enter note title..."
    />
    <textarea
      class="noteDescription"
      type="textarea"
      v-model="description"
      placeholder="Enter note description..." />
    <button @click="handleNewOrUpdate">Add/Update Note</button>
   </div>
</template>

<script>
  import store from '../store/store'

  export default {
    name: 'Form',
    data () {
      return {
        title: '',
        description: '',
        timestamp: ''
      }
    },
    methods: {
      doesNoteExist (title) {
        return store.getters.getAllNotes.filter(note => note.title.toLowerCase() === title.toLowerCase()).length !== 0
      },
      handleNewOrUpdate () {
        const noteObj = {
          title: this.title,
          description: this.description,
          timestamp: this.timestamp
        }
        console.log('exists: ', this.doesNoteExist(noteObj.title))
        this.doesNoteExist(noteObj.title) ? this.editExistingNote(noteObj) : this.addNewNote(noteObj.title)
      },
      addNewNote (noteObj) {
        store.dispatch('addNewNote', noteObj)
      },
      editExistingNote (noteTitle) {
        console.log('editing note')
      }
    }
  }
</script>