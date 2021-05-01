<template>
    <v-app>
  
        <div class="app-body">
        <contactArea :messages='messages.messages'/>
        <router-view :messages='messages.messages'/>
        </div>
   
    </v-app>
</template>

<script>

import contactArea from './components/contactArea';
import { io } from "socket.io-client";
const API_URL = 'http://localhost:3000/api/v1'; 

export default {
  name: 'App',

  components: {
    contactArea
  },

  data: () => ({
    messages: [],
    connection: null,
  }),
  created() {
    this.getMessages();
    this.connection = io('http://localhost:3000',{ transports : ['websocket'] });
    
  },
  methods: {
    getMessages() {
      fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        this.messages = data;
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