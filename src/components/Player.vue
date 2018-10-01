<template>
<div>
	<youtube :player-vars="config" 
		:video-id="songs[0].video.id.videoId" 
		:width="width" :height="height" 
		ref="youtube" 
		@playing="playing"
		@ended="finished"
		>
	</youtube>
</div>
</template>
 
<script>
import fs from 'firebase'
import { db } from '../db'

export default {
	firebase: {
        songs: db.ref('songs')
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
		playing () {
			console.log(this.player);
		},
		finished () {
			console.log('finished')
			this.$firebaseRefs.songs.child(this.songs[0]['.key']).remove();
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
