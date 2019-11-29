<template>
  <div class="hello">
    <topNav>
      <div slot="center">{{pageMsg}}</div>
    </topNav>
    <div class="book">
      <ul>
        <li v-for="(item,index) of bookhotList" :key="index">
          <img :src="item.bookImg" :alt="item.bookImg" />
          <div>
            <p>{{item.bookName}}</p>
            <span class="price">{{item.bookPrice}}</span>
            <span class="mn1">
              <button @click="numjianjian(item.id)">-</button>
              {{ item.num}}
              <button @click="numjiajia(item.id)">+</button>
            </span>
            <span class="mn2">
              <button type="button" @click="remove(index)">删除</button>
            </span>
          </div>
        </li>
      </ul>
    </div>

    <div>总价：￥{{totalP}}</div>
    <div slot="bottom">
      <bottom></bottom>
    </div>
  </div>
</template>

<script>
import topNav from "../../publiccomponent/topNav";
import bottom from "../../publiccomponent/bottomNav";
import { gethotlist } from "../../baseapi";
import Cookies from "js-cookie";
export default {
  name: "shopingcar",
  data() {
    return {
      pageMsg: "购物车",
      bookhotList: null,
      totalP: 0
     
   };
  },

  components: { topNav, bottom },
  created() {
    this.getl();
  },
  methods: {
    numjiajia(id) {
      this.bookhotList.forEach(element => {
         if(element.id==id){
            element.num+=1;
         }
      });
      this.totalP = this.bookhotList.reduce(function(current, next, index) {
     
        return current + next.bookPrice * next.num;
      }, 0);
    },
    numjianjian(id) {
       
       
       this.bookhotList.forEach(element => {
         if(element.id==id){
            element.num-=1;
         }else if(element.id<=0){
              element. num =0;
        }
     
     
     });
       



      this.totalP = this.bookhotList.reduce(function(current, next, index) {
        return current + next.bookPrice * next.num;
      }, 0);
    },

    getl() {
      // gethotlist().then(res => {
      //   console.log(res);
   let countCookie = Cookies.get("car");
      this.bookhotList =
        countCookie == undefined ? [] : JSON.parse(countCookie);

       
    },
    remove(inx) {
      this.bookhotList = this.bookhotList.filter((bookhotList, index) => {
        return index != inx;
      });
    }
  }
};
     




</script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@border-botm: 1px solid #f5f5f5;
.hello {
  margin-bottom: 80px;
}
.book {
  width: 90%;
  margin: 4rem 0 6rem;
  background: #fff;

  height: calc(100% - 10rem);
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

        color: #232326;
        font-size: 24px;
        padding-bottom: 38px;
      }
     
     
      .mn1{
        width:40px;
        height:40px;
        font-size:25px;  
        margin:20px;
       
     }
     
     button{
       width:40px;height:40px
     }
     
     
     .mn2{
      width:40px;
     margin: 20px;
      font-size:25px; 
     
     }
      .mn2  button{
          width:40px;height:40px
      }
    

      .price {
        margin:20px; 
       color: red;
       
      font-size: 25px;
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