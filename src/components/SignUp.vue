<template>
    <div class="sign-up">
        <p>Let's Create a new Account</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="signUp">Signup</button>
        <span> go back to <router-link to="/login"> login </router-link> </span>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default{
        name:'signup',
        data: function(){
            return {
                email:'',
                password:''
            }
        },
        methods:{
            signUp:function(){
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                    (user)=>{
                        this.$router.replace('hello')
                    },
                    (err)=>{
                        alert('Oops, '+err.message)
                    }
                );
            }
        }
    }  
</script>

<style scoped>
    .signup{
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
    span{
        display:block;
        margin-top:20px;
        font-size:11px;
    }
</style>