<template>
    <footer>
        <div>
            <AppLogo />
        </div>
        <b-list-group horizontal="md">
            <b-list-group-item href="https://github.com/nugrawan"><b-icon icon="github"
                    font-scale="2"></b-icon></b-list-group-item>
            <b-list-group-item href="mailto:nugrawanpratama203@gmail.com"><b-icon icon="envelope"
                    font-scale="2"></b-icon></b-list-group-item>
            <b-list-group-item href="https://www.linkedin.com/in/nugrawan-pratama-082064286/"><b-icon icon="linkedin"
                    font-scale="2"></b-icon></b-list-group-item>
        </b-list-group>
        <div class="footer-text">
            <p>FastFlix build by Nugrawan pratama 2023</p>
        </div>
    </footer>
</template>
<style>
footer {
    font-size: small;
    border-top: 1px solid white;
    background: #000;
    padding: 2rem 0 1rem;
    color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    justify-content: center;
}

.footer-text {
    margin: 1rem 0 0;
    font-style: oblique;
    width: 50%;
    text-align: center;
}

@media screen and (max-width: 560px) {
    footer {
        font-size: 2vw;
    }
}
</style>