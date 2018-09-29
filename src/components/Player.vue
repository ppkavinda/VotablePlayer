<template>
<div>
	<youtube :player-vars="config" 
		:video-id="videoId" 
		:width="width" :height="height" 
		ref="youtube" 
		@playing="playing"
		@ended="finished"
		>
	</youtube>
</div>
</template>
 
<script>
export default {
	data() {
		return {
			videoId: "Q8TXgCzxEnw",
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
			this.videoId = this.nextId
		}
	},
	computed: {
		player() {
			return this.$refs.youtube.player;
		}
	},
};
</script>
