<template>
  <div>
    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>借款应该具备哪些条件？</p>'}">
      <div slot="content" class="descClass">
        <p>*年龄18-60周岁中国大陆公民</p>
        <p>*需具备申请人本人名下的银行借记卡</p>
        <p>*申请人需具备有效期2天以上的本人二代身份证</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>借款的额度范围？</p>'}">
      <div slot="content" class="descClass">
        <p>借款金额：500元/1000元</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>借款的可选期限？</p>'}">
      <div slot="content" class="descClass">
        <p>借款期限：7/14天</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>借款的费用和利息是多少？</p>'}">
      <div slot="content" class="descClass">
        <p>日利息为0.05%，此外海贷会收取风控费和服务费等相关费用，实际费用请以审核结果为准，详情查阅《借款合同》</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>极速借款首次申请最多能借多少？</p>'}">
      <div slot="content" class="descClass">
        <p>首次借款用户最高申请1000元，如您还款情况良好，再次申请时将有机会进行调额。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>极速借款如何提高额度？</p>'}">
      <div slot="content" class="descClass">
        <p>珍视个人信用，按时还款不逾期，多次还款记录良好可提高信用额度。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>申请需要提交哪些资料？</p>'}">
      <div slot="content" class="descClass">
        <p>申请借款，只需填写基本信息，并绑定2项资料(银行卡账号、运营商账号)，最快3分钟即可完成申请。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>目前极速借款可申请地区有哪些？</p>'}">
      <div slot="content" class="descClass">
        <p>全国范围均可申请。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>如何查看借款记录？</p>'}">
      <div slot="content" class="descClass">
        <p>登陆海贷，点击“我的”进入个人中心，点击“借款记录”查看。</p>
      </div>
    </card>
  </div>
</template>

<script>
  import {Card, Icon} from 'vux'

  export default {
    components: {
      Card,
      Icon
    },
    data() {
      return {};
    },
  }
</script>

<style scoped>
  .descClass{ color:#999; font-size:12px; }
</style>
