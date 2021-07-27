const state = {
  notes: [
    {
      title: 'Diana Taurasi',
      description: 'Diana Taurasi is an American professional basketball player for the Phoenix Mercury of the Women\'s National Basketball Association (WNBA).',
      timestamp: 'note timestamp here'
    },
    {
      title: 'Simone Biles',
      description: 'Simone Biles is an American artistic gymnast.',
      timestamp: 'note timestamp here'
    },
    {
      title: 'Caeleb Dressel',
      description: 'Caeleb Dressel is an American freestyle and butterfly swimmer who specializes in the sprint events.',
      timestamp: 'note timestamp here'
    }
  ]
}
const getters = {
  getAllNotes: state => state.notes
}

const actions = {
  addNewNote (ctx, noteObj) {
    ctx.commit('addNoteToState', noteObj)
  },
  editExistingNote (ctx, noteObj) {
    ctx.commit('editNoteAlreadyInState', noteObj)
  }
}

const mutations = {
  addNoteToState (state, noteObj) {
    state.notes.push(noteObj)

    console.log('added: ', state.notes)
  },
  editNoteAlreadyInState (state, noteObj) {
    console.log('mutation to edit existing note')
  }
}

export default {
   state,
   getters,
   actions,
   mutations
}