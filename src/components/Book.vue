<template>
  <div class="flex flex-v">
    <h1>{{title}}</h1>
    <div class="flex">
      <input type="text" v-model='search' @keyup.enter="askForData" class="flex flex-1 search-input">
      <button @click="askForData" class="search-btn flex flex-align-center flex-pack-center">搜索</button>
    </div>
    <div v-for=" book in bookList" class = "flex book-items">
      <div class="f-img node-img">
        <img  v-bind:src=book.image  alt="">
      </div>
      <div class="flex-1 flex-v ">
        <div class="book-title">{{book.title}}</div>
        <div class="book-content">{{book.summary}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Store from '../store'
console.log(Store);  
export default {
  name: 'book',
  data () {
    return {
      title: '书籍',
      bookList:[],
      search:""
    }
  },
  created (){
      this.askForData()
      
  },
  methods:{
      askForData : function(){
          // console.log(this.search);
          this.$http.jsonp('https://api.douban.com/v2/book/search?start=0&count=10&q="'+this.search+'"',{},{
            headers:{},
            emulateJSON:true
          }).then(function(response){
            this.bookList = response.data.books
          },(res)=> console.log(res));
      }
  },
  watch:{
    search:{
      handler:function(val,oldVal){
        console.log(val,oldVal);
      },
      deep:true
    }
  }
  
}
</script>
<style scoped>
.search-input{
  padding: 5px 10px;
  font-size: 16px;
  border: none;
}
.search-btn{
  width: 60px;
  height: 40px;
  background-color: #fa9945;
  color: #fff;
}
.book-items{
  padding: 10px 30px;
  padding-left: 0;
  border-bottom:1px solid #999; 
}
.f-img{
	background-size:contain;
}
.node-img{
	width: 60px;
	height: 100px;
  margin-right:20px;
}
.node-img img{width: 100%;height: 100%}
.book-title{
  margin-bottom: 10px;
}
</style>