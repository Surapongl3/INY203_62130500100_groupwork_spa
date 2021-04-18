<template>
  <div class="breed">
    <header>
      <h2>
        Breed
        <strong>cat</strong>
      </h2>
    </header>

    <div class="dropdown flex flex-col  items-center">
      <button @click="showcontent = !showcontent" class="dropbtn bg-green-600 text-white w-40" >Dropdown</button>
      <div  class="dropdown-content w-40 bg-white" v-for="catdet in catDetail" :key="catdet.id">
        <a href="#/breed" v-show="showcontent"> {{catdet.name}}</a>
      </div>
      
      <img :src="catImage" > 
    </div>
    
     
     
      
   
  </div>
</template>
<script>
export default {

  mounted() {
    this.getCats();
  }

  , data() {
    return {

      catDetail: [],
      catImage:[],
      index : Number,
      showcontent: false
    }
  }

  , methods: {
    getCats() {
      this.axios.get('https://api.thecatapi.com/v1/breeds').then(response => {
        this.catDetail = response.data;
      
        
        this.catImage   = response.data[this.index].image.url
        console.log(this.catImage);

      })
    },
    setIndex(i){
        this.index = i;
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
header strong {
  color: #313131;
}
header :hover {
  color: #313131;
}



</style>
