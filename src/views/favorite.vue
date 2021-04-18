<template>
    <div class="favourite">
        <header>
            <h2 class="hover:text-gray-700">
                Favourite
                <strong>cat</strong>
            </h2>

            <h3 class="hover:text-red-600">Click Image to remove cat</h3>
        </header>

        <div class="imagecontainer mx-3 ">
            <div  class="grid grid-cols-3 gap-3">
                
            <catmodel  v-for="cat in cats"
            :key="cat.id" :cat="cat"
            @update="putCat"
            @delete="deleteCat">
        
            </catmodel>
            </div>
        </div>
    </div>
</template>
  <script>
export default {

    async mounted() {
        this.getData()
    },
    data() {
        return {
            cats: [],
           
        }
    }
    ,
    methods: {
        getData() {
            this.axios.get("http://localhost:5000/cat").then(response => {
                this.cats = response.data

            })
        },
        deleteCat(id) {
       
           

            this.axios.delete("http://localhost:5000/cat/" + id).then(() => {
                this.getData();
            })


        },
       async putCat({id,value,catImg}){
              await  this.axios.put("http://localhost:5000/cat/"+id,{
                       id,catImg,
                        catName : value
                })
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