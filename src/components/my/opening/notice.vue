<template>
	<div class="user">
		<div class="private_title clearfix">
			<router-link to="/my">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">通知</span>
		</div>
		<!-- 消息  -->
		<div class="notice_tab">
			<ul class="tab-tilte clearfix">
				<li @click="cur=0" :class="{active:cur==0}">私信</li>
				<li style="width: 12px;">|</li>
				<li @click="cur=1" :class="{active:cur==1}">消息</li>
				<li style="width: 12px;">|</li>
				<li @click="cur=2" :class="{active:cur==2}">评论</li>
			</ul>
			<div class="tab-content">
				<div v-show="cur==0">
					<ul>
						<router-link to="/private">
							<li class="clearfix">
								<div class="tab-cont-head fl">
									<img src="../../../img/head.jpg" />
								</div>
								<div class="tab-cont-title fl">
									<p class="name">阿拉蕾</p>
									<p class="commit overflow3">这个人很懒没有个性签名</p>
								</div>
							</li>
						</router-link>
						<li class="clearfix">
							<div class="tab-cont-head fl">
								<img src="../../../img/head.jpg" />
							</div>
							<div class="tab-cont-title fl">
								<p class="name">阿拉蕾</p>
								<p class="commit overflow3">这个人很懒没有个性签名</p>
							</div>
						</li>
					</ul>
				</div>
				<div v-show="cur==1">
					<ul>
						<li class="clearfix">
							<div class="tab-cont-head fl">
								<img src="../../../img/head.jpg" />
							</div>
							<div class="tab-cont-title fl">
								<p class="name">阿拉蕾</p>
								<p class="commit">赞了你的评论</p>
							</div>
							<div class="tab_cont_img fr">
								<img src="../../../img/miao2.jpg" />
							</div>
						</li>
						<li class="clearfix">
							<div class="tab-cont-head fl">
								<img src="../../../img/head.jpg" />
							</div>
							<div class="tab-cont-title fl">
								<p class="name">阿拉蕾</p>
								<p class="commit">赞了你的评论</p>
							</div>
							<div class="tab_cont_img fr">
								<img src="../../../img/miao2.jpg" />
							</div>
						</li>
					</ul>
				</div>
				<div v-show="cur==2">
					<ul>
						<li class="clearfix">
							<div class="tab-cont-head fl">
								<img src="../../../img/head.jpg" />
							</div>
							<div class="tab-cont-title fl">
								<p class="name">阿拉蕾</p>
								<p class="commit">赞了你的评论</p>
								<p class="huifu">
									<span>回复了你的评论</span>
									<span>06-14</span>
								</p>
							</div>
							<div class="tab_cont_img fr">
								<img src="../../../img/miao2.jpg" />
							</div>
						</li>
						<li class="clearfix">
							<div class="tab-cont-head fl">
								<img src="../../../img/head.jpg" />
							</div>
							<div class="tab-cont-title fl">
								<p class="name">阿拉蕾</p>
								<p class="commit">今天的直播真好看 你也真漂亮今天的直播真好看 你也真漂亮今天的直播真好看 你也真漂亮今天的直播真好看 你也真漂亮</p>
								<p class="huifu">
									<span>回复了你的评论</span>
									<span>06-14</span>
								</p>
							</div>
							<div class="tab_cont_img fr">
								<img src="../../../img/miao2.jpg" />
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data () {
		return{
			cur:0 //默认选中第一个tab
		}
	}
}
</script>

<style scoped="scoped">
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
.notice_tab .tab-tilte{
	width: 400px;
	height: 100%;
	margin: 0 auto;
}
.tab-tilte li{
	float: left;
	width: 88px;
	height: 40px;
	text-align: center;
	cursor: pointer;
	line-height: 40px;
	font-size: 25px;
	color: #999999;
}
/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active{
	background-color: #ec3255;
	color: #fff;
	border-radius: 15px;
}
.tab-content{
	width: 100%;
	padding:  0 20px;
	margin-top: 40px;
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
	color: #000;
	margin-left: 10px;
}
.private_title .iconfont{
	color: #cdcdcd;
}
.private_title .iconfont.icon-lianxiren{
	font-size: 36px;
}
</style>
