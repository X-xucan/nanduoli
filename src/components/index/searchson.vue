<template>
	<div>
		<div class="search clearfix">
			<router-link to="/">
				<div class=" icon fl">
					<i class="iconfont icon-fanhui"></i>
				</div>
			</router-link>
			<router-link to="/searchson">
				<div class="fl">
					<input type="text" placeholder="输入搜索内容"/>
					<img src="../../img/sousuo.png" />
				</div>
			</router-link>
			<router-link to="/">
				<div class="my fr">
					取消
				</div>
			</router-link>
		</div>
		<div class="contentr">
			<div class="home">
				 <ul class="tab-tilte clearfix">
					<li @click="cur=0" :class="{active:cur==0}">直播间</li>
					<li @click="cur=1" :class="{active:cur==1}">短视频</li>
					<li @click="cur=2" :class="{active:cur==2}">赛区</li>
					<li @click="cur=3" :class="{active:cur==3}">用户</li>
				</ul>
				<div class="tab-content">
					<div class="video" v-show="cur==0">
						<ul class="clearfix">
							<router-link to="/livelist">
								<li :key="item.index" v-for="item in Lives">
									<div class="live clearfix">
										<div class="live_mode fl"></div>
										<span class="fl list">LIOV</span>
									</div>
									<div class="video_list">
										<img :src="item.img" />
									</div>
									<div class="clearfix">
										<div class="head fl">
											<img :src="item.head" />
										</div>
										<p class="fr deta">{{item.date}}</p>
									</div>
								</li>
							</router-link>
						</ul>
					</div>
					<div class="video" v-show="cur==1">
						<ul class="clearfix">
							<router-link to="/video">
								<li :key="item.index" v-for="item in Lives">
									<div class="video_list">
										<img :src="item.img" />
									</div>
									<div class="clearfix">
										<div class="head fl">
											<img :src="item.head" />
										</div>
										<div class="fr clearfix">
											<img style="width: 10px; height: 10px; float: left; margin-top: 4px; margin-right: 5px;" src="../../img/dianzan.png" />
											<p class="deta fl">{{item.give}}</p>
										</div>
									</div>
								</li>
							</router-link>
						</ul>
					</div>
					<div class="invit_follow" v-show="cur==2">
						<ul>
							<router-link to="/sutido">
								<li :key="item.index" v-for="item in Divisions">
									<div>
										<img :src="item.img" />
									</div>
									<div class="clearfix text-title">
										<div class="fl">
											<p class="title">{{item.title}}</p>
											<div class="clearfix margin-5-top">
												<span class="fl create">
													<span>创建人</span>
													<span>{{item.create}}</span>
												</span>
												<p class="text-black text-hei fl margin-10-left">
													<span class="text-blue">{{item.follow}}</span>
													人已关注
												</p>
											</div>
										</div>
										<div class="guanzhu">
											<i class="iconfont icon-guanzhu"></i>
											<p>关注</p>
										</div>
									</div>
								</li>
							</router-link>
						</ul>
					</div>
					<div class="user" v-show="cur==3">
						<ul>
							<router-link to="/my">
								<li class="clearfix">
									<div class="tab-cont-head fl">
										<img src="../../img/head.jpg" />
									</div>
									<div class="tab-cont-title fl">
										<p class="name">阿拉蕾</p>
										<p class="commit overflow3">这个人很懒没有个性签名</p>
									</div>
								</li>
							</router-link>
							<li class="clearfix">
								<div class="tab-cont-head fl">
									<img src="../../img/head.jpg" />
								</div>
								<div class="tab-cont-title fl">
									<p class="name">阿拉蕾</p>
									<p class="commit overflow3">这个人很懒没有个性签名</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {live,division} from '../../js/list.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
		cur: 0,
		Lives: live,
		Divisions: division
    }
  }
}
</script>

<style scoped="scoped">
.tab-content .user{
	padding: 20px;
}
.tab-cont-title .name{
	font-size: 30px;
	font-weight: bold;
}
.tab-cont-title .commit{
	color: #999999;
	font-size: 24px;
	width: 436px;
}
.tab-cont-title .huifu{
	color: #999;
	font-size: 22px;
	margin-top: 10px;
}
.tab-content ul li {
	margin-bottom: 50px;
}
.tab-cont-title{
	margin-left: 24px;
	margin-top: 12px;
}
.tab-cont-head{
	width: 88px;
	height: 88px;
	border-radius: 50%;
}
.tab-cont-head img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.tab_cont_img{
	width: 88px;
	height: 88px;
}
.tab_cont_img img{
	width: 88px;
	height: 88px;
}
.notice_tab{
	width: 100%;
}
.fabiao{
	width: 78px;
	height: 70px;
	position: fixed;
	right: 0;
	z-index: 10000;
	top: 600px;
}
.fabiao img{
	width: 100%;
	height: 100%;
}
.invit .title{
	font-size: 36px;
	margin-bottom: 20px;
}
.invit_right .invit_top{
	width: 100%;
	height: 142px;
	background: #31b5ad;
	margin-bottom: 10px;
	padding-top: 20px;
} 
.invit_right .invit_bottom{
	width: 100%;
	height: 142px;
	background: #ee589e;
	padding-top: 48px;
	color: #fff;
}
.tab-content .invit	.invit_left{
	width: 350px;
	height: 297px;
	background: #f7a56a;
	color: #fff;
	text-align: center;
	padding-top: 105px;
}
.invit_right{
	width: 350px;
	height: 297px;
	color: #fff;
	text-align: center;
}
.tab-content .invit{
	width: 100%;
	padding: 250px  20px;
}
.text-title .guanzhu .iconfont{
	font-size: 40px;
}
.text-title .guanzhu{
	width: 77px;
	height: 100px;
	background: #ee5ab4;
	float: right;
	text-align: center;
	padding-top: 15px;
	color: #fff;
}
.text-title .create{
	font-size: 28px;
	color: #666666;
}
.text-title .title{
	font-size: 36px;
}
.text-title{
	margin-left: 10px;
}
.invit_follow {
	width: 100%;
	height: 100%;
	padding: 0 20px;
	margin-top: 15px;
}
.invit_follow ul li img{
	width: 100%;
	height: 445px;
}
.invit_follow ul li{
	width: 100%;
	height: 550px;
	background: #f1f1f1;
	margin-bottom: 20px;
}
.live_mode{
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background: #08cd60;
	margin-top: 10px;
	margin-left: 10px;
}
.video .live .list{
	color: #fff;
	margin-left: 10px;
	margin-top: 3px;
}
.video .live{
	width: 110px;
	height: 37px;
	background-color: rgba(0,0,0,0.3);
	position: absolute;
	border-radius: 20px;
	margin-top: 10px;
	margin-left: 10px;
}
.video .deta{
	color: #999999;
	margin-right: 10px;
}
.video .head{
	width: 88px;
	height: 88px;
	border-radius: 50%;
	margin-top: -50px;
	margin-left: 10px;
	position: absolute;
}
.video .head img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.tab-content .video .video_list{
	width: 100%;
	height: 430px;
}
.tab-content .video .video_list img{
	width: 100%;
	height: 100%;
}
.tab-content .video ul li{
	width: 345px;
	height: 470px;
	float: left;
	margin-bottom: 10px;
}
.tab-content .video ul li:nth-child(2n){
	float: right;
}
.tab-content .video{
	padding: 0 20px;
}
.home{
	width: 100%;
	margin-top: 10px;
}

.home .tab-tilte{
	width: 100%;
}
.home .tab-tilte li{
	float: left;
	width: 25%;
	padding: 10px 0;
	text-align: center;
	cursor: pointer;
	font-size: 36px;
	color: #999999;
}
/* 点击对应的标题添加对应的背景颜色 */
.home .tab-tilte .active{
	color: #34a68d;
}
.contentr {
	width: 100%;
	margin-top: 40px;
}
.search .icon{
	margin-top: 15px;
	color: #b2b2b2;
}
.my{
	color: #f05c78;
	margin-top: 15px;
	font-size: 26px;
	font-weight: bolder;
}
.private_title{
	width: 100%;
	height: 88px;
	padding: 0 22px;
	line-height: 80px;
}
.private_title .name{
	font-size: 26px;
	font-weight: bold;
	color: #666;
}
.private_title .iconfont{
	color: #cdcdcd;
}
.private_title .iconfont.icon-lianxiren{
	font-size: 36px;
}
.search{
	width: 100%;
	height: 88px;
	padding: 15px 34px;
	position: relative;
}
.search input{
	width: 315px;
	height: 60px;
	background-color: #f7f7f7;
	font-size: 24px;
	border-radius: 12px;
	padding-left: 50px;
	margin-left: 100px;
}
.search img{
	position: absolute;
	left: 175px;
	top: 30px;
	width: 32px;
	height: 32px;
}
.search .my .iconfont{
	font-size: 40px;
	line-height: 60px;
	color: #31b3ac;
}
.search .my span{
	font-size: 22px;
	line-height: 60px;
	color: #999999;
}
</style>
