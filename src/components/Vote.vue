<template>
  <div v-if="songs[0]" class="container">
    <div class="card-panel teal lighten-2">
      <h3>Welcome to <b>iHack 4.0</b> Web Player</h3>
    </div>
    <div class="row">
      <div class="col card-panel card-small red lighten-1 s12 card-nowPlaying">

        <div class="row">
          <div class="col s4" style="padding-top:0.7rem">
            <img :src="songs.filter( song => song.status==1)[0].video.snippet.thumbnails.medium.url">
          </div>
          <div class="col s8" style="padding-left:20px">
            <h4>Now Playing</h4>
            <marquee>
              <h6 style="color:white">{{ songs.filter( song => song.status == 1)[0].video.snippet.title}}</h6>
            </marquee>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <router-link tag="a" title="add new song" to="/newSong" id="addButton" class="btn-floating btn-large waves-effect waves-light red">
          <i class="material-icons">add</i>
        </router-link>

      </div>
    </div>
    <div v-for="song in songs.filter( song => song.status != 1)" :key="song['.key']" class="card-panel card-small blue">
      <div class="row">
        <div class="col s2">
            <div class="card">
                <div class="card-image">
                <img :src="song.video.snippet.thumbnails.default.url" :alt="song.video.snippet.title">
                </div>
                <div class="card-title"  v-if="mySong(song)">
                    <a class="btn-floating halfway-fab waves-effect waves-light btn-small red" @click="onDelete(song['.key'], song)"><i class="material-icons left">delete_forever</i>Delete</a>
                </div>
            </div>
        </div>
        <div class="col s4"><strong>{{ song.video.snippet.title }}</strong></div>
        <div class="col s2">
          <button class="btn black">{{ song.upvotes.length - ((song.downvotes) ? song.downvotes.length : 0) }}</button>
        </div>
        <div class="col s2">
          <button class="btn green" @click="onUpvote(song['.key'], song)" :class="{'disabled' : voted(song)}"> Upvote</button>
        </div>
        <div class="col s2">
          <button class="btn red" @click="onDownvote(song['.key'], song)" :class="{'disabled' : voted(song)}">DownVote</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../db";
import firebase from 'firebase'

export default {
    name: 'vote',
    firebase () {
        return {
            songs: {
                source: db.ref('songs'),
                readyCallback: (e) => this.songs.sort(this.compare)
            }
        }
    },
    data () {
        return {
            songs: [],
            song: [],
            // voted: false,
        }
    },
    methods: {
        onUpvote (key, song) {
            // console.log(song)
            let uid = firebase.auth().currentUser.uid
            if (this.voted(song)) return

            song.upvotes.push(uid)
            this.$firebaseRefs.songs.child(key).child('upvotes').set(song.upvotes)
            this.songs.sort(this.compare)
        },
        onDownvote (key, song) {
            let uid = firebase.auth().currentUser.uid
            if  (this.voted(song)) return

            song.downvotes.push(uid) 
            this.$firebaseRefs.songs.child(key).child('downvotes').set(song.downvotes)
            this.songs.sort(this.compare)
        },
        voted (song) {
            // console.log(song.upvotes, song.downvotes)
            let uid = firebase.auth().currentUser.uid

            return song.upvotes.includes(uid) || song.downvotes.includes(uid)
        },
        compare(a,b) {
            if (a.upvotes.length - a.downvotes.length > b.upvotes.length - b.downvotes.length)
                return -1;
            if (a.upvotes.length - a.downvotes.length < b.upvotes.length - b.downvotes.length)
                return 1;
            return 0;   
        },
        Fsort () {
            // this.songs.sort(this.compare)
            // console.log(this.$firebaseRefs)

        },
        mySong (song) {
            let uid = firebase.auth().currentUser.uid
            return song.user === uid
        },
        onDelete(key, song) {
            this.$firebaseRefs.songs.child(key).remove()
        },
    },
    beforeMount () {
        // console.log(this.songs)
    },
    mounted () {
        // if (this.songs) {
            // this.songs.sort(this.compare)
        // }
        // console.log(this.$watch)
        // this.songs.once('value').then(e => console.log(this))
    },
    // watch: {
        // song (o, n) {
            // this.songs = this.song
            // this.songs.sort(this.compare)


// console.log('asdf')
        // }
    // }
}
</script>

<style>
.card-small {
     height:180px;
}
.card-nowPlaying{
    height: 200px;
}
.card-xs {
     height:35px;
}
.card-main{
    height:200px;
}
#addButton {
    position: fixed;
    bottom: 30px;
    right: 40px;
}
</style>