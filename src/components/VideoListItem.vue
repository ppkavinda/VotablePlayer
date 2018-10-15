<template>
  <li class="row">
    <div class="col s12 m12">
      <div class="card horizontal center">
        <div class="card-image">
          <img :src="imgUrl">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p v-text="videoTitle"></p>
          </div>
          <div class="card-action">
            <button v-if="video.alreadyInPlaylist" class="btn waves-effect waves-light disabled">
              Added in Playlist
            </button>
            <button v-else class="btn waves-effect waves-light" type="submit" name="action" @click="videoSelected">
              Add to the Playlist
            </button>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      video: Object,
      imgUrl: String,
      videoTitle: String
    },
    methods: {
      videoSelected() {
        this.$emit('videoSelected', this.video);
        // console.log(this.video);
      }
    }
  };

</script>
