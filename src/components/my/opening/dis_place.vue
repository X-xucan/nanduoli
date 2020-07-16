<template>
	<div class="user">
		<div class="private_title clearfix">
			<router-link to="/division">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">赛区地点</span>
		</div>
		<div class="my_user">
			<p>输入赛区地点</p>
			<div>
				<textarea>云南省昆明市</textarea>
			</div>
			
			<div class="btn">
				完成
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
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
