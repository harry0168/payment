<template>
  <div>
    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>免息券有什么用处？</p>'}">
      <div slot="content" class="descClass">
        <p>免息券是由海贷官方给您发放的，用于抵偿您还款本金的电子商券。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>免息券要如何才能获得和领取？</p>'}">
      <div slot="content" class="descClass">
        <p>我们会不定期推出各种活动，免息券会作为活动奖品给您发放。免息券会直接发放到您的账户中。</p>
      </div>
    </card>

    <card :header="{title: '<p style=\'color:#000000;font-size:15px;font-weight:bold\'>如何使用我的免息券？</p>'}">
      <div slot="content" class="descClass">
        <p>您在还款时，选择对应产品的免息券即可。免息券在还款时减免还款本金。</p>
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
