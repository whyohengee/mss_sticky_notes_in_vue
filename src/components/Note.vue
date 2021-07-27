<template>
   <div class="note">
      <h2>{{ title }}</h2>
      <h2>{{ description }}</h2>
      <h2>{{ timestamp }}</h2>
      <router-link to="/form">Edit this note</router-link>
      <button>Delete this note</button>
   </div>
</template>

<script>
  export default {
    name: 'Note',
    props: {
      title: String,
      description: String,
      timestamp: String
    }
  }
</script>

<style>
  .note {

  }
</style>
