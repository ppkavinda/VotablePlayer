<template>
    <div class="login">
        <h3>Sign In </h3>
        <input type="text" placeholder="Email"><br>
        <input type="password" placeholder="Password"><br>
        <button v-on:click="login">Connection</button>
        <p>You dont have an account? <router-link to="/signup"> Create One </router-link></p>
    </div>
</template>

<script>
    export default{
        name: 'login',
        data: function(){
            return {}
        },
        methods:{
            login:function(){
                this.$router.replace('hello')
            }
        }
    }
</script>

<style scoped>
    .login{
        margin-top:40px;
    }
    input{
        margin:10px 0;
        width:20%;
        padding: 15px;
    }
    button{
        margin-top:40px;
        width:10%;
        cursor:pointer;
    }
    p{
        margin-top:40px;
        font-size:13px;
    }
    p a{
        text-decoration:underline;
        cursor:pointer;
    }
</style>