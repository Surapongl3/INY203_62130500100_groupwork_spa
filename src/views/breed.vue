<template>
  <div class="breed">
    <header>
      <h2>
        Breed
        <strong>cat</strong>
      </h2>
    </header>

    <select name="breed" >
  
        <option v-for="catdet in catDetail" :key="catdet[i]">{{ catdet.name }}</option>
      </select>
        <div v-for="catdets in catDetail" :key="catdets[i]">
         {{catdets[i]}}
     
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
      i : 0
    }
  }

  , methods: {
    getCats() {
      this.axios.get('https://api.thecatapi.com/v1/breeds').then(response => {
        this.catDetail = response.data;
        // console.log(this.catDetail[1].image.url);

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
header strong {
  color: #313131;
}
header :hover {
  color: #313131;
}
</style>
