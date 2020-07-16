<template>
	<div class="opening">
		<div class="private_title clearfix">
			<router-link to="/my">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">开通直播</span>
		</div>
		<div class="info">
			 <ul class="tab-tilte clearfix">
				<li @click="cur=0" :class="{active:cur==0}">身份验证</li>
				<li @click="cur=1" :class="{active:cur==1}">银行卡信息</li>
				<li @click="cur=2" :class="{active:cur==2}">完成</li>
			</ul>
			<div class="tab-content">
				<div v-show="cur==0">
					<ul>
						<li class="clearfix">
							<span class="fl">姓名</span>
							<input type="text" />
						</li>
						<li class="clearfix">
							<span class="fl">身份证验证信息</span>
							<input type="text" />
						</li>
					</ul>
				</div>
				<div v-show="cur==1">
					<ul>
						<li class="clearfix">
							<span class="fl">持卡人</span>
							<input type="text" />
						</li>
						<li class="clearfix">
							<span class="fl">卡类型</span>
							<input type="text" />
						</li>
						<li class="clearfix">
							<span class="fl">输入卡号</span>
							<input type="text" />
						</li>
						<li class="clearfix">
							<span class="fl">手机号</span>
							<input type="text" />
						</li>
						<li class="clearfix">
							<span class="fl">验证码</span>
							<div class="verif fr">获取验证码</div>
						</li>
					</ul>
				</div>
				<div v-show="cur==2">
					<div class="btn">提交</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			cur:0
		}
	}
}
</script>

<style scoped="scoped">
.verif{
	height: 44px;
	width: 177px;
	border-radius: 12px;
	background: #f1f1f1;
	line-height: 44px;
	text-align: center;
	margin-top: 12px;
	color: #999999;
	font-size: 30px;
}
.verif:hover{
	background-color: #ec3255;
	color: #fff;
}
.tab-content ul li span{
	color: #666;
	font-size: 30px;
}
.tab-content ul li input{
	height: 70px;
	width: 450px;
	text-align: right;
	box-sizing: border-box;
	float: right;
	padding-left: 10px;
	color: #666;
	font-size: 30px;
}
.tab-content ul li {
	width: 100%;
	height: 75px;
	border-bottom: 1px solid #F1F1F1;
	padding: 0 30px;
	line-height: 70px;
}
.tab-content{
	width: 100%;
	margin-top: 20px;
}
.btn{
	margin: 0 auto;
	margin-top: 140px;
	background: #ec3255;
	border-radius: initial;
}
.opening {
	margin-top: 35px;
}
.opening .tab-tilte{
	width: 100%;
}
.tab-tilte li{
	float: left;
	width: 33.333%;
	padding: 10px 0;
	text-align: center;
	cursor: pointer;
	font-size: 26px;
	font-weight: bold;
}
/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active{
	color: #31b5ad;
}
.private_title{
	width: 100%;
	height: 88px;
	padding: 0 22px;
	text-align: center;
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
