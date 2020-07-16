<template>
	<div class="video">
		<div class="private_title clearfix">
			<router-link to="/">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
		</div>
		<div class="video_img">
			<img src="../../../img/bj-2.jpg" />
		</div>
		<div class="give">
			<ul>
				<li>
					<i class="iconfont icon-guanzhu-"></i>
				</li>
				<li>
					<i class="iconfont icon-xin"></i>
					<p>12.25w</p>
				</li>
				<li @click="showModal=true">
					<i class="iconfont icon-svg-"></i>
					<p>68</p>
				</li>
				<li>
					<i class="iconfont icon-fenxiang"></i>
					<p>2</p>
				</li>
			</ul>
		</div>
		<div class="user clearfix">
			<div class="user_img fl">
				<img src="../../../img/haed.jpg" />
			</div>
			<div class="fl title">
				<p class="name">小小希</p>
				<p>云南是个好地方！</p>
			</div>
		</div>
		<!-- 弹框 -->
		<div>
		    <div class="mask" v-if="showModal" @click="showModal=false"></div>
		    <div class="pop" v-if="showModal">
				<div class="drop_down" @click="showModal=false">
					<i class="iconfont icon-xiala"></i>
				</div>
				<div class="commit">
					<div class="commit_list">
						<ul>
							<li id="li" class="clearfix">
								<div class="clearfix">
									<div class="head fl">
										<img src="../../../img/haed2.jpg" />
									</div>
									<div class="fl margin-10-left">
										<p class="name">佛系白小白</p>
										<p class="commit_text">
											评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论
										</p>
									</div>
									<div class="fr dianzan">
										<i class="iconfont icon-xin"></i>
										<p>12.25w</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div>
					  <a href="#" @click="xxx()">{{sss?"收起":"展开"}}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
	   sss:false,
	  activeNames: ['1'],
    }
  },
  methods:{
	xxx () {
	  if(this.sss==false){
		document.getElementById("li").style.height="auto"
		this.sss=!this.sss
	  }else{
		document.getElementById("li").style.height="200px"
		this.sss=!this.sss
	  }
	}
  }
};
</script>

<style scoped="scoped">
.commit_list .name{
	font-size: 22px;
	color: #666;
}
.commit_list .dianzan .iconfont{
	text-align: center;
}
.commit_list .dianzan{
	margin-top: 20px;
	width: 80px;
	text-align: center;
	color: #666;
}
.commit{
	width: 100%;
	padding: 0 20px;
}
.commit_text{
	width: 500px;
}
.commit_list ul li .head{
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background: red;
}
.commit_list ul li .head img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.drop_down{
	width: 100%;
	height: 55px;
	text-align: center;
	line-height: 55px;
	border-bottom: 1px solid #F1F1F1;
}
.mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1
}
.pop {
  border-radius: 15px 15px 0  0;
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 800px;
  z-index: 2;
  bottom: 0;
}
.btn {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid blue;
  padding: 4px 12px;
}

.video .user{
	color: #fff;
	position: absolute;
	bottom: 40px;
	left: 20px;
}
.video .user .title{
	margin-left: 15px;
	margin-top: 5px;
}
.user .name{
	font-size: 30px;
}
.user_img{
	width: 84px;
	height: 84px;
	border-radius: 50%;
}
.user_img img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.give ul li p {
	color: #fff;
}
.give ul li{
	margin-bottom: 45px;
}
.give .iconfont{
	font-size: 75px;
	color: #fff;
}
.video .give{
	width: 110px;
	height: 590px;
	position: absolute;
	right: 0;
	bottom: 0;
	text-align: center;
}
.video{
	width: 100%;
	height: 100%;
	background: #000;
	position: absolute;
	top: 0;
	bottom: 0;
}
.video_img{
	width: 100%;
	height: 515px;
	margin-top: 312px;
}
.video_img img{
	width: 100%;
	height: 100%;
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
