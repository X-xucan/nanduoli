<template>
	<div class="invit">
		<div class="private_title clearfix">
			<router-link to="/my">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">邀约</span>
		</div>
		<div class="invit_list">
			<div class="invit_list_img">
				<img src="../../img/erwei.jpg" />
			</div>
			<div class="down">
				<ul class="clearfix">
					<li class="fl">下载保存</li>
					<router-link to="/success" class="fl">
						<span>在线邀约</span>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
</script>
 
<style scoped="scoped">
.down a{
	display: inline-block;
	background-color: #ec3255;
	color: #fff;
	width: 50%;
	height: 100%;
	text-align: center;
	line-height: 70px;
	font-size: 30px;
	font-weight: bold;
}
.down ul {
	width: 100%;
	height: 100%;
}
.down ul li {
	width: 50%;
	height: 100%;
	text-align: center;
	line-height: 70px;
	font-size: 30px;
	font-weight: bold;
}
.invit_list .down{
	width: 440px;
	height: 70px;
	border: 1px solid #ec3255;
	margin: 0 auto;
	margin-top: 40px;
}
.invit_list_img{
	width: 100%;
	height: 500px;
	border: 1px solid #999999;
	padding: 20px;
	background: #f6f6f6;
}
.invit_list_img img{
	width: 100%;
	height: 100%;
}
.invit_list{
	width: 100%;
	height: 100%;
	padding: 125px;
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
