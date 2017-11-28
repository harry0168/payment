<template>
  <div>
    <group title="帮助中心">
      <cell title="借款问题" link="/Borrowing"></cell>
      <cell title="认证问题" link="/Authentication"></cell>
      <cell title="审核到账问题" link="/AuditArrival"></cell>
      <cell title="还款和逾期" link="/RepaymentOverdue"></cell>
      <cell title="免息券" link="/FreeNote"></cell>
    </group>

    <group title="协议">
      <cell title="海贷用户使用许可与隐私协议" link="/UsePermissionsAndPrivacy"></cell>
      <cell title="信息收集及使用规则" link="/InformationCollectionAndUsageRules"></cell>
      <cell title="借款协议" link="/LoanProtocol?orderNo=test123&name=测试数据&id_type=123&apply_amt=1000&loan_use=测试用&payout_date=2017-11-28&repay_date=2017-11-28&apply_date=2017-11-28"></cell>
      <cell title="平台服务协议" link="/PlatformServiceProtocol?orderNo=test333&name=测试人&id_type=112244&apply_date=2017-9-8&repayment_date=2017-11-8&repayment_amount=1000&repayment_principal=900&repayment_interest=100&repayment_dataServiceFee=100&repayment_platformServiceFee=50&repayment_riskControlServiceFee=30&repayment_postLoanServiceFee=70&repayment_periods=1"></cell>
      <cell title="授权扣款委托书" link="/AuthorizedDebitCommissionProtocol?name=测试人&id_type=123&tel=12345677897&card_name=测试人&card_bank=农业银行&card_no=sn123&apply_date=2017-9-8"></cell>
    </group>
  </div>
</template>

<script>
  import {Card, Icon, Group, Cell} from 'vux'

  export default {
    components: {
      Card,
      Icon,
      Group,
      Cell
    },
    data() {
      return {};
    },
  }
</script>

<style scoped>
  .descClass{ color:#999; font-size:12px; }
</style>
