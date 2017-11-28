import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('./../views/Home.vue')
    },
    {
      path: '/AuditArrival',
      name: 'AuditArrival',
      component: require('./../views/helpCenter/AuditArrival.vue')
    },
    {
      path: '/Authentication',
      name: 'Authentication',
      component: require('./../views/helpCenter/Authentication.vue')
    },
    {
        path: '/Borrowing',
      name: 'Borrowing',
      component: require('./../views/helpCenter/Borrowing.vue')
    },
    {
      path: '/FreeNote',
      name: 'FreeNote',
      component: require('./../views/helpCenter/FreeNote.vue')
    },
    {
      path: '/RepaymentOverdue',
      name: 'RepaymentOverdue',
      component: require('./../views/helpCenter/RepaymentOverdue.vue')
    },
    {
      path: '/UsePermissionsAndPrivacy',
      name: 'UsePermissionsAndPrivacy',
      component: require('./../views/protocol/UsePermissionsAndPrivacy.vue')
    },
    {
      path: '/InformationCollectionAndUsageRules',
      name: 'InformationCollectionAndUsageRules',
      component: require('./../views/protocol/InformationCollectionAndUsageRules.vue')
    },
    {
      path: '/LoanProtocol',
      name: 'LoanProtocol',
      component: require('./../views/protocol/LoanProtocol.vue')
    },
    {
      path: '/PlatformServiceProtocol',
      name: 'PlatformServiceProtocol',
      component: require('./../views/protocol/PlatformServiceProtocol.vue')
    },
    {
        path: '/AuthorizedDebitCommissionProtocol',
      name: 'AuthorizedDebitCommissionProtocol',
      component: require('./../views/protocol/AuthorizedDebitCommissionProtocol.vue')
    },
  ]
})
