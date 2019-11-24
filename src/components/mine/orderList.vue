<template>
  <div>
    <div class="orderItem">
      <!-- 日期 -->
      <div class="orderTop">
        <div class="time">
          <slot name="time"></slot>
        </div>
        <div class="orderStatus">
          <div class="orderStatus1">
            <slot name="orderStatus1"></slot>
          </div>
          <div class="orderStatus2">
            <slot name="orderStatus2"></slot>
          </div>
        </div>
      </div>
      <!-- 列表 -->
      <div class="orderList">
        <div class="orderItemInfo">
          <!-- 商品图片 -->
          <div class="goodsImg">
            <slot name="goodsImg"></slot>
          </div>
          <!-- 商品信息 -->
          <div class="goodsText">
            <div class="goodsName">
              <slot name="goodsText"></slot>
            </div>
            <div class="goodsColor">
              <slot name="goodsColor"></slot>
            </div>
          </div>

          <div class="goodsNum">
            <div class="goodsPrice">
              ￥&nbsp;
              <slot name="goodsPrice"></slot>
            </div>
            <div class="num">
              ×&nbsp;
              <slot name="num"></slot>
            </div>
          </div>
        </div>
      </div>
      <!-- 结算 -->
      <div class="calc">
        <p class="calcInfo">
          共
          <slot name="nums"></slot>件商品，合计:&nbsp;
          <slot name="tatal"></slot>(含运费￥
          <slot name="money"></slot>)
        </p>
        <div class="btns">
    
            <slot name="btns">
              <span class="falsed">
                <slot name="one"></slot>
              </span>
              <span class="conBtn">
                <slot name="two"></slot>
              </span>
              <span class="conBtn">
                <slot name="three"></slot>
              </span>
            </slot>
     
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderList"
};
</script>

<style lang="less" scoped>
// 一天内的商品列表
.orderItem {
  float: left;
  // 日期信息
  .orderTop {
    width: calc(100% - 2rem);
    height: 3rem;
    float: left;
    text-align: left;
    padding: 0 1rem;
    border-bottom: 1px solid #cccccc;
    .time {
      float: left;
      width: 60%;
      line-height: 3rem;
      text-align: start;
    }
    .orderStatus {
      float: left;
      width: 40%;
      line-height: 3rem;
      text-align: end;
      .orderStatus1 {
        color: #cccccc;
      }
      .orderStatus2,
      .orderStatus3 {
        color: red;
      }
    }
  }
  // 商品列表
  .orderList {
    width: 100%;
    float: left;
    //   单项商品信息
    .orderItemInfo {
      width: 100%;
      padding: 1rem 0;
      display: flex;
      border-bottom: 1px solid #cccccc;
      // 图片
      .goodsImg {
        width: 7rem;
        img {
          height: 6rem;
        }
      }
      // 中建信息
      .goodsText {
        width: 18rem;
        height: 6rem;
        margin: 0 1rem;
        text-align: left;
        .goodsName {
          width: 100%;
          height: 4rem;
          line-height: 2rem;
          font-size: 1.6rem;
        }
        .goodsColor {
          height: 2rem;
          width: 100%;
          line-height: 2rem;
          font-size: 1.2rem;
          color: #cccccc;
          overflow: hidden;
          word-wrap: normal;
          text-overflow: ellipsis;
        }
      }
      // 数量
      .goodsNum {
        width: calc(100% - 27.5rem);
        height: 6rem;
        text-align: end;
        line-height: 2rem;
        .goodsPrice {
          font-weight: 600;
        }
        .num {
          color: #cccccc;
        }
      }
    }
  }
  .calc {
    float: left;
    width: 100%;
    height: 6rem;
    p {
      float: right;
      height: 2.4rem;
      line-height: 2.4rem;
      text-align: right;
      margin-right: 0.5rem;
      font-weight: 600;
      font-size: 1.4rem;
    }
    .btns {
      width: 100%;
      height: 2.6rem;
      float: left;
      div {
        float: left;
        width: calc(100% - 0.5rem);
        // background: red;
        line-height: 2.4rem;
        margin: 0.1rem -1px;
        margin-right: 0.5rem;
        font-size: 1.4rem;
        text-align: right;

        span {
          display: inline-block;
          border-radius: 5px;
          width: 8rem;
          text-align: center;
          // background: #3b9abf;
        }
        span.falsed{
            border: 1px solid #cccccc;
      
        }
        span.conBtn{
            border: 1px solid #3b9abf;
          color: #3b9abf;
        }
      }
    }
  }
}
</style>