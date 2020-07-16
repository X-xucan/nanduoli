<template>
	<div class="need">
		<div class="private_title clearfix">
			<router-link to="/my">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">需知</span>
		</div>
		<div class="need_list">
			主播通过邀约过来一个以上的主播或者是流水三万以上时升级为主播经纪人，主播经纪人享受邀约来的主播10%，主播经纪人旗下扶持10个以上的主播可以加盟共享直播间自己创业，加盟商（含设备场地和水电）得20%，享受股份全球分红。系统后台公开透明。这就意味着主播达到月入三万以上就能实现你方7我方3的分配比例，让每个主播只要有能力，就可以保证你的付出和回报不再是不能成正比。有能力的主播也实在没有必要跳槽。工会管理平台只得10% 用于税收和扶持    主播50%+经纪人10%+工会平台10%+加盟商20%+股份分红5%+共产扶持基金5%=除掉官方平台扣除的100%  
		</div>
		<div class="unde">
			<p>我已了解</p>
			<router-link to="/invit">
				<div class="btn">继续开通</div>
			</router-link>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
.unde .btn{
	margin: 0 auto;
	margin-top: 40px;
	background: #ec3255;
	border-radius: initial;
	width: 322px;
	height: 70px;
	font-size: 36px;
}
.unde{
	margin-top: 235px;
}
.unde p{
	color: #31b5ad;
	text-align: center;
}
.need_list{
	padding: 0 20px;
	margin-top: 20px;
	font-size: 30px;
	font-weight: bold;
	text-indent: 2em;
	margin-top: 70px;
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
	margin-left: 10px;
}
.private_title .iconfont{
	color: #cdcdcd;
}
.private_title .iconfont.icon-lianxiren{
	font-size: 36px;
}
</style>
