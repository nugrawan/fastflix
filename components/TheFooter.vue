<template>
    <footer>
        <div class="footer-list">
            <AppLogo />
        </div>
        <div class="footer-text">
            <p>Build by Nugrawan for portfolio project, build with nuxtjs framework. this movies data is from lk21 api, feel
                free to watch live on the lk21 websites</p>
        </div>
    </footer>
</template>
<style>
footer {
    border-top: 1px solid white;
    background: #000;
    padding: 3rem 0;
    color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    justify-content: center;
}

.footer-text {
    font-style: oblique;
    width: 50%;
    text-align: center;
}
</style>