<template>
	<div class="user">
		<div class="private_title clearfix">
			<router-link to="/bianji">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">修改昵称</span>
		</div>
		<div class="my_user">
			<p>我的昵称</p>
			<div>
				<input type="text" />
				<span class="margin-5-top">3/7</span>
			</div>
			
			<div class="btn">
				完成
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
.my_user .btn{
	width: 325px;
	height: 70px;
	background: #efefef;
	color: #999999;
	margin: 0 auto;
	margin-top: 300px;
}
.my_user input {
	width: 100%;
	height: 45px;
	border-bottom: 1px solid #F1F1F1;
	margin-top: 20px;
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
	font-size: 30px;
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
