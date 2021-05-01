<template>
    <router-link :to="`/rooms/${contact}`">
   <div class="contact">
    <v-avatar size='28'>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
    <div class="contact-info">
        <h2>{{contact}}</h2>
    </div>
   </div>
   </router-link>
</template>

<script>
export default {
    name: "contact",
    props: ['contact'],
    data: function(){
        return {
            goto : `rooms/${this.contact}`
        }
    }
}
</script>

<style scoped>
.contact{
    display: flex;
    padding: 20px;
    cursor: pointer;
}
.contact:hover{
    background-color: rgb(243, 234, 243);
}
.contact-info{
    margin-left: 15px;
}
</style>