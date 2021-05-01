<template>
    <div class="contact-area">
        <div class="sidebar_header">
            <v-avatar size='28'>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
     
            <div class="sidebar_headerRight">
                <i class="fas fa-circle-notch"></i>
                <i class="fas fa-comment-alt"></i>
                <i class="fas fa-ellipsis-v"></i>
            </div>
        </div>
        <div class="sidebar_search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="search or start a new text">
        </div>
        <div class="sidebar_chats">
        <contact v-for="(contact,idx) in Contacts" :key="idx" v-bind:contact ="contact"></contact>
        </div>
      
    </div>
</template>

<script>
import contact from './contact';

export default {
    name: "contactArea",
     props: {
        messages: {
            type: Array,
            default: function(){
                return [];
            },
        },
    },
    computed: {
        Contacts(){
            const set = new Set();
            for(const obj of this.messages){
                set.add(obj.to);
            }
            return [...set];
        }
    },
    components: {
        contact,
    }
    
}
</script>

<style>
.contact-area{
    display: flex;
    flex-direction: column;
    flex: 0.35;
}
.sidebar_header{
    display: flex;
    padding: 20px;
    justify-content: space-between;
}
.sidebar_headerRight{
   display: flex;
   align-items: center;
   justify-content: space-between;
   min-width: 10vw;
}
.sidebar_search{
    display: flex;
    align-items: center;
}
.sidebar_search > i{
    padding: 10px;
}
.sidebar_search > input{
    border: none;
    outline-width:0 ;/*for removing outline around input */
}
.sidebar_chats{
    overflow: scroll;
}
</style>