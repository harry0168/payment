<template>
  <section>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <el-form ref="form" size="mini" :model="form" label-width="80px">
          <el-form-item label="商品名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="商品金额">
            <el-input type="number" v-model="form.amount"></el-input>
          </el-form-item>
          <el-form-item label="支付渠道">
            <el-select v-model="form.channel" placeholder="请选择活动区域">
              <el-option label="支付宝" value="alipay_pc_direct"></el-option>
              <el-option label="微信支付公号扫码" value="wx_pub_qr"></el-option>
              <el-option label="银联" value="upacp_pc"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注信息">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
          <el-form-item v-show="qr.isShow">
            <qrcode :value="qr.url" :options="{ size: 200 }"></qrcode>
          </el-form-item>
          <el-form-item v-html="html"></el-form-item>
        </el-form>
      </el-col>
      <el-col :xs=" 4
          " :sm="6" :md="8" :lg="9" :xl="11"></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"></el-col>
    </el-row>

  </section>
</template>

<script>
  import pingpp from "pingpp-js"
  import Qs from 'qs'
  import VueQrcode from '@xkeshi/vue-qrcode'

  export default {
    data() {
      return {
        form: {
          name: '支付测试商品',
          channel: '',
          amount: 0.1,
          desc: '商品描述信息测试'
        },
        qr: {
          url: '',
          isShow: false
        },
        html: "<h1>这是一个支付宝页面</h1>",
      }
    },
    components: {
      'qrcode': VueQrcode
    },
    methods: {
      onSubmit() {
        let alipay_pc_directCharge = 'http://localhost:49851/Api/Payment/alipay_pc_directCharge';
        let upacp_pcCharge = 'http://localhost:49851/Api/Payment/upacp_pcCharge';
        let wx_pub_qrCharge = 'http://localhost:49851/Api//Payment/wx_pub_qrCharge';

        let requestUrl = '';
        if (this.form.channel === 'alipay_pc_direct') requestUrl = alipay_pc_directCharge;
        if (this.form.channel === 'upacp_pc') requestUrl = upacp_pcCharge;
        if (this.form.channel === 'wx_pub_qr') requestUrl = wx_pub_qrCharge;

        let params = {
          BUSINESS_PARAMETERS: {
            amount: this.form.amount * 100,
            channel: this.form.channel,
          }
        };
        this.$ajax.post(requestUrl,
          Qs.stringify(params),
          {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
          .then((res) => {
            let data = res.data.RESULT;
            if (this.form.channel === "alipay_pc_direct") {
              this.html = res.data.Body;
              document.forms.alipaysubmit.submit();
            }
            else if (this.form.channel === 'wx_pub_qr') {
              this.qr.url = data.wx_pub_qr;
              this.qr.isShow = true;
              console.log(data.wx_pub_qr)
            }
            else {
              pingpp.createPayment(data, (result, err) => {
                console.log(result);
                console.log(err.msg);
                console.log(err.extra);
                if (result === "success") {
                  alert(`成功支付${this.form.amount}元`)
                } else if (result === "fail") {
                  // charge 不正确或者微信公众账号支付失败时会在此处返回
                } else if (result === "cancel") {
                  // 微信公众账号支付取消支付
                }
              });
            }
          })
      },
    }
  }
</script>
