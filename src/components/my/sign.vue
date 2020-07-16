<template>
	<div>
		<div class="private_title clearfix">
			<router-link to="/my">
				<i class="iconfont icon-fanhui fl"></i>
				<span class="margin-10-left">签到日历</span>
			</router-link>
		</div>
		<!-- 签到 -->
		<div class="sign">
			<div class="year">
				<span class="heng"></span>
				<span class="year_nian">2020</span>
			</div>
			<div class="month">
				<p class="month_title">4/25</p>
				<ul class="clearfix">
					<li>
						<span class="go">上班</span>
						<span class="date">14:22</span>
					</li>
					<li>
						<span class="go">下班</span>
						<span class="date">14:22</span>
					</li>
				</ul>
			</div>
			<div class="month">
				<p class="month_title">4/25</p>
				<ul class="clearfix">
					<li>
						<span class="go">上班</span>
						<span class="date">14:22</span>
					</li>
					<li>
						<span class="go">下班</span>
						<span class="date">14:22</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
.month ul li {
	width: 50%;
	height: 40px;
	margin-top: 20px;
	text-align: center;
	float: left;
}
.month .go{
	font-size: 36px;
	color: #999999;
}
.month .date{
	font-size: 36px;
	color: #31b5ad;
	font-weight: bold;
}
.month{
	margin-top: 30px;
	margin-left: 18px;
	width: 100%;
	height: 100%;
	border-bottom: 1px solid #f1f1f1;
	padding-bottom: 10px;
}
.month_title{
	font-size: 30px;
	font-weight: bold;
}
.sign .year .heng{
	display: inline-block;
	width: 9px;
	height: 30px;
	background: #f9cf27; 
}
.sign .year_nian{
	font-size: 30px;
	color: #d03d3d;
	font-weight: bold;
}
.sign .year{
	margin-top: 42px;
}
.sign{
	padding: 0 20px;
}
.private_title{
	width: 100%;
	height: 88px;
	padding: 0 22px;
	line-height: 80px;
}
.private_title .iconfont{
	color: #cdcdcd;
}
.private_title .iconfont.icon-lianxiren{
	font-size: 36px;
}
</style>
