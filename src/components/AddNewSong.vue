<template>
   <div class="container">
        <div class="card-panel teal lighten-2">
            <h3>Welcome to <b>iHack 4.0</b> Web Player</h3>
        </div>
        <div class="card-panel ">
            <h5>Add New Song</h5>
            <div class="row">
                <div class="col s12 m6 offset-m3 l4 offset-l4 z-depth-6">
                    <input type="text" placeholder="Enter Song Name">
                </div>
                <div class="col s12 m6 offset-m3 l4 offset-l4 z-depth-6">
                    <button class="btn">Search</button>
                </div>
            </div>
        </div>
   </div> 
</template>

<script>
    import { YOUTUBE_API_KEY } from '../config';
    import YouTubeSearch from 'youtube-api-search';
    export default {
    name: 'newsong',
    data(){
        return {
        show: false,
        video: null,
        videos: [],
        selectedVideo: null,
        }
    },
    created() {
        this.videoSearch('Surfing');
    },
    methods:{
        videoSearch(searchTerm) {
            YouTubeSearch( {key: YOUTUBE_API_KEY, term: searchTerm}, (videos) => {

            this.videos = videos;
            // get the first video (before one is selected --this is the default)
            this.selectedVideo = videos[0];
            this.show = true;
            });
        },
        videoSelect(video) {
            this.selectedVideo = video;
        }
    }
    }
</script>