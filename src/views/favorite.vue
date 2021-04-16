<template>
    <div class="favourite">
        <header>
            <h2 class="hover:text-gray-700">
                Favourite
                <strong>cat</strong>
            </h2>

            <h3 class="hover:text-red-600">Click Image to remove cat</h3>
        </header>

        <div class="imagecontainer">
            <div class="grid grid-cols-3 gap-3">
                <img
                    @click="clicked"
                    :src="cat.catImg"
                    :alt="cat.id"
                    class="image h-full w-full"
                    v-for="cat in cats"
                    :key="cat.id"
                />
            </div>
        </div>
    </div>
</template>
  <script>
export default {

    async mounted() {
        let catinfo = await this.axios.get("http://localhost:5000/cat")

        this.cats = catinfo.data;
    },
    data() {
        return {
            cats: []
        }
    }
    ,
    methods: {

        async clicked(id) {
            // let targeted = e.target.alt
            
          
             this.axios.delete("http://localhost:5000/cat/"+id.target.alt)
            
            
    }
    }
}
</script>
  <style>
body {
    background-color: pink;
}
h2 {
    margin-top: 10px;
}
header {
    padding-top: 50px;
    padding-bottom: 50px;
}
header h2 {
    color: #888;
    font-size: 42px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
}
header h3 {
    color: #888;
    font-size: 30px;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
}
header strong {
    color: #313131;
}

.image {
    height: 20rem;
    width: 30rem;
}
</style>