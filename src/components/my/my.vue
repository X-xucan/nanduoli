<template>
	<div class="my">
		<div class="my_back">
			<!-- 背景图片 -->
			<div class="my_back_img">
				<img src="../../img/myck.jpg" />
			</div>
			<router-link to="/">
				<div class="my_back_fanhui">
					<img src="../../img/fanhui.png" />
				</div>
			</router-link>
			<div class="my_info">
				<router-link to="/sign">
					<i class="iconfont icon-xiangji my_info_xiangji"></i>
				</router-link>
				<router-link to="/notice">
					<i class="iconfont icon-xiaoxi1 margin-5-left my_info_xiaoxi"></i>
				</router-link>
			</div>
		</div>
		<!-- 资料 -->
		<div class="my_data">
			<div class="my_data_head">
				<img src="../../img/head.jpg" />
			</div>
			<div class="my_edit clearfix">
				<!-- 粉丝 -->
				<div class="my_edit_fans fl">
					<span class="my_edit_mub">121</span>
					<span class="my_edit_list">粉丝</span>
				</div>
				<!-- 按钮 -->
				<div class="my_edit_btn fl">
					<router-link to="/bianji">
						<span class="edit">
							<i class="iconfont icon-bianji"></i>
							<span>编辑资料</span>
						</span>
					</router-link>
					<span class="add_friends">
						<i class="iconfont icon-jia1"></i>
						<span class="margin-5-left">好友</span>
					</span>
				</div>
			</div>
			<!-- 用户名 -->
			<div class="personal">
				<p class="personal_name">用户名</p>
				<p class="personal_id">ID:12566535</p>
				<p class="personal_id">这个人很懒没有写签名</p>
				<ul>
					<li>
						<i class="iconfont icon-nv"></i>
						<span>21</span>
					</li>
					<li>云南-昆明</li>
					<li>云南电子科技学院</li>
				</ul>
			</div>
		</div>
		<!-- 作品 -->
		<div class="my_works">
			<ul class="tab-tilte clearfix">
				<li @click="cur=0" :class="{active:cur==0}">作品</li>
				<li @click="cur=1" :class="{active:cur==1}">关注</li>
				<li @click="cur=2" :class="{active:cur==2}">收益</li>
			</ul>
			<div class="tab-content">
				<!-- 作品 -->
				<div v-show="cur==0">
					<div class="invit">
						<ul class="clearfix ul">
							<li class="list" @click="works=0" :class="{active:works==0}">作品</li>
							<li class="margin-5-left margin-5-right margin-5-top fl">|</li>
							<li class="list" @click="works=1" :class="{active:works==1}">赛区</li>
						</ul>
						<div class="invit_works" v-show="works==0">
							<ul class="clearfix">
								<router-link to="/video">
									<li :key="item.index" v-for="item in Mylists">
										<img :src="item.img" />
										<div class="play">
											<i class="iconfont icon-bofang"></i>
											<span>{{item.works}}</span>
										</div>
									</li>
								</router-link>
							</ul>
						</div>
						<div class="invit_follow" v-show="works==1">
							<router-link to="/division">
								<div class="match">
									<i class="iconfont icon-xiangji"></i>
									<span class="fa">发作品</span>
								</div>
							</router-link>
							<ul>
								<router-link to="/sutido">
									<li :key="item.index" v-for="item in Divisions">
										<div>
											<img :src="item.img" />
										</div>
										<div class="clearfix text-title">
											<p class="title fl">{{item.title}}</p>
											<p class="fr text-black text-hei"><span>{{item.follow}}</span>人已关注</p>
										</div>
									</li>
								</router-link>
							</ul>
						</div>
					</div>
				</div>
				<!-- 关注 -->
				<div v-show="cur==1">
					<div class="invit">
						<ul class="clearfix ul">
							<li class="list" @click="Friends=0" :class="{active:Friends==0}">好友</li>
							<li class="margin-5-left margin-5-right margin-5-top fl">|</li>
							<li class="list" @click="Friends=1" :class="{active:Friends==1}">赛区</li>
						</ul>
						<div class="friends clearfix" v-show="Friends==0">
							<ul>
								<router-link to="/follow">
									<li class="clearfix margin-15-button" :key="item.index" v-for="item in Friendst">
										<div class="head fl">
											<img :src="item.img" />
										</div>
										<div class="info fl">
											<p class="name">{{item.name}}</p>
											<p class="autog overflow3">{{item.autog}}</p>
										</div>
									</li>
								</router-link>
							</ul>
						</div>
						<div class="choice" v-show="Friends==1">
							<ul class="clearfix">
								<li :key="item.index" v-for="item in Divisions">
									<div>
										<img :src="item.img" />
									</div>
									<div class="title">
										<p class="titles">{{item.title}}</p>
										<p><span class="data">{{item.data}}</span><span class="choice_text">{{item.choice}}</span></p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- 收益 -->
				<div v-show="cur==2">
					<div class="invit">
						<ul class="clearfix ul">
							<li class="list" @click="curt=0" :class="{active:curt==0}">提成</li>
							<li class="margin-5-left margin-5-right margin-5-top fl">|</li>
							<li class="list" @click="curt=1" :class="{active:curt==1}">直播间</li>
						</ul>
						<div class="invit_list" v-show="curt==0">
							<p class="null">抱歉！您未邀请任何主播艺人~</p>
							<router-link to="/need">
								<span class="tation">去邀约</span>
							</router-link>
						</div>
						<div class="invit_list" v-show="curt==1">
							<p class="null">抱歉！您旗下艺人未达10个
					                 不能开通直播间~</p>
							<router-link to="/need">
								<span class="tation">去邀约</span>
							</router-link>
						</div>
					</div>
									
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mylist, division, friends} from '../../js/list.js'
export default{
	data () {
		return{
			cur: 0,
			curt: 0,
			works: 0,
			Friends: 0,
			Mylists: mylist,
			Divisions: division,
			Friendst: friends
		}
	}
}
</script>

<style scoped="scoped">
.match{
	width: 196px;
	height: 70px;
	background-color: #ec3255;
	position: fixed;
	right: 0;
	color: #fff;
	font-size: 32px;
	padding: 10px 20px;
	border-radius: 12px 0  0 12px;
}
.choice ul li .title{
	height: 87px;
	width: 100%;
	padding: 0 9px;
}
.choice .title .titles{
	font-size: 26px;
	font-weight: bolder;
}
.choice .title .data{
	color: #fff;
	font-size: 36px;
}
.choice .title .choice_text{
	color: #ededed;
	font-size: 26px;
	margin-left: 10px;
	margin-top: -10px;
}
.choice ul li{
	width: 350px;
	height: 311px;
	margin-bottom: 10px;
	float: left;
	background: #31b5ad;
}
.choice ul li img{
	width: 100%;
	height: 225px;
}
.choice ul li:nth-child(2n){
	float: right;
}
.choice{
	width: 100%;
	height: 100%;
	padding: 0 20px;
	margin-top: 20px;
}
.invit .friends{
	width: 100%;
	padding: 0 20px;
	height: 88px;
	margin-top: 40px;
	margin-bottom: 15px;
}
.friends .info{
	width: 600px;
	height: 100%;
	margin-left: 20px;
	margin-top: 10px;
}
.friends .info .name{
	font-size: 30px;
	color: #000;
	font-weight: bold;
}
.friends .info .autog{
	font-size: 24px;
	color: #999999;
}
.friends .head{
	width: 90px;
	height: 90px;
	border-radius: 50%;
}
.friends .head img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.text-title{
	line-height: 55px;
	height: 77px;
}
.text-title span{
	color: #32b8cc;
	font-weight: bold;
	font-size: 22px;
}
.invit_follow .title{
	color: #000;
	font-size: 36px;
	margin-left: 5px;
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
	height: 520px;
	background: #f1f1f1;
	margin-bottom: 20px;
}
.invit_works ul li{
	width: 350px;
	height: 380px;
	background: gold;
	float: left;
	position: relative;
	margin-bottom: 10px;
}
.play{
	width: 93px;
	height: 45px;
	position: absolute;
	right: 0;
	bottom: 36px;
	color: #fff;
	font-size: 22px;
}
.invit_works ul li img{
	width: 100%;
	height: 100%;
}
.invit_works ul li:nth-child(2n){
	float: right;
}
.invit_works ul{
	width: 100%;
	height: 100%;
}
.invit_works{
	width: 100%;
	height: 100%;
	margin-top: 14px;
	padding: 0 20px;
}
.invit_list .tation{
	width: 325px;
	height: 70px;
	background: #ec3255;
	display: block;
	text-align: center;
	margin: 0 auto;
	margin-top: 60px;
	line-height: 60px;
	font-size: 36px;
	color: #fff;
}
.invit_list .null{
	font-size: 30px;
	color: #999;
	text-align: center;
	width: 420px;
	margin: 0 auto;
	margin-top: 80px;
}
.invit_list{
	width: 100%;
	height: 405px;
	background: #f1f1f1;
	padding-top: 5px;
	margin-top: 40px;
}
.invit{
	width: 100%;
	height: 100%;
	margin-top: 40px;
}
.invit .ul{
	width: 235px;
	height: 100%;
	margin: 0 auto;
	/* padding-left: 40px; */
}
.invit .ul .list{
	float: left;
	padding: 8px 8px;
	text-align: center;
	cursor: pointer;
	font-size: 30px;
	color: #999999;
	height: 100%;
	border-radius: 15px;
	
}
.invit .ul .list.active{
	color: #fff;
	background: #ec3255;
}
.my_works{
	width: 100%;
	height: 100%;
	margin-top: 30px;
	margin-bottom: 87px;
}
.tab-tilte{
	width: 100%;
}
.tab-tilte li{
	float: left;
	width: 33.3333%;
	padding: 10px 0;
	text-align: center;
	cursor: pointer;
	font-size: 30px;
	color: #999999;
}
.tab-tilte .active{
	color: #31b5ad;
	font-weight: bold;
}
/* .tab-content li{
	width: 100%;
	height: 100%;
	padding: 0 20px;
} */
.personal .iconfont{
	font-size: 28px;
}
.personal ul{
	width: 100%;
	margin-top: 20px;
}
.personal ul li{
	display: inline-block;
	padding: 13px 10px;
	background-color: #f1f1f1;
	border-radius: 15px;
	font-size: 22px;
	color: #666666;
}
.personal_id{
	color: #666;
	font-size: 26px;
	margin-top: 5px;
}
.personal_name{
	font-size: 36px;
	font-weight: bold;
}
.personal{
	margin-top: 40px;
}
.add_friends{
	display: inline-block;
	height: 65px;
	background: #efefef;
	border-radius: 15px;
	padding: 15px 11px;
	font-size: 26px;
	line-height: 32px;
	font-weight: 800;
	width: 157px;
	padding: 15px 22px;
}
.my_edit_btn .edit{
	display: inline-block;
	width: 182px;
	height: 65px;
	background: #efefef;
	border-radius: 15px;
	padding: 15px 11px;
	font-size: 26px;
	line-height: 32px;
	font-weight: 800;
}
.my_edit_btn .iconfont{
	color: #999999;
}
.my_edit_btn{
	margin-left: 55px;
}
.my_edit_mub{
	font-size: 30px;
	font-weight: bold;
}
.my_edit_list{
	font-size: 26px;
	color: #b2b2b2;
}
.my{
	width: 100%;
	height: 100%;
}
.my_back{
	height: 377px;
	width: 100%;
	position: relative;
}
.my_back_img {
	width: 100%;
	height: 100%;
}
.my_back_img img{
	width: 100%;
	height: 100%;
}
.my_back_fanhui{
	width: 50px;
	height: 50px;
	position: absolute;
	top: 60px;
	left: 35px;
}
.my_back_fanhui img{
	width: 100%;
	height: 100%;
}
.my_info{
	width: 150px;
	height: 70px;
	background: #fff;
	position: absolute;
	right: 0;
	top: 160px;
	border-radius: 14px 0 0 14px;
	padding: 0 15px;
	padding-top: 10px;
}
.my_info .my_info_xiangji{
	color: #fbaf42;
}
.my_info .iconfont{
	font-size: 46px;
}
.my_info .my_info_xiaoxi{
	color: #17c492;
}
.my_data{
	width: 100%;
	height: 100%;
	padding: 0 20px;
	padding-bottom: 12px;
	border-bottom: 1px solid #f1f1f1;
}
.my_data{
	width: 100%;
	height: 100%;
	position: relative;
}
.my_data_head{
	width: 135px;
	height: 135px;
	border-radius: 50%;
	margin-top: -45px;
	z-index: 111;
	position: absolute;
}
.my_data_head img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.my_edit{
	margin-left: 190px;
	margin-top: 15px;
}
</style>
