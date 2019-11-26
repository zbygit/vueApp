<template>
  <div class="hello">
    <topNav>
      <div slot="center">{{pageMsg}}</div>
    </topNav>
    <div class="book">
      <ul>
        <li v-for="(item,index) of bookhotList" :key="index">
          <img :src="item.bookImg" :alt="item.bookImg" />
          <p>{{item.bookName}}</p>
          <p class="price">{{item.bookPrice}}</p>
          <p>
           <button  @click="bookhotList[index].bookPrice-=1">-</button>
                {{ bookhotList.bookPrice }}    1
                <button @click="bookhotList[index].bookPrice+=1">+</button>
          </p>
        <p> <button type="button" @click="remove(index)">删除</button>   </p>
        </li>
                           
    
      </ul>
    </div>
       <div slot="bottom"><bottom></bottom></div>
  </div>
</template>

<script>
import topNav from "../../publiccomponent/topNav";
import bottom from "../../publiccomponent/bottomNav"
import {gethotlist } from "../../baseapi";
export default {
    name:'shopingcar',
    data(){
      return {
       pageMsg:'购物车',
       bookhotList:null
          }
    },
  
    components:{topNav,bottom
        // Header
        // ,Swiper
    },
    created(){
    
      this.getl();
      
    },
    methods:{
      getl(){
         gethotlist().then(res=>{console.log(res)
          this.bookhotList=res.hotlist;
        })},
        remove(inx) {  
         this.bookhotList=this.bookhotList.filter((bookhotList,index)=>{
             return index!=inx;
         });
     
    }
 }
}
</script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@border-botm: 1px solid #f5f5f5;
.book {
  width: 90%;
  margin: 0 auto;
  background: #fff;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      box-sizing: border-box;
      border-bottom: @border-botm;
      width: 100%;
      list-style-type: none;

      p {
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        // padding: 2px;
        color: #232326;
        font-size: 13px;
        padding-bottom: 38px;
     }
      .price {
        color: red;
        font-size: 15px;
      }
      &:nth-child(even) {
        border-left: @border-botm;
      }
      img {
        width: 100%;
        cursor: pointer;
      }
    }
  }
}
</style>