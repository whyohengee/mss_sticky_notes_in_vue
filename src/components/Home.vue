<template>
   <div class="wrapper">
      <h1>Home Component</h1>
      <div class="notes-wrapper" v-for="note in allNotes" :key="note.title">
        <Note
          :title="note.title"
          :description="note.description"
          :timestamp="note.timestamp"
        />
      </div>
      <router-link to="/form/new">Add Note</router-link>
   </div>
</template>

<script>
  import Note from './Note'
  import store from '../store/store'

   export default {
      name: 'Home',
      components: {
        Note
      },
      computed: {
        allNotes: function () {
          return store.getters.getAllNotes
        }
      }
   }
</script>