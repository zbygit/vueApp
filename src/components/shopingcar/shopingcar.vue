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
            <button @click="numjianjian(item.bookId)">-</button>
            {{ item.num}}
            <button @click="numjiajia(item.bookId)">+</button>
          </p>

          <p>
            <button type="button" @click="remove(index)">删除</button>
          </p>
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
      console.log(id);

      console.log(this.bookhotList);
      this.bookhotList[id].num += 1;
      this.totalP = this.bookhotList.reduce(function(current, next, index) {
        return current + next.bookPrice * next.num;
      }, 0);
    },
    numjianjian(id) {
      if (this.bookhotList[id].num <= 0) {
        this.bookhotList[id].num = 0;
      } else {
        this.bookhotList[id].num -= 1;
      }
      this.totalP = this.bookhotList.reduce(function(current, next, index) {
        return current + next.bookPrice * next.num;
      }, 0);
    },

    getl() {
      gethotlist().then(res => {
        console.log(res);
        this.bookhotList = res.hotlist;
      });
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
  margin-bottom: 100px;
}
.book {
  width: 90%;
  margin: 4rem 0 6rem;
  background: #fff;
  // position:relative;
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
        font-size: 18px;
        padding-bottom: 38px;
      }
      // p:nth-of-type(1) {
      // position: relative
      // left：-30px;

      // }

      input button {
        width: 40px;
        height: 20px;
      }

      .price {
        color: red;
        font-size: 19px;
        position: relative;
        left: -30px;
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