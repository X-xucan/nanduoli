<template>
	<div class="livelist">
		<div class="livelist_img" @click="showModal=false">
			<img  src="../../img/miao2.jpg"/>
		</div>
		<div class="gold">
			<ul class="clearfix">
				<li><img src="../../img/haed.jpg" /></li>
				<li><img src="../../img/haed.jpg" /></li>
				<li><img src="../../img/haed.jpg" /></li>
				<li><img src="../../img/haed1.jpg" /></li>
				<li><img src="../../img/haed2.jpg" /></li>
				<router-link to="/online">
					<li>
						<img src="../../img/zhankai.png" />
					</li>
				</router-link>
			</ul>
		</div>
		<div class="people clearfix">
			<div class="renshu fl">
				<i class="iconfont icon-guanzhu"></i>
			</div>
			<span class="fl">12.5w</span>
		</div>
		<div class="comment">
			<ul>
				<li>
					<span class="name">张三:</span>
					<span class="contne">很好用很好用第二次购买，很好用</span>
				</li>
				<li>
					<span class="name">张三:</span>
					<span class="contne">很好用很好用第二次购买，很好用</span>
				</li>
				<li>
					<span class="name">张三:</span>
					<span class="contne">很好用很好用第二次购买，很好用</span>
				</li>
				<li>
					<span class="name">张三:</span>
					<span class="contne">很好用很好用第二次购买，很好用</span>
				</li>
			</ul>
		</div>
		<div class="content clearfix">
			<div class="liwu fr">
				<ul>
					<router-link to="/">
						<li><img src="../../img/guanbi.png" /></li>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style scoped="scoped">
.module p {
	color: #999999;
	margin-left: 6px;
	margin-top: 5px;
}
.livelist .module img {
	width: 64px;
	height: 64px;
}
.livelist .module{
	width: 100%;
	background: #fff;
	position: fixed;
	bottom: 0;
	z-index: 100000;
	border-radius: 15px 15px 0 0;
	padding: 40px;
}
.content .liwu img{
	width: 100%;
	height: 100%;
}

.liwu ul li{
	width: 70px;
	height: 70px;
	float: left;
	margin-right: 18px;
}
.livelist .content input{
	width: 320px;
	height: 60px;
	background:rgba(0, 0, 0, 0.3);
	border-radius: 20px;
	padding-left: 10px;
	box-sizing: border-box;
}
.livelist .content input::-webkit-input-placeholder {
	color: #fff;
}
.livelist .content{
	padding: 14px 20px;
	bottom: 30px;
	position: fixed;
	color: #fff;
	z-index: 1000;
	width: 100%;
}
.comment .contne{
	font-size: 26px;
	color: #fff;
	margin-left: 5px;
}
.comment .name{
	font-size: 28px;
	color: #fff;
}
.comment ul li{
	width: 100%;
	height: 100%;
	background: #f1b35d;
	padding: 11px;
	border-radius: 20px;
	margin-bottom: 20px;
}
.comment{
	width: 400px;
	height: 335px;
	position: absolute;
	bottom: 120px;
	left: 20px;
	overflow: auto;
}
.renshu .iconfont{
	font-size: 11px;
}
.renshu{
	width: 35px;
	height: 35px;
	background: #d74836;
	border-radius: 50%;
	text-align: center;
	line-height: 30px;
	color: #fff;
	margin-right: 5px;
}
.livelist .people{
	width: 138px;
	height: 45px;
	position: absolute;
	background:rgba(0, 0, 0, 0.3);
	right: 15px;
	top: 150px;
	border-radius: 15px;
	padding: 5px 14px;
	color: #fff;
}
.gold .inco{
	margin-top: 8px;
	margin-left: 20px;
	color: #b9b9b9;
}
.gold ul li{
	width: 50px;
	height: 50px;
	border-radius: 50%;
	float: left;
	margin-left: 10px;
}
.gold ul li:last-child{
	float: right;
	margin-right: 50px;
}
.gold img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.livelist .gold{
	width: 100%;
	height: 50px;
	position: absolute;
	left: 20px;
	top: 42px;
	z-index: 100000;
	
}
.livelist .gold span{
	color: #fff;
	font-size: 30px;
}
.follows .guanzhu{
	background: #fe8d01;
	width: 85px;
	height: 200%;
	height: 46px;
	border-radius: 30px;
	font-size: 28px;
	text-align: center;
	line-height: 46px;
	color: #fff;
}
.follows .number{
	font-size: 30px;
	color: #d24367;
	margin-left: 5px;
	margin-top: 3px;
}
.follows .head{
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
.follows .head img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.follows{
	width: 330px;
	height: 70px;
	background: #fff;
	position: absolute;
	top: 0;
	z-index: 1000;
	border-radius: 30px;
	left: 18px;
	top: 40px;
	padding: 12px;
}
.livelist{
	width: 100%;
}
.livelist_img{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
}
.livelist_img img{
	width: 100%;
	height: 100%;
}
</style>
