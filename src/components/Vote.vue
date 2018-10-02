<template>
    <div v-if="songs[0]" class="container">
        <div class="card-panel teal lighten-2">
            <h3>Welcome to <b>iHack 4.0</b> Web Player</h3>
        </div>
        <div class="row">
            <div class="col card-panel card-small red lighten-1 s12 card-main">
                <img :src="songs.filter( song => song.status==1)[0].video.snippet.thumbnails.default.url">

                <h5>{{ songs.filter( song => song.status == 1)[0].video.snippet.title}}</h5>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <router-link to="/newSong"><button class="btn">Add New Song </button></router-link>
            </div>
        </div>
        <div v-for="song in songs.filter( song => song.status != 1)" :key="song['.key']" class="card-panel card-small blue">
            <div class="row">
                <div class="col s2">

                <img :src="song.video.snippet.thumbnails.default.url" :alt="song.video.snippet.title">
                </div>
                <div class="col s4"><strong>{{ song.video.snippet.title }}</strong></div>
                <div class="col s2">
                    <button class="btn black">{{ song.upvotes.length - (song.downvotes)  ? song.downvotes.length : 0 }}</button>
                </div>
                <div class="col s2">
                    <button class="btn green" @click="onUpvote(song['.key'], song.votes)" :class="{'disabled' : voted(song.upvotes)}"> Upvote</button>
                </div>
                <div class="col s2">
                    <button class="btn red" @click="onDownvote(song['.key'], song.votes)" :class="{'disabled' : !voted(song.downvotes)}">DownVote</button>
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
            songs: db.ref('songs')
        }
    },
    data () {
        return {
            // songs: [],
            // voted: false,
        }
    },
    methods: {
        onUpvote (key, votes) {
            let uid = firebase.auth().currentUser.uid
            if (votes.includes(uid)) return

            votes.push(uid)
            this.$firebaseRefs.songs.child(key).child('votes').set(votes)
            this.songs.sort(this.compare)
        },
        onDownvote (key, votes) {
            votes.splice(votes.indexOf(firebase.auth().currentUser.uid), 1)
            // if (votes.length < 0) return
            this.$firebaseRefs.songs.child(key).child('votes').set(votes)
            this.songs.sort(this.compare)
        },
        voted (votes) {
            if (! votes) return
            console.log('vote')
            let uid = firebase.auth().currentUser.uid
            return votes.includes(uid)
        },
        compare(a,b) {
            if (a.upvotes.length - a.downvotes.length > b.upvotes.length - b.downvotes.length)
                return -1;
            if (a.upvotes.length - a.downvotes.length < b.upvotes.length - b.downvotes.length)
                return 1;
            return 0;   
        }
    },
    beforeMount () {
        console.log(this.songs)
    }
}
</script>

<style>
.card-small {
     height:150px;
}
.card-xs {
     height:35px;
}
.card-main{
    height:200px;
}
</style>