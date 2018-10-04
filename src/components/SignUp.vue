<template>
    <div class="sign-up">
        <div class="section"></div>
  <main>
    <center>
      <img class="responsive-img" style="width: 250px;" src="https://ucscisg.com/iHack4/images40/logos/org/croped.png" />
      <div class="section"></div>

      <h5 class="indigo-text">Create a new Account</h5>
      <div class="section"></div>

      <div class="container">
        <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

            <div class='row'>
              <div class='col s12'>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input class='validate' v-model="email" type='email' name='email' id='email' />
                <label for='email'>Enter your email</label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input class='validate' v-model="password" type='password' name='password' id='password' />
                <label for='password'>Enter your password</label>
              </div>
              <label style='float: right;'>
								<a class='pink-text' href='#!'><b>Forgot Password?</b></a>
							</label>
            </div>

            <br />
            <center>
              <div class='row'>
                <button v-on:click="signUp" name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Sign up</button>
              </div>
            </center>
        </div>
      </div>
      <router-link to="login"> go to login</router-link>
    </center>

    <div class="section"></div>
    <div class="section"></div>
  </main>
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
                        this.$router.replace('vote')
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
    .login{
        margin-top:40px;
    }
    body {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }

    main {
      flex: 1 0 auto;
    }

    body {
      background: #fff;
    }

    .input-field input[type=date]:focus + label,
    .input-field input[type=text]:focus + label,
    .input-field input[type=email]:focus + label,
    .input-field input[type=password]:focus + label {
      color: #e91e63;
    }

    .input-field input[type=date]:focus,
    .input-field input[type=text]:focus,
    .input-field input[type=email]:focus,
    .input-field input[type=password]:focus {
      border-bottom: 2px solid #e91e63;
      box-shadow: none;
    }
</style>