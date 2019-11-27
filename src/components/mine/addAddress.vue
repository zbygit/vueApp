<template>
  <div class="order">
    {{this.$route.query.bottomShow}}
    <topNav>
      <div slot="left">
        <img src="../../assets/img/back.png" alt srcset />
      </div>
      <div slot="center">新增地址</div>
    </topNav>
    <div class="addAddress">
      <p class="infoItem">
        <span class="title">收货人</span>
        <input type="text" class="input" placeholder="姓名" />
      </p>
      <p class="infoItem">
        <span class="title">电话号码</span>
        <input type="text" class="input" placeholder="电话号码" />
      </p>
      <p class="infoItem">
        <span class="title">所在区域</span>

        <v-region @values="values"></v-region>
        <!-- <span class="addressChoose">{{defaultAddress}}</span>
        <span class="setAddress"></span>-->
      </p>
      <p class="infoItem">
        <span class="title">详细地址</span>
        <input type="text" class="input" placeholder="详细地址" />
      </p>
      <p class="setDefault infoItem">
        <span class="title">设为默认</span>
        <input type="checkbox" v-model="setDefault" id="default" />
        {{setDefault}}
      </p>
    </div>

    <div class="save" @click="saveAddress">保存并使用</div>
  </div>
</template>

<script>
import topNav from "../../publiccomponent/topNav";
import Jcookie from "js-cookie";

export default {
  name: "order",
  components: { topNav },
  data() {
    return {
      AddressCookie: [],
      chooseCity: "",
      setDefault: false
    };
  },
  methods: {
    values(val) {
         if (val.province != null) {
        if (val.city != null) {
          if (val.area != null) {
            this.chooseCity = `${val.province.value}${val.city.value}${val.area.value}`;
          }
        }
      }
    },

    saveAddress() {
      let AddressCookie = Jcookie.get("address");
      AddressCookie =
        AddressCookie == undefined ? [] : JSON.parse(AddressCookie);
      let user= $(".input").eq(0).val(),tel=$(".input").eq(1).val(),addressinfo=$(".input").eq(2).val();
      let that = this;
      if (user == "" || tel == "" || address== "" || that.chooseCity == "") {
        that.$layer.msg("地址相关内容不能为空");
        return;
      }
      let address = {
        user,
        tel,
        area: that.chooseCity,
        addressinfo,
        default: that.setDefault
      };
      if (address.default) {
        AddressCookie = AddressCookie.map(function(item) {
          return {
            user: item.user,
            tel: item.tel,
            area: item.area,
            addressinfo: item.addressinfo,
            default: false
          };
        });
      }
      AddressCookie.push(address);
      console.log(AddressCookie);
      
      Jcookie.set("address", JSON.stringify(AddressCookie), {
        expires: 7,
        path: ""
      });
      setTimeout(() => {
        that.$layer.msg("地址新增成功");
      }, 1000);
    }
  }
};
</script>
<style lang="less" src="../../assets/css/order.less"></style> 
