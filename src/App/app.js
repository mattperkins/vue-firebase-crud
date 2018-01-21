// firebase > database > rules > "auth != null"
import { namesRef } from '../firebase'

export default {
  data () {
    return {
      name: '',
      placeholder: 'Add a person here'
    }
  },
  firebase: {
      names: namesRef
  },
  methods: {
      submitName(){
          if(!this.name == '')
          namesRef.push({
              name: this.name, edit: false
          }), this.name = ''
          else alert('Your entry was empty. Please add some content.')
      },
      removePerson(key){
          namesRef.child(key).remove()
      },
      editPerson(key){
          namesRef.child(key).update( {edit: true} )
      },
      cancelEdit(key){
          namesRef.child(key).update( {edit: false} )
      },
      saveEdit(person){
          const key = person['.key']
          namesRef.child(key).set( {name: person.name, edit: false} )
      }
  }
} 



