<template>
  <div class="hello">
    <topNav>
      <div slot="center">{{pageMsg}}</div>
     <div slot="left">返回</div>
    </topNav>
    <div id="userInfo">
      <div class="userArea">
        <img src="../../assets/img/userIcon.png" alt />
        <p class="userNmae">你好美女</p>
      </div>
    </div>
    <!-- 操作選項 -->
    <div class="do">
      <!-- 订单 -->
      <div class="item">
        <div class="ItemLeft">
          <img class="btnIcon" src="../../assets/img/order.png" />
          <span class="btnText">全部订单</span>
        </div>
        <div class="ItemRight">
          <span class="itemContent"></span>
          <span class="btnrow"></span>
        </div>
      </div>
      <div class="msgInfo">
        <div class="wait_pay wait">
          待付款
          <i class="num">1</i>
        </div>
        <div class="wait_send wait">
          待发货
          <i class="num">2</i>
        </div>
        <div class="wait_comm wait">
          待评价
          <i class="num">3</i>
        </div>
      </div>
      <div class="empty"></div>
      <div class="otherDo">
        <div class="item">
          <div class="ItemLeft">
            <img class="btnIcon" src="../../assets/img/message.png" />
            <span class="btnText">我的消息</span>
          </div>
          <div class="ItemRight">
            <span class="itemContent"></span>
            <span class="btnrow"></span>
          </div>
        </div>
        <div class="item">
          <div class="ItemLeft">
            <img class="btnIcon" src="../../assets/img/collection.png" />
            <span class="btnText">我的收藏</span>
          </div>
          <div class="ItemRight">
            <span class="itemContent"></span>
            <span class="btnrow"></span>
          </div>
        </div>
        <div class="item">
          <div class="ItemLeft">
            <img class="btnIcon" src="../../assets/img/address.png" />
            <span class="btnText">我的地址</span>
          </div>
          <div class="ItemRight">
            <span class="itemContent"></span>
            <span class="btnrow"></span>
          </div>
        </div>
        <div class="item">
          <div class="ItemLeft">
            <img class="btnIcon" src="../../assets/img/preferential.png" />
            <span class="btnText">我的优惠</span>
          </div>
          <div class="ItemRight">
            <span class="itemContent"></span>
            <span class="btnrow"></span>
          </div>
        </div>
      </div>
      <div class="empty"></div>
      <div class="item">
        <div class="ItemLeft">
          <img class="btnIcon" src="../../assets/img/code.png" />
          <span class="btnText">门店扫码</span>
        </div>
        <div class="ItemRight">
          <span class="itemContent"></span>
          <span class="btnrow"></span>
        </div>
      </div>
    </div>
  <div slot="bottom"><bottom></bottom></div>
  </div>
</template>

<script>
import topNav from "../../publiccomponent/topNav"
import bottom from "../../publiccomponent/bottomNav"
export default {
  name: "mine",
  data() {
    return {
      pageMsg: "我的"
    };
  },

  components: {
    topNav,bottom
  },

  mounted() {
    this.setNav();
    this.getDom();
  },
  methods: {
    setNav() {
      var index = this.$route.query.index;
      $(`#bottom>div`)
        .eq(index)
        .css("color", "#6FA3C4")
        .siblings()
        .css("color", "#cccccc");
    },
    getDom() {
      let that = this;
      let ItemBtn = $(".item");
      let wait = $(".wait");

      for (let index = 0; index < ItemBtn.length; index++) {
           $(ItemBtn[index]).click(function() {
          switch (index) {
            case 0:
             that.$router.push('/order');
              break;
            case 1:
              alert(1);
              break;
            case 2:
              alert(2);
              break;
            case 3:
              alert(3);
              break;
            case 4:
              alert(4);
              break;
            case 5:
              alert(5);
              break;

            default:
              break;
          }
        });
        
      }
    
      console.log(ItemBtn.length);
    }
  }
};
</script>

<style lang="less" src="../../assets/css/mine.less"></style> 


