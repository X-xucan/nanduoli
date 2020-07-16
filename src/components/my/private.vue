<template>
	<div class="private">
		<div class="private_title clearfix">
			<router-link to="/notice">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">阿拉蕾</span>
			<i class="iconfont icon-lianxiren fr"></i>
		</div>
		<div class="date">
			<span>2020/5/14</span> <span>22:05</span>
		</div>
		<!-- 聊天记录 -->
		<div class="chat clearfix">
			<div class="leftd">
			   <router-link to="/follow">
				   <span class="leftd_h">
				       <img src="../../img/head.jpg" />
				   </span>
			   </router-link>
			    <div class="speech left"> 
			        今天的直播真好看
			    </div>
			</div>
			<div class="rightd">
			    <router-link to="/my">
					<span class="rightd_h">
					    <img src="../../img/head.jpg" />
					</span>
				</router-link>
			    <div class="speech right" > 
			        我也觉得
			    </div>
			</div>
			<div class="leftd">
			    <router-link to="/follow">
				   <span class="leftd_h">
					   <img src="../../img/head.jpg" />
				   </span>
			    </router-link>
			    <div class="speech left"> 
			        晚安 先睡觉了哦
			    </div>
			</div>
			<div class="rightd">
			    <router-link to="/my">
			    	<span class="rightd_h">
			    	    <img src="../../img/head.jpg" />
			    	</span>
			    </router-link>
			    <div class="speech right" > 
			         好的 拜拜！
			    </div>
			</div>
		</div>
		<!-- 输入框 -->
		<div class="send_out">
			<input type="text" />
			<div class="fr"><i class="iconfont icon-jiahao"></i></div>
		</div>
	</div>
</template>

<script>
export default{
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>

<style scoped="scoped">
.send_out .iconfont{
	font-size: 55px;
	color: #ec3255;
	margin-left: 35px;
	display: inline-block;
	margin-top: 5px;
}
.send_out{
	width: 100%;
	height: 85px;
	background-color: #dfdfdf;
	position: fixed;
	bottom: 0;
	padding: 0 20px;
	padding-top: 12px;
}
.send_out input{
	width: 600px;
	height: 60px;
	background: #fff;
}
/* 微信气泡 */
div.speech {
    float: left;
    margin: 10px 0;
    padding: 8px;
    table-layout: fixed;
    word-break: break-all;
    position: relative;
    background: #efefef;
    border-radius: 8px;
}
div.speech:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 15px;
    top: -20px;
    border: 10px solid;
    border-color: transparent transparent #989898 transparent;
}
div.speech:after {
 content: '';
 position: absolute;
 width: 0;
 height: 0;
 left: 17px;
 top: -16px;
 border: 8px solid;
 border-color: transparent transparent #ffffff transparent;
}
div.speech.right {
 display: inline-block;
 margin-right: 10px;
 max-width: 75%;
 float: right;
 background: #31b5ad;
 color: #fff;
 font-size: 32px;
}
div.speech.right:before {
 content: '';
 position: absolute;
 width: 0;
 height: 0;
 top: 9px;
 bottom: auto;
 left: auto;
 right: -10px;
 border-width: 9px 0 9px 10px;
 border-color: transparent #989898;
}
div.speech.right:after {
 content: '';
 position: absolute;
 width: 0;
 height: 0;
 top: 10px;
 bottom: auto;
 left: auto;
 right: -8px;
 border-width: 8px 0 8px 9px;
 border-color: transparent #31b5ad;
}
div .left {
 display: inline-block;
 margin-left: 10px;
 max-width: 75%;
 position: relative;
 font-size: 32px;
}
div .left:before {
 content: '';
 position: absolute;
 width: 0;
 height: 0;
 top: 9px;
 bottom: auto;
 left: -10px;
 border-width: 9px 10px 9px 0;
 border-color: transparent #989898;
}
div .left:after {
 content: '';
 position: absolute;
 width: 0;
 height: 0;
 top: 10px;
 bottom: auto;
 left: -8px;
 border-width: 8px 9px 8px 0;
 border-color: transparent #eae8e8;
}
.leftimg {
 float: left;
 margin-top: 10px;
}
.rightimg {
 float: right;
 margin-top: 10px;
}
.leftd {
 clear: both;
 float: left;
 margin-left: 10px;
}
.rightd {
 clear: both;
 float: right;
 margin-right: 10px;
}

.leftd_h{
 width: 90px;
 height: 90px;
 border-radius: 100%;
 display: block;
 float: left;
 overflow: hidden;
}

.leftd_h img{
 display: block;
 width: 100%;
 height: auto;
}
.rightd_h{
 width: 90px;
 height: 90px;
 border-radius: 100%;
 display: block;
 float: right;
 overflow: hidden;
}

.rightd_h img{
 display: block;
 width: 100%;
 height: auto;
}
.private .chat{
	width: 100%;
	height: 100%;
	padding: 0 20px;
	margin-top: 55px;
}
.private .date{
	width: 100%;
	text-align: center;
	margin-top: 40px;
	color: #999999;
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
}
.private_title .iconfont{
	color: #cdcdcd;
}
.private_title .iconfont.icon-lianxiren{
	font-size: 36px;
}
</style>
