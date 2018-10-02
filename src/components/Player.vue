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
			songs: db.ref('songs').orderByChild('votes')
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
			nextId: 'jC5MQJ8BZqw',
		};
	},
	methods: {
		playVideo () {
			this.player.playVideo();
		},
		playing (song) {
			let key = song['.key']
			this.$firebaseRefs.songs.child(key).child('status').set(1)
			console.log(song);
			console.log(this.songs.length)
		},
		finished (song) {
			console.log(song)
			console.log('finished')
			this.$firebaseRefs.songs.child(song['.key']).remove();
			// this.videoId = this.nextId
			// TODO
		}
	},
	computed: {
		player() {
			return this.$refs.youtube.player;
		}
	},
};
</script>
