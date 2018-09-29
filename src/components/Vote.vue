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
                <button class="btn">Add New Song </button>
            </div>
        </div>
        <div class="card-panel card-small blue">
            <div class="row">
                <div class="col s8">
                    Song Name
                </div>
                <div class="col s2">
                    <button class="btn green">Upvote</button>
                </div>
                <div class="col s2">
                    <button class="btn red">DownVote</button>
                </div>
            </div>
        </div>
        <div class="card-panel card-small blue">
            <div class="row">
                <div class="col s8">
                    Song Name
                </div>
                <div class="col s2">
                    <button class="btn green">Upvote</button>
                </div>
                <div class="col s2">
                    <button class="btn red">DownVote</button>
                </div>
            </div>
        </div>
        <div class="card-panel card-small blue">
            <div class="row">
                <div class="col s8">
                    Song Name
                </div>
                <div class="col s2">
                    <button class="btn green">Upvote</button>
                </div>
                <div class="col s2">
                    <button class="btn red">DownVote</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vote'
}
</script>

<style>
.card-small {
     height:70px;
}
.card-xs {
     height:35px;
}
.card-main{
    height:200px;
}
</style>