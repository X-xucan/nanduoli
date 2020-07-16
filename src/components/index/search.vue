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
		<div class="hot">
			<p class="hot_title">热搜榜</p>
			<ul class="clearfix">
				<li class="clearfix">
					<div class="hot_one hot_list">1</div>
					<div class="fl hot_lists overflow3">云南民族之声云南民族之声云南民族之声云南民族之声云南民族之声</div>
				</li>
				<li class="clearfix">
					<div class="hot_tow hot_list">2</div>
					<div class="fl hot_lists overflow3">云南民族之声云南民族之声云</div>
				</li>
				<li class="clearfix">
					<div class="hot_three hot_list">3</div>
					<div class="fl hot_lists overflow3">云南民族之声云南民族之声云南民族之声云南民族之声云南民族之声</div>
				</li>
				<li class="clearfix">
					<div class="hot_list">4</div>
					<div class="fl hot_lists overflow3">云南民族之声云南民</div>
				</li>
				<li class="clearfix">
					<div class="hot_list">5</div>
					<div class="fl hot_lists overflow3">云南民族之声云南民族之声</div>
				</li>
				<li class="clearfix">
					<div class="hot_list">6</div>
					<div class="fl hot_lists overflow3">云南民族之声云南民族之声云南民族之声</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>
<style scoped="scoped">
.hot_list.hot_one{
	background: #e0023b;
	color: #fff;
}
.hot_list.hot_tow{
	color: #fff;
	background: #f99f35;
}
.hot_list.hot_three{
	color: #fff;
	background: #f0c248;
}

.hot_list{
	width: 30px;
	height: 30px;
	line-height: 30px;
	background: #f1f1f1;
	color: #999;
	text-align: center;
	border-radius: 8px;
	font-weight: bold;
	float: left;
}
.hot_lists{
	width: 305px;
	margin-left: 10px;
}
.hot ul li {
	width: 345px;
	margin-top: 20px;
	float: left;
}
.hot ul li:nth-child(2n){
	float: right;
}
.hot{
	width: 100%;
	padding: 10px 20px;
}
.hot_title{
	font-size: 32px;
	font-weight: bolder;
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
