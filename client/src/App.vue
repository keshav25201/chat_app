<template>
    <v-app>
      <v-content>
        <div class="app-body">
        <contactArea :messages='messages.messages'/>
        <chatArea :messages='messages.messages'/>
        </div>
      </v-content>
    </v-app>
</template>

<script>
import chatArea from './components/chatArea';
import contactArea from './components/contactArea';

const API_URL = 'http://localhost:3000/api/v1'; 

export default {
  name: 'App',

  components: {
    chatArea,
    contactArea
  },

  data: () => ({
    messages: [],
  }),
  created() {
    this.getMessages();
  },
  methods: {
    getMessages() {
      fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        this.messages = data;
        console.log(this.messages);
      })
      .catch(err => {
        console.log(err);
      });
    },
  },
};
</script>

<style scoped>
body{
  margin: 0;
}
#app{
  display: grid;
  place-items: center; 
  background-color: purple; 
}
  .app-body{
     margin-top: 50px;
    background-color: white;
    display: flex;
    width: 90vw;
    height: 90vh;
  }
</style>