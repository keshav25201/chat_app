<template>
<div class="chat-area">
    <div class="chat-header">
        <v-avatar size='28'>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
        </v-avatar>
        <div class="chat-headerInfo">
            <h3>Kelly</h3>
        </div>
        <div class="chat-headerIcons">
            <i class="fas fa-search"></i>
            <i class="fas fa-paperclip"></i>
            <i class="fas fa-ellipsis-v"></i>
        </div>
    </div>
    <div class="chat-body">
        <p class="message" v-for="message in messages" :key="message._id">{{message.message}}</p>
    </div>
    <div class="chat-footer">
        <i class="far fa-smile-wink"></i>
        <form action="">
             <input type="text" placeholder="type message">
             <button>send</button>
        </form>
       
        <i class="fas fa-microphone"></i>
    </div>
</div>
</template>

<script>
export default {
    name: "chatArea",
    props: ['messages'],
}
</script>
<style scoped>
.chat-area{
	flex: 0.65;
    display: flex;
    flex-direction: column;
}
.chat-header{
    display: flex;
    padding: 20px;
    align-items: center;
}
.chat-headerIcons > i{
    margin: 10px;
}
.chat-headerInfo{
    flex: 1;
    padding-left: 20px;
}
.chat-body{
    background-color: plum;
    flex: 1;
    padding: 30px;
}
.message{
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    font-size:16px;
}
.chat-footer{
    display: flex;
    justify-content: space-between;
    height: 62px;
    align-items: center;
}
.chat-footer > form{
    display: flex;
    flex: 1;
}
.chat-footer > form > input {
    flex: 1;
    padding: 10px;
    border-radius: 30px;
}
.chat-footer > form > button{
    display: none;
}
.chat-footer > i{
    padding: 10px;
}
</style>