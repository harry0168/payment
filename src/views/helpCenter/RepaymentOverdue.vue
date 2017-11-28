<template>
  <div>
    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>收到借款后，什么时候开始还款?</p>'}">
      <div slot="content" class="descClass">
        <p>贷款期结束后，即可还款。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>如何还款？</p>'}">
      <div slot="content" class="descClass">
        <p>在还款日当天10：00，16：00，系统会自动进行扣款；同时您也可以选择当天通过APP上的主动还款功能进行还款，请确保卡内余额充足，避免逾期。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>是否可以再次申请？</p>'}">
      <div slot="content" class="descClass">
        <p>借款还清后才可再次申请。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>什么是逾期？</p>'}">
      <div slot="content" class="descClass">
        <p>任何一期贷款未及时足额归还贷款本息即视为逾期，需收取每期的逾期费用，并且冻结逾期的账户，不能继续借款，还款后方可解冻。逾期将被记录在人民银行征信中心，影响您办理各类金融业务并会被追究相应的法律责任。信用即是财富，请珍爱您的信用。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>逾期会对我有什么影响？</p>'}">
      <div slot="content" class="descClass">
        <p>海贷提供的借款全部属于无担保无抵押纯信用借款，希望用户能珍惜自己的信用，尽量避免逾期还款的发生。 借款人提交借款申请，即视为借款人同意并签署《海贷个人借款及服务协议》，依据国家法律承担相应的违约责任。
          按协议约定，借款人须严格履行还款义务，如发生逾期还款，自逾期开始之后，逾期本金的正常利息停止计算。 海贷有权代表理财人对借款人进行借款逾期提醒及催收工作，包括电话通知、上门催收提醒、发律师函等。 若用户违约逾期还款，海贷有权将该用户的有关资料正式备案在“不良信用记录”，列入全国个人信用评级体系的黑名单（“不良信用记录”数据将为银行、电信、担保公司、人才中心、媒体、公检法等有关机构提供个人不良信用信息）此不良记录将保存7年，同时也有权将该用户信息向第三方平台进行披露，这些不良信息有可能影响到该用户未来的置业、借贷、消费及就业等生活的方方面面。
          海贷保留对该用户采取法律措施的权利，由此所产生的所有法律后果和费用（包括但不限于律师费）将由该用户来承担。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>如果出现逾期，需要支付哪些违约金？</p>'}">
      <div slot="content" class="descClass">
        <p>若未在还款日前进行还款或恶意拖欠导致还款失败，即为逾期，将产生滞纳金。您的逾期情况将记录在网络征信系统。如到期当日因无法操作还款导致逾期，或已还款但还款状态未更新导致逾期，请联系客服，我们会第一时间为您处理；如果因个人原因逾期，请及时还款，以免影响您的信用。信用即是财富，请珍爱您的信用！</p>
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
