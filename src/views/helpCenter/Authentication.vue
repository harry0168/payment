<template>
  <div>
    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>登录时提示密码不对怎么办？</p>'}">
      <div slot="content" class="descClass">
        <p>请确保登录密码准确无误，如多次尝试仍提醒密码错误，可点击忘记密码重新设置您的密码。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>手机认证时，忘记服务密码怎么办？如何找回？</p>'}">
      <div slot="content" class="descClass">
        <p>如果手机服务密码忘记，通常有三种解决方法:</p>
        <p>（1）发短信到运营商服务获取</p>
        <p>（2）拨打运营商服务电话通过人工客服解决</p>
        <p>（3）手机认证时，按照海贷页面提示，点击忘记密码，跳转运营商官网重置密码</p>
        <p>（4）到营业厅办理</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>无法收到手机验证码怎么办？</p>'}">
      <div slot="content" class="descClass">
        <p>请确认您是否开通了相应的短信通知功能：短信收发过程中会存在延迟，收到的短信再10分钟内均有效，请耐心等待；请确认手机是否安装短信拦截或过滤软件；请确认手机是否能够正常接收短信（未处于停机或欠费状态）；中国移动用户，每天接收手机验证码的次数为10次。如果当日您接收手机验证码，次数已达10次就不能再接收，请隔天再试；如仍无法登陆，可通过在线客服反馈描述并截图给我们。
        </p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>手机认证提示业务繁多怎么办？</p>'}">
      <div slot="content" class="descClass">
        <p>可能您同一时间内获取了太多次手机验证码，导致业务繁忙，请耐心等待输入。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>绑定银行卡失败怎么办？</p>'}">
      <div slot="content" class="descClass">
        <p>如果出现绑卡失败，可能由于您太长时间没有使用该银行卡，或银行预留号码与注册号码不匹配，建议您换卡绑定。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>收款的银行卡有要求吗？</p>'}">
      <div slot="content" class="descClass">
        <p>1.收款的银行卡必须为本人持有的储蓄卡，并且可以正常使用，没有冻结。</p>
        <p> 2.确保银行卡预留手机号码正确。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>为什么会验卡失败？</p>'}">
      <div slot="content" class="descClass">
        <p>1.确保是您本人名下的储蓄卡</p>
        <p>2.可能是您近期信息发生改变，建议您更换另一张银行卡尝试。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>填写社交信息有什么帮助？</p>'}">
      <div slot="content" class="descClass">
        <p>完整地填写资料，有利于您更快地通过审核哦。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>填写工作信息对我贷款有什么帮助吗？</p>'}">
      <div slot="content" class="descClass">
        <p>系统审核时，会优先对资料完整的客户进行审核，资料填写全面正确的客户，会更容易通过审批哦。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>身份认证未通过？</p>'}">
      <div slot="content" class="descClass">
        <p>请确保您填写的信息正确，且为本人真实信息，建议您在光线充足的地方进行认证，认真检查再提交。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>人脸识别时APP无反应怎么办？</p>'}">
      <div slot="content" class="descClass">
        <p>可能是设备不适配造成的，建议检查是否开启摄像头权限，或更换手机再次尝试。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>为什么身份认证后提示人脸识别图片清晰度较低？</p>'}">
      <div slot="content" class="descClass">
        <p>身份认证后，系统会再次核实您的人脸照片，如果识别到您的人脸照片清晰度较低，需要您再次进行人脸识别；建议您在光线充足的环境下进行，以保证人脸照片质量。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>下次申请极速借款还要绑定资料吗？</p>'}">
      <div slot="content" class="descClass">
        <p>完成1次借款后，再次来借，如您还款记录良好，且两次申请时间间隔较短，将有可能一键完成借款，无需再次绑定资料！</p>
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
