<template>
    <div class="container">
        <div class="card-panel teal lighten-2">
            <h3>Welcome to <b>iHack 4.0</b> Web Player</h3>
        </div>
        <div class="row">
            <div class="col card-panel card-small red lighten-1 s6 card-main">
                <h5>Now Playing</h5>
            </div>
            <div class="col card-panel card-small red lighten-1 s6 card-main">
                <h5>Next Song</h5>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <router-link to="/newSong"><button class="btn">Add New Song </button></router-link>
            </div>
        </div>
        <div v-for="song in songs" :key="song['.key']" class="card-panel card-small blue">
            <div class="row">
                <div class="col s2">

                <img :src="song.video.snippet.thumbnails.default.url" :alt="song.video.snippet.title">
                </div>
                <div class="col s4"><strong>{{ song.video.snippet.title }}</strong></div>
                <div class="col s2">
                    <button class="btn black">{{ song.votes }}</button>
                </div>
                <div class="col s2">
                    <button class="btn green" @click="onUpvote(song['.key'], song.votes)"> Upvote<span>({{ song.votes }})</span></button>
                </div>
                <div class="col s2">
                    <button class="btn red" @click="onDownvote(song['.key'], song.votes)">DownVote</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from "../db";

export default {
    name: 'vote',
    firebase: {
        songs: db.ref('songs')
    },
    data () {
        return {
            // songs: [],
        }
    },
    methods: {
        onUpvote (key, votes) {
            votes++
            this.$firebaseRefs.songs.child(key).child('votes').set(votes)
            this.songs.sort(this.compare)
        },
        onDownvote (key, votes) {
            votes--
            if (votes < 0) return
            this.$firebaseRefs.songs.child(key).child('votes').set(votes)
            this.songs.sort(this.compare)
        },
        compare(a,b) {
            if (a.votes > b.votes)
                return -1;
            if (a.votes < b.votes)
                return 1;
            return 0;
        }
    },
    beforeMount () {
        console.log(this.songs)
    }
}
</script>

ongc
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