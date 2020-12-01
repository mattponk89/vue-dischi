Vue.config.devtools = true

const app = new Vue({
  el: '#root',
  data: {
    disks:[],
    genreSelected: "All"
  },
  mounted: function(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
          .then(result => {
            this.disks = result.data.response
          })
  },
  computed:{
    disksFiltered: function(){
      return this.disks.filter(el =>{
        if(this.genreSelected == "All"){
          return true
        } else {
          return el.genre.toLowerCase().includes(this.genreSelected.toLowerCase())
        }
      })
    }
  }
});
