<template>
    <input type="text" v-model="searchTerm" @keypress.enter="search" placeholder="Hit enter to search">
</template>

<script>
import { YOUTUBE_API_KEY } from '../config';
import YouTubeSearch from 'youtube-api-search';

export default {
    name: 'newsong',
    data(){
        return {
            video: null,
            videos: [],
            searchTerm: '',
        }
    },
    methods:{
        search () {
            this.$emit('newSearch', this.searchTerm)
        },
    }
}
</script>