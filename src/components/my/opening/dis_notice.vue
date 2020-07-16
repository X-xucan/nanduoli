<template>
	<div class="user">
		<div class="private_title clearfix">
			<router-link to="/division">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">赛区公告</span>
		</div>
		<div class="my_user">
			<img src="../../../img/back.jpg" />
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
.my_user{
	width: 100%;
	padding: 0 20px;
	color: #666666;
	font-size: 22px;
}
.my_user img{
	width: 100%;
	height: 100%;
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
	color: #666;
}
.private_title .iconfont{
	color: #cdcdcd;
}
.private_title .iconfont.icon-lianxiren{
	font-size: 36px;
}
</style>

