<template>
   <div class="contact">
    <v-avatar size='28'>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
    <div class="contact-info">
        <h2>{{message.name}}</h2>
    </div>
   </div>
</template>

<script>
export default {
    name: "contact",
    props: ['message'],
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