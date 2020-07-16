<template>
	<div class="user">
		<div class="private_title clearfix">
			<router-link to="/livelist">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">在线人数</span>
		</div>
		<div class="my_user">
			<p>在线人数1w</p>
			<ul>
				<router-link to="/follow">
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
</template>

<script>
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
.my_user ul li {
	margin-top: 20px;
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
.my_user .btn{
	width: 325px;
	height: 70px;
	background: #efefef;
	color: #999999;
	margin: 0 auto;
	margin-top: 300px;
}
.my_user textarea {
	width: 100%;
	height: 250px;
	margin-top: 20px;
	background: #f1f1f1;
	padding-left: 10px;
}
.my_user{
	width: 100%;
	padding: 0 20px;
	color: #666666;
	font-size: 22px;
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
</style>
