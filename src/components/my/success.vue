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
								<li :key="item.index" v-for="item in Mylists">
									<img :src="item.img" />
									<div class="play">
										<i class="iconfont icon-bofang"></i>
										<span>{{item.works}}</span>
									</div>
								</li>
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
								<li :key="item.index" v-for="item in Divisions">
									<div>
										<img :src="item.img" />
									</div>
									<div class="clearfix text-title">
										<p class="title fl">{{item.title}}</p>
										<p class="fr text-black text-hei"><span>{{item.follow}}</span>人已关注</p>
									</div>
								</li>
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
							<ul>
								<li>
									<div class="title_list clearfix">
										<span class="title active fl">成功邀约</span>
										<span class="date fr">2020/4/5</span>
									</div>
									<div class="clearfix">
										<div class="clearfix fl">
											<span class="fl name">佛系白小白</span>
											<span class="fr number">+100</span>
										</div>
										<div class="success_img fl clearfix">
											<div  class="fl">
												<img src="../../img/che.png" />
											</div>
											<div class="fl">
												<img src="../../img/caiyi.png" />
											</div>
										</div>
									</div>
								</li>
								<li>
									<div class="title_list clearfix">
										<span class="title fl">待审核</span>
										<span class="date fr">2020/4/5</span>
									</div>
									<div class="clearfix">
										<div class="clearfix fl">
											<span class="fl name">佛系白小白</span>
											<span class="fr number">+100</span>
										</div>
										<div class="success_img fl clearfix">
											<div  class="fl">
												<img src="../../img/che.png" />
											</div>
											<div class="fl">
												<img src="../../img/caiyi.png" />
											</div>
										</div>
									</div>
								</li>
							</ul>
							<router-link to="/need">
								<div class="match">
									<span class="fa">邀请主播</span>
								</div>
							</router-link>
						</div>
						<div class="invit_lists" v-show="curt==1">
							<ul>
								<li>
									<div class="exami">待审核</div>
									<img src="../../img/miao1.jpg" />
									<p class="title">啦啦啦</p>
								</li>
								<li>
									<img src="../../img/miao1.jpg" />
									<p class="title">啦啦啦</p>
								</li>
								<li>
									<img src="../../img/miao1.jpg" />
									<p class="title">啦啦啦</p>
								</li>
							</ul>
							<router-link to="/live">
								<div class="match">
									<span class="fa">开通直播间</span>
								</div>
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
.invit_lists .exami{
	font-size: 26px;
	color: #f1f1f1;
	width: 100px;
	height: 45px;
	background: #999;
	line-height: 45px;
	text-align: center;
	position: absolute;
}
.invit_lists .title{
	font-size: 26px;
	font-weight: bolder;
}
.invit_lists {
	width: 100%;
	padding: 0 20px;
	margin-top: 15px;
}
.invit_lists ul li {
	width: 350px;
	height: 285px;
	float: left;
	margin-bottom: 35px;
	position: relative;
}
.invit_lists ul li img{
	width: 100%;
	height: 245px;
}
.invit_lists ul li:nth-child(2n){
	float: right;
}
.success_img img{
	width: 27px;
	height: 27px;
	margin-left: 13px;
	margin-top: 20px;
}
.invit_list .name{
	font-size: 30px;
	font-weight: bold;
	margin-top: 15px;
}
.invit_list .number{
	font-size: 30px;
	font-weight: bold;
	margin-top: 15px;
	color: #ec3255;
}
.invit_list .date{
	font-size: 22px;
	color: #999999;
}
.invit_list ul li{
	width: 100%;
	height: 105px;
	border-bottom: 1px solid #f1f1f1;
	padding: 0 20px;
	padding-top: 10px;
}
.invit_list .title.active{
	background: #20a61d;
	color: #fff;
}
.invit_list .title{
	width: 100px;
	height: 28px;
	display: inline-block;
	background: #f1f1f1;
	font-size: 22px;
	line-height: 26px;
	text-align: center;
	color: #999999;
}
.match{
	width: 196px;
	height: 70px;
	background-color: #ec3255;
	position: fixed;
	right: 0;
	color: #fff;
	font-size: 32px;
	padding: 10px 18px;
	border-radius: 12px 0  0 12px;
	line-height: 45px;
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
