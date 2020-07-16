import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import My from '../components/my/my.vue'
import Success from '../components/my/success.vue'
import Follow from '../components/my/follow.vue'
import Private from '../components/my/private.vue'
import Sign from '../components/my/sign.vue'
import Bianji from '../components/my/bianji.vue'
import User from '../components/my/user.vue'
import Auto from '../components/my/auto.vue'
import Report from '../components/my/report.vue'
import Opening from '../components/my/opening.vue'
import Need from '../components/my/need.vue'
import Lnvit from '../components/my/Invit.vue'
import Live from '../components/my/opening/index.vue'
import Livename from '../components/my/opening/livename.vue'
import Place from '../components/my/opening/place.vue'
import Activity from '../components/my/opening/activity.vue'
import Notice from '../components/my/opening/notice.vue'
import Division from '../components/my/opening/division.vue'
import Dis_name from '../components/my/opening/dis_name.vue'
import Displace from '../components/my/opening/dis_place.vue'
import Disnotice from '../components/my/opening/dis_notice.vue'
import Sutido from '../components/my/sutdio/index.vue'
import Details from '../components/my/sutdio/details.vue'
import Video from '../components/my/sutdio/video.vue'
import LiveList from '../components/index/livelist.vue'
import Punch from '../components/index/punch.vue'
import Lives from '../components/index/live.vue'
import Search from '../components/index/search.vue'
import SearchSon from '../components/index/searchson.vue'
import Online from '../components/index/online.vue'
import Mylive from '../components/index/mylive.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Index',
        component: Index
    },{
		path: '/my',
		name: 'My',
		component: My
	},{
		path: '/follow',
		name: 'Follow',
		component: Follow
	},{
		path: '/private',
		name: 'Private',
		component: Private
	},{
		path: '/sign',
		name: 'Sign',
		component: Sign
	},{
		path: '/bianji',
		name: 'Bianji',
		component: Bianji
	},{
		path: '/user',
		name: 'User',
		component: User
	},{
		path: '/auto',
		name: 'Auto',
		component: Auto
	},{
		path: '/report',
		name: 'Report',
		component: Report
	},{
		path: '/opening',
		name: 'Opening',
		component: Opening
	},{
		path: '/need',
		name: 'Need',
		component: Need
	},{
		path: '/invit',
		name: 'Lnvit',
		component: Lnvit
	},{
		path: '/success',
		name: 'Success',
		component: Success
	},{
		path: '/live',
		name: 'Live',
		component: Live
	},{
		path: '/livename',
		name: 'Livename',
		component: Livename
	},{
		path: '/place',
		name: 'Place',
		component: Place
	},{
		path: '/activity',
		name: 'Activity',
		component: Activity
	},{
		path: '/notice',
		name: 'Notice',
		component: Notice
	},{
		path: '/division',
		name: 'Division',
		component: Division
	},{
		path: '/disname',
		name: 'Dis_name',
		component: Dis_name
	},{
		path: '/displace',
		name: 'Displace',
		component: Displace
	},{
		path: '/disnotice',
		name: 'Disnotice',
		component: Disnotice
	},{
		path: '/sutido',
		name: 'Sutido',
		component: Sutido
	},{
		path: '/details',
		name: 'Details',
		component: Details
	},{
		path: '/video',
		name: 'Video',
		component: Video
	},{
		path: '/livelist',
		name: 'LiveList',
		component: LiveList
	},{
		path: '/punch',
		name: 'Punch',
		component: Punch
	},{
		path: '/lives',
		name: 'Lives',
		component: Lives
	},{
		path: '/search',
		name: 'Search',
		component: Search
	},{
		path: '/searchson',
		name: 'SearchSon',
		component: SearchSon
	},{
		path: '/online',
		name: 'Online',
		component: Online
	},{
		path: '/mylive',
		name: 'Mylive',
		component: Mylive
	}
  ]
})

