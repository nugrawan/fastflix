<template>
    <section>
        <b-jumbotron header="FastFlix" lead="Watch Series Subtitle Indonesia">
            <p>Get started to click the button below</p>
            <b-button variant="primary" to="#">Find movies</b-button>
        </b-jumbotron>
    </section>
</template>
<style>
.jumbotron {
    background-image: url('https://img.freepik.com/free-photo/movie-elements-black-background-with-copy-space_23-2148416798.jpg?w=740&t=st=1697585005~exp=1697585605~hmac=0fd409e34f08e874a3036eb53cd2445165f41eef20e6c0fbb5c03edf2a35bc2d');
    position: relative;
    z-index: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.jumbotron::before {
    content: "";
    background-image: none;
    background-color: rgba(0, 0, 0, 0.658);
    z-index: 10;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
}

.jumbotron h1,
.jumbotron .lead,
.jumbotron p,
.jumbotron a {
    position: relative;
    z-index: 20;
    color: white;
}

@media screen and (max-width: 960px) {

    .jumbotron .lead,
    .jumbotron p,
    .jumbotron a {
        font-size: xx-small;
    }

    .display-3 {
        font-size: 3rem;
    }

}
</style>