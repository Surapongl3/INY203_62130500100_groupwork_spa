<template>
    <div v-if="!isLoading">
    <header>
        <h1>
            The
            <strong>Cat</strong>picture
        </h1>
    </header>

    <div class="container flex gap-5 justify-center">
        <div class="like">
            <button @click="FavouriteCat" class="liked text-white">love it</button>
        </div>
        <div class="not-like">
            <button @click="GenCat" class="not-liked text-white">nope it</button>
        </div>
    </div>
    <div
        class="flex flex-col items-center"
        @mouseover="hovercat = true"
        @mouseleave="hovercat = false"
    >
        <img class="image" :src="catInfo.image.url" />
    </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {

   async mounted() {
       this.GenCat();
    },

    data() {

        return {
            catInfo: {},
            isLoading: true,
            hovercat: false

        }

    }
    , methods: {
        async GenCat() {
            let apiurl = "https://api.thecatapi.com/v1/breeds"
            let response =  await this.axios.get(apiurl)
             let rand = Math.floor(Math.random() *response.data.length)
                this.catInfo = response.data[rand]
                console.log(this.catInfo.image.url);
                this.isLoading = false;
        },
         FavouriteCat() {
            let cats = {
                   catImg : this.catInfo.image.url,
                   catName : this.catInfo.name
            }
            this.axios.post('http://localhost:5000/cat', cats).then((response) => {
                console.log(response);
                this.GenCat();
            })
        }

    }
}
</script>

<style language="scss">
body {
    background-color: pink;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Avenir, Helvetica, Arial, sans-serif;
}
a {
    text-decoration: none;
}
header {
    padding-top: 50px;
    padding-bottom: 50px;
}
header h1 {
    color: #888;
    font-size: 42px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
}
header strong {
    color: #313131;
}
header :hover {
    color: #313131;
}
button.liked {
    width: 100px;
    font-size: 30px;
    background-color: green;
}
.like :hover {
    background-color: #03631e;
}
button.not-liked {
    width: 100px;
    font-size: 30px;
    background-color: red;
}
.not-like :hover {
    background-color: #be0205;
}

.image {
    height: 25rem;
    width: 40rem;
    margin-top: 5px;
}
</style>
