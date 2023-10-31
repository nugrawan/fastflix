<template>
    <div>
        <NavBar />
        <main>
            <b-list-group vertical="sm" class="vertical-list ml-5">
                <b-list-group-item href="https://github.com/nugrawan"><b-icon icon="github"
                        font-scale="1"></b-icon></b-list-group-item>
                <b-list-group-item href="mailto:nugrawanpratama203@gmail.com"><b-icon icon="envelope"
                        font-scale="1"></b-icon></b-list-group-item>
                <b-list-group-item href="https://www.linkedin.com/in/nugrawan-pratama-082064286/"><b-icon icon="linkedin"
                        font-scale="1"></b-icon></b-list-group-item>
            </b-list-group>
            <Nuxt />
        </main>
        <TheFooter />
    </div>
</template>
<style>
body {
    background-color: black;
    color: white;
}
</style>