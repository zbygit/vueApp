<template>
  <div>
    <top>
      <div slot="center">{{msg}}</div>
      <div slot="left">
        <img src="../../assets/img/back.png" />
      </div>
    </top>
    <carrousel class="swiperbox" :swiperSlides="currentGoods.goodsBanner"></carrousel>
    <div class="con">
      <p class="names">{{currentGoods.goodsName}}</p>
      <p class="price">
        <span class="new">￥{{currentGoods.goodsPriceNew}}</span>
        <del class="old">￥{{currentGoods.goodsPriceOld}}</del>
      </p>

      <div class="speci">
        <span class="speciTitle">规格</span>
        <span class="currentSpec">
          标准
          <b>&gt;</b>
        </span>
      </div>
    </div>
    <div class="empty"></div>
    <ul class="info">
      <li class="active">详情</li>
      <li>评价</li>
      <li>售后</li>
    </ul>
    <div id="content">{{content}}</div>
    <ul id="bottom">
      <li>
        <span>客服</span>
        <span id="count" @click="count(currentGoods.goodsId)">收藏</span>
      </li>
      <li class="addCar" @click="addToshopcar(currentGoods)">
        加入购物车
        <span class="num">{{goodsNum}}</span>
      </li>
      <li>立即购买</li>
    </ul>
  </div>
</template>
<script>
import top from "../../publiccomponent/topNav";
import carrousel from "../../publiccomponent/swiper";
import { getHome } from "../../baseapi";
import Cookies from "js-cookie";
export default {
  name: "detail",
  data() {
    return {
      msg: "商品详情",
      goodsNum: 0,
      currentGoods: [],
      content: ""
    };
  },
  components: {
    top,
    carrousel
  },
  created() {
    this.xiang();
  },
  mounted() {
    this.getDom();
    this.setCount();
  },
  methods: {
    // 页面加载时获取当前项的各项信息用于显示
    xiang() {
      //该方法定义在created中，vue生命周期函数created执行后，data中的数据可以获取
      return getHome().then(res => {
        // 通过this.$route.query.属性名 获取页面传递的参数
        // getHome().then(res)中res为json文件中的所有内容，是一个数组
        // 通过id获取数据数组中的某项内容信息（id起始值与数组的下标起始值一致，均为0）
        this.currentGoods = res.home[this.$route.query.goodsId];
        this.content = this.currentGoods.detail;
      });
    },
    getDom() {
      //该方法定义在mounted中，vue生命周期函数mounted执行后，dom结构被解析渲染
      let that = this; //将vue的实例this赋值给that
      let li = $(".info li"); //使用jq方法获取li
      for (let i = 0; i < li.length; i++) {
        //循环遍历li数组
        $(li[i]).click(function() {
          //每项li点击事件
          $(this) //this指向当前点击的li
            .addClass("active")
            .siblings()
            .removeClass("active");
          // 判断循环下标i的值，获取指定的内容变更content
          switch (i) {
            case 0:
              that.content = that.currentGoods.detail;
              break;
            case 1:
              that.content = that.currentGoods.eval;
              break;
            case 2:
              that.content = that.currentGoods.sale;
              break;
            default:
              break;
          }
        });
      }
    },
    // 设置页面进入是否处于收藏状态
    setCount() {
      //该方法定义在mounted中，vue生命周期函数mounted执行后，dom结构被解析渲染
      // 获取保存的cookie信息
      let countCookie = Cookies.get("count");
      let countCookieArray =
        countCookie == undefined ? [] : JSON.parse(countCookie);

      let that = this; //将vue的实例this赋值给that
      // 使用数组的some方法判断cookie数组中是否包含当前项的id
      let countStatus = countCookieArray.some(function(item) {
        return item == that.$route.query.goodsId;
      });

      // 返回值为true的时候将添加count类名
      if (countStatus == true) {
        $("#count").addClass("count");
      }
      let carCookie = Cookies.get("car");
      carCookie = carCookie == undefined ? [] : JSON.parse(carCookie);
      if (carCookie[that.$route.query.goodsId] != undefined) {
        this.goodsNum = carCookie[that.$route.query.goodsId].num;
      }
    },
    // 收藏按钮点击事件
    count(currentGoodsId) {
      // 获取保存的cookie信息
      let countCookie = Cookies.get("count");
      let countCookieArray =
        countCookie == undefined ? [] : JSON.parse(countCookie);

      // 判断当前的收藏按钮是否包含count类名
      // 包含移除类名，并从cookie数组中移除该项的id
      if ($("#count").attr("class") == "count") {
        $("#count").removeClass("count");
        countCookieArray = countCookieArray.filter(function(item) {
          return item != currentGoodsId;
        });
      } else {
        // 不包含count类名给按钮添加，并向cookie数组中追加该项id
        $("#count").addClass("count");
        countCookieArray.push(currentGoodsId);
      }
      // 使用cookies重新设置cookie
      Cookies.set("count", JSON.stringify(countCookieArray), { expires: 7 });
    },
    addToshopcar(goodsItem) {
      let carCookie = Cookies.get("car");
      carCookie = carCookie == undefined ? [] : JSON.parse(carCookie);

      let has = carCookie.some(function(item) {
        return item.id == goodsItem.goodsId;
      });

      if (has == true) {
        for (let i = 0; i < carCookie.length; i++) {
          if (carCookie[i].id == goodsItem.goodsId) {
            carCookie[i].num++;
            this.goodsNum = carCookie[i].num;
          }
        }
      } else {
        this.goodsNum = 1;
        let goods = {
          id: goodsItem.goodsId,
          num: 1,
          bookImg: goodsItem.goodsIconHome,
          bookName: goodsItem.goodsName,
          bookPrice: goodsItem.goodsPriceNew,
          bookInfo: goodsItem.goodsName
        };
        carCookie.push(goods);
      }

      Cookies.set("car", JSON.stringify(carCookie), { expires: 7 });
    }
  }
};
</script>
<style lang="less" scoped>
.swiperbox img {
  height: 130px;
  width: 100%;
}
//商品顶部信息
.con {
  // background: red;
  float: left;
  width: calc(100% - 1rem);
  margin: 0 0.5rem;

  .names {
    float: left;
    font-size: 1.6rem;
    color: gray;
    width: 100%;
    text-align: left;
    line-height: 2rem;
  }
  .price {
    float: left;
    font-size: 2rem;
    color: gray;
    width: 100%;
    text-align: left;
    line-height: 3rem;
    border-bottom: 1px solid #cccccc;
    .new {
      margin-right: 1.3rem;
    }
  }
  .speci {
    float: left;
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    .speciTitle {
      float: left;
    }
    .currentSpec {
      float: right;
    }
  }
}
.empty {
  float: left;
  height: 1rem;
  width: 100%;
  background: #cccccc;
}
// 商品详情/评价/售后
.info {
  float: left;
  width: 100%;
  list-style: none;
  li {
    float: left;
    width: 33.3333%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
  }
  li.active {
    color: #ddccaa;
  }
}
#bottom {
  border: 1px solid gray;
  text-align: center;
  width: 100%;
  height: 5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  list-style: none;
  color: white;
  line-height: 5rem;
  li {
    flex: 1;
    height: 100%;
  }
  li:nth-of-type(1) {
    background: black;
    line-height: 7.5rem;
    span {
      // display: inline-block;
      width: 50%;
      height: 100%;
      float: left;
    }
    span:nth-of-type(1) {
      background: url("../../assets/img/chat.png") center 1rem no-repeat;
      background-size: 30%;
    }
    span:nth-of-type(2) {
      background: url("../../assets/img/coll.png") center 1rem no-repeat;
      background-size: 30%;
    }
    span.count {
      background: url("../../assets/img/coll_se.png") center 1rem no-repeat;
      background-size: 30%;
    }
  }
  li:nth-of-type(2) {
    background: #365c72;
    position: relative;
    span {
      position: absolute;
      top: 0;
      left: calc(100% - 3rem);
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
      background: #ff6600;
      border-radius: 50%;
    }
  }
  li:nth-of-type(3) {
    background: #5293ba;
  }
}
</style> 