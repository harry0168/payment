<template>
  <div>
    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>审批时间是多久？</p>'}">
      <div slot="content" class="descClass">
        <p>海贷由系统进行自动审批，最快1分钟审批。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>如何查看我的审核及资金到账进度？</p>'}">
      <div slot="content" class="descClass">
        <p>成功发起贷款后，首页会显示贷款处理结果。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>审批未通过的原因是什么？</p>'}">
      <div slot="content" class="descClass">
        <p>极速借款未通过：</p>
        <p>（1）模型评分不足，该情况下建议您一个月后再来尝试申请</p>
        <p>（2）网络超时，出现这种情况的原因是您的部分资料因网络问题获取不完整，建议您1-2天后重新申请</p>
        <p>（3）建议您更换常用的手机设备及手机号</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>审批通过后多久资金可以到账？</p>'}">
      <div slot="content" class="descClass">
        <p>最快一小时到账。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>申请为什么会被拒绝贷款？</p>'}">
      <div slot="content" class="descClass">
        <p>一般来说，审核失败通常由于：</p>
        <p>（1）上传身份证照片不清晰，建议您根据提示重新上传清晰的照片</p>
        <p>（2）提交的身份证与填写的身份证信息不符，建议您重新核对信息</p>
        <p>（3）用户曾有不良借贷记录，无法通过审核</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>拒贷后多久可以再次申请？</p>'}">
      <div slot="content" class="descClass">
        <p>建议您在一个月后再次进行申请。</p>
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
