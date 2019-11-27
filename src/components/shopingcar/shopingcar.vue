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
          <button  @click="numjianjian">-</button>
               {{ num}}
                <button @click="numjiajia">+</button>
          </p> 
        <p> <button type="button" @click="remove(index)">删除</button>   </p>
        </li> 
     
     </ul>
    <!-- <div class="b2">
      <button  type="button" @click="totalPrice" >合计</button>
      <button type="" value="结算">结算</button>
                
   </div> -->
    </div>
    <!-- <div @click="totalPrice">  总价：￥{{totalPrice}}   </div>  -->
    <div>总价：￥{{totalPrice()}} </div>  
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
       bookhotList:null,
       num:1,
    
      
          }
    },
  
    components:{topNav,bottom
    
    },
    created(){
    
      this.getl();
      
    },
    methods:{
  
  numjiajia(){
     this.num+=1;
    
   },
    numjianjian(){
          this.num-=1;
       

    
   },
    totalPrice:function (){
                    var totalP = 0;
                    this.totalP=0
                    for (let i = 0;i<this.bookhotList.length;i++) {
                        // this.bookhotList[Id]["num"]=1;
                        this.totalP+=this.bookhotList[i].bookPrice*this.bookhotList[i].num;
                        console.log(this.bookhotList[i].bookPrice);
                        console.log(this.bookhotList[i].num);
                      
                    }
                    console.log(totalP)
                    return totalP;
                },
     
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
.hello{margin-bottom: 100px}
.book {
  width: 90%;
  margin: 4rem 0 6rem ;
  background: #fff;
  
  height:calc(100% - 10rem) ;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      box-sizing: border-box;
      border-bottom: @border-botm;
      width: 100%;
      list-style-type: none;
      .b2{
      margin: 5rem;
      }
//  .b2  button{
//          width:75px;  
//          height:40px;
//          line-height: 40px;
//          text-align: center;                  
//       }
//   .b2  button:nth-of-type(1){
//        background: black;
//      }
//     .b2  button:nth-of-type(2){
//          background: green;
//       }
        
     p {
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        color: #232326;
        font-size: 18px;
        padding-bottom: 38px;
     }
       input  button{
       width: 40px;
       height:20px;
       }
     
     
     
     
     
     .price {
        color: red;
        font-size: 19px;
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