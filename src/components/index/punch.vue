<template>
	<div class="user">
		<div class="private_title clearfix">
			<router-link to="/">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">开始直播</span>
		</div>
		<div class="my_user">
			<img src="../../img/daka.png" />
		</div>
		<router-link to="/lives">
			<div class="btn">
				打卡
			</div>
		</router-link>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
.my_user{
	width: 100%;
	padding: 150px;
}
.my_user img{
	width: 435px;
	height: 435px;
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
