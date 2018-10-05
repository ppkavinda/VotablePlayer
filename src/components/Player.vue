<template>
<div>
	<youtube :player-vars="config" 
		v-if="songs[0]"
		:video-id="songs[0].video.id.videoId" 
		:width="width" :height="height" 
		ref="youtube"
		@playing="playing(songs[0])"
		@ended="finished(songs[0])"
		>
	</youtube>
</div>
</template>
 
<script>
import fs from 'firebase'
import { db } from '../db'

export default {
	firebase () {
        return {
            songs: {
                source: db.ref('songs'),
                readyCallback: (e) => this.songs.sort(this.compare)
            }
        }
    },
	data() {
		return {
			currentSong: {},
			config: {
				autoplay: 1,
				// controls: 0,
				fs:1,
			},
			width: '1300',
			height: '650',
		};
	},
	methods: {
		playVideo () {
			this.player.playVideo();
		},
		playing (song) {
			let key = song['.key']
			this.$firebaseRefs.songs.child(key).child('status').set(1)
			this.songs.sort(this.compare)

			// console.log(song);
			// console.log(this.songs.length)
		},
		finished (song) {
			// console.log(song)
			// console.log('finished')
			this.$firebaseRefs.songs.child(song['.key']).remove();
			// this.videoId = this.nextId
			// TODO
		},
		
        compare(a,b) {
            if (a.upvotes.length - a.downvotes.length > b.upvotes.length - b.downvotes.length)
                return -1;
            if (a.upvotes.length - a.downvotes.length < b.upvotes.length - b.downvotes.length)
                return 1;
            return 0;   
        },
	},
	computed: {
		player() {
			return this.$refs.youtube.player;
		}
	},
};
</script>
