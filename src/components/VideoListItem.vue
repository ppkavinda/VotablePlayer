<template>
<li class="row">
<div class="col s12 m7">
    <div class="card horizontal">
        <div class="card-image">
           <img :src="imgUrl">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <p v-text="videoTitle"></p>
            </div>
            <div class="card-action">
                <button class="btn waves-effect waves-light" type="submit" name="action" @click="videoSelected">
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
    }
  }
};
</script>
