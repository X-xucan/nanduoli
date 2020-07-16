<template>
	<div class="sutdio">
		<div class="Interface">
			<div class="private_title clearfix">
				<router-link to="/">
					<i class="iconfont icon-fanhui fl"></i>
				</router-link>
			</div>
			<div class="test_two_box">
			  <video id="myVideo" class="video-js">
				<source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
			  </video>
			  <!-- 直播状态 -->
			  <div class="live clearfix">
			    <div class="live_status margin-5-l"></div>
			    <span class="live_title margin-5-l text-white">云南民族歌手之声</span>
			  </div>
			  <div class="follow">
			      <div class="follow_opacity"></div>
			      <div class="follow_list">
			        <img src="../../../img/guanzhu.png"></img>
			        <span class="text-white">已关注</span>
			      </div>
			    </div>
		  </div>
		</div>
		<!-- 导航栏 -->
		<div class="nav_list">
			<ul class="tab-tilte clearfix">
				<li @click="cur=0" :class="{active:cur==0}">互动</li>
				<li @click="cur=1" :class="{active:cur==1}">报名</li>
				<li @click="cur=2" :class="{active:cur==2}">赛况</li>
				<li @click="cur=3" :class="{active:cur==3}">冠名</li>
				<li @click="cur=4" :class="{active:cur==4}">榜单</li>
			</ul>
			<div class="tab-content">
				<!-- 互动 -->
				<div v-show="cur==0">
					<div class="info_speak">
						<div class="info_speak_list">
						  <span class="info_speak_name">小白：</span>
						  <span class="info_speak_text">哇！今天的直播好好看啊哇！今天的直播好好看啊哇！今天的直播好好看啊哇！今天的直播好好看啊哇！今天的直播好好看啊哇！今天的直播好好看啊哇！今天的直播好好看啊哇！今天的直播好好看啊</span>
						</div>
						<div class="info_speak_list">
						  <span class="info_speak_name">小白：</span>
						  <span class="info_speak_text">哇！今天的直播好好看啊</span>
						</div>
					</div>
					<div class="comment">
						<input type="text" placeholder="输入您的评论" />
						<img src="../../../img/jianpan.png" />
					</div>
				</div>
				<!-- 报名 -->
				<div class="sign_up" v-show="cur==1">
					<ul class="tab-tilte clearfix">
						<li @click="curt=0" :class="{active:curt==0}">以选手身份</li>
						<li @click="curt=1" :class="{active:curt==1}">以评委身份</li>
					</ul>
					<div class="tab-content">
						<div v-show="curt==0">
							<form>
							  <div class="info-list">
								  <div class="info_input">
									  <input class="info_ipt" type="text" placeholder="请输入您的姓名" />
									  <img src="../../../img/name.png"></img>
								  </div>
								  <div class="info_input">
									  <input class="info_ipt" type="text" placeholder="性别" />
									  <img src="../../../img/sex.png"></img>
								  </div>
								  <div class="info_input">
									  <input class="info_ipt" type="text" placeholder="请输入您的手机号" />
									  <img src="../../../img/phone.png"></img>
								  </div>
								  <div class="info_input">
									  <input class="info_ipt" type="text" placeholder="请输入您的身份证" />
									  <img src="../../../img/id.png"></img>
								  </div>
								  <div class="info_input">
									  <input class="info_ipt" type="text" placeholder="请输入您的邮箱" />
									  <img src="../../../img/email.png"></img>
								  </div>
								  <div class="info_input">
									  <input class="info_ipt" type="text" placeholder="推荐人" />
									  <img src="../../../img/reco.png"></img>
								  </div>
								  <div class="info_input">
									  <input class="info_ipt" type="text" placeholder="请输入您的职业" />
									  <img src="../../../img/tuijian.png"></img>
								  </div>
								  <div class="info_input">
									  <input class="info_ipt" type="text" placeholder="请输入您的演唱风格" />
									  <img src="../../../img/style.png"></img>
								  </div>
								  <div class="info_input">
									  <input class="info_ipt" type="text" placeholder="请输入您的工作单位/学校名称" />
									  <img src="../../../img/chengshi.png"></img>
								  </div>
								  <div class="info_input">
									  <input class="info_ipt" type="text" placeholder="请输入您的抖音/快手号" />
									  <img src="../../../img/ids.png"></img>
								  </div>
								  <div class="info_input">
									  <input class="info_ipt" type="text" placeholder="请输入您的粉丝数量" />
									  <img src="../../../img/fensi.png"></img>
								  </div>
							  </div>
							  <!-- 上传海选作品 -->
							  <div class="upload_works">
								  <span class="text-bolder">上传海选作品</span>
								  <div class="van_uploader">
									  <van-uploader>
									    <van-button icon="photo" type="info">上传图片</van-button>
									  </van-uploader>
								  </div>
							  </div>
							  <!-- 上传参赛作品 -->
							  <div class="upload_entry">
								  <span class="text-bolder">上传参赛作品</span>
								  <div>
									<van-uploader
									  :max-size="10000000"
									  :after-read="uploadImg"
									  :before-read="beforeRead"
									  :max-count="1"
									  v-model="fileList"
									  multiple
									  prediv-size= "105px"
									/>
								  </div>
							  </div>
							  <!--参赛留言 -->
							  <div class="works_msg">
								<textarea placeholder="参赛留言"></textarea>
							  </div>
							  <!-- 确认报名 -->
							  <div class="btn">
								  确定报名
							  </div>
						  </form>
							          
						</div>
						<div v-show="curt==1">
							<form>
								<div class="info-list">
									  <div class="info_input">
										  <input class="info_ipt" type="text" placeholder="请输入您的姓名" />
										  <img src="../../../img/name.png"></img>
									  </div>
									  <div class="info_input">
										  <input class="info_ipt" type="text" placeholder="性别" />
										  <img src="../../../img/sex.png"></img>
									  </div>
									  <div class="info_input">
										  <input class="info_ipt" type="text" placeholder="请输入您的手机号" />
										  <img src="../../../img/phone.png"></img>
									  </div>
									  <div class="info_input">
										  <input class="info_ipt" type="text" placeholder="请输入您的身份证" />
										  <img src="../../../img/id.png"></img>
									  </div>
									  <div class="info_input">
										  <input class="info_ipt" type="text" placeholder="请输入您的邮箱" />
										  <img src="../../../img/email.png"></img>
									  </div>
									  <div class="info_input">
										  <input class="info_ipt" type="text" placeholder="推荐人" />
										  <img src="../../../img/reco.png"></img>
									  </div>
									  <div class="info_input">
										  <input class="info_ipt" type="text" placeholder="请输入您的职业" />
										  <img src="../../../img/tuijian.png"></img>
									  </div>
									  <div class="info_input">
										  <input class="info_ipt" type="text" placeholder="请输入您的演唱风格" />
										  <img src="../../../img/style.png"></img>
									  </div>
									  <div class="info_input">
										  <input class="info_ipt" type="text" placeholder="请输入您的工作单位/学校名称" />
										  <img src="../../../img/chengshi.png"></img>
									  </div>
									  <div class="info_input">
										  <input class="info_ipt" type="text" placeholder="请输入您的抖音/快手号" />
										  <img src="../../../img/ids.png"></img>
									  </div>
									  <div class="info_input">
										  <input class="info_ipt" type="text" placeholder="请输入您的粉丝数量" />
										  <img src="../../../img/fensi.png"></img>
									  </div>
								  </div>
								  <!-- 上传海选作品 -->
								  <div class="upload_works">
									  <span class="text-bolder">上传参赛作品</span>
									  <div>
										  <van-uploader
										    :max-size="10000000"
										    :after-read="uploadImg"
										    :before-read="beforeRead"
										    :max-count="1"
										    v-model="fileList"
										    multiple
										    prediv-size= "105px"
										  />
									  </div>
								  </div>
								  <!-- 上传参赛作品 -->
								  <div class="upload_entry">
									  <span class="text-bolder">上传简历</span>
									  <div>
										<van-uploader
										  :max-size="10000000"
										  :after-read="uploadImg"
										  :before-read="beforeRead"
										  :max-count="1"
										  v-model="fileList"
										  multiple
										  prediv-size= "105px"
										/>
									  </div>
								  </div>
								  <!--参赛留言 -->
								  <div class="works_msg">
									<textarea placeholder="自我描述"></textarea>
								  </div>
								  <!-- 确认报名 -->
								  <div class="btn">
									  确定报名
								  </div>
							</form>					    
						</div>
					</div>
				</div>
				<!-- 赛况 -->
				<div v-show="cur==2">
					<ul>
						<li class="outs clearfix">
							<div class="outs_left">
							  <img src="../../../img/bj-2.jpg"></img>
							</div>
							<div class="outs_right">
								<div class="outs_right_title">
									总决赛：海选现场-80支队伍谁能够成功
								</div>
								<div class="outs_rule">
								  规则：2进1
								</div>
								<div class="outs_Judges">评委：张晓如/xiaoxiao/灵鲜</div>
								<!-- 时间 -->
								<div class="outs_time clearfix">
									<div class="outs_time_left fl clearfix">
									  <div class="fl">
										<img src="../../../img/time.png"></img>
									  </div>
									  <div class="uts_time_text fl">播放量：456</div>
									</div>
									<div class="outs_time_left outs_time_right  fl clearfix">
									  <div class="fl">
										<img src="../../../img/time1.png"></img>
									  </div>
									  <div class="uts_time_text fl">时长：08:12</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<!-- 冠名 -->
				<div v-show="cur==3">
					<div class="naming">
						<ul>
							<router-link to="/details">
								<li  class="outs_list">
									<div>
									  <div class="outs clearfix">
										<div class="outs_title">
										  <img class="outs_left_title" src="../../../img/title3.png"></img>
										  <div class="outs_left">
											<!-- 头冠 -->
											<img src="../../../img/tou1.png"></img>
										  </div>
										</div>
										<div class="outs_right">
											<div class="outs_right_title active">阿拉蕾</div>
											<div class="outs_rule active">
												<span class="">表演曲目:</span> 《我是一只小小鸟》
											</div>
											<!-- 时间 -->
											<div class="outs_time clearfix">
												<div class="outs_time_left fl clearfix">
												  <div class="fl">
													<img src="../../../img/time.png"></img>
												  </div>
												  <div class="uts_time_text fl">播放量：456</div>
												</div>
												<div class="outs_time_left outs_time_right  fl clearfix">
												  <div class="fl">
													<img src="../../../img/time1.png"></img>
												  </div>
												  <div class="uts_time_text fl">时长：08:12</div>
												</div>
											</div>
										</div>
									  </div>
									</div>
								</li>
							</router-link>
							<li  class="outs_list">
								<div>
								  <div class="outs clearfix">
									<div class="outs_title">
									  <img class="outs_left_title" src="../../../img/title3.png"></img>
									  <div class="outs_left">
										<!-- 头冠 -->
										<img src="../../../img/tou2.png"></img>
									  </div>
									</div>
									<div class="outs_right">
										<div class="outs_right_title active">阿拉蕾</div>
										<div class="outs_rule active">
											<span class="">表演曲目:</span> 《我是一只小小鸟》
										</div>
										<!-- 时间 -->
										<div class="outs_time clearfix">
											<div class="outs_time_left fl clearfix">
											  <div class="fl">
												<img src="../../../img/time.png"></img>
											  </div>
											  <div class="uts_time_text fl">播放量：456</div>
											</div>
											<div class="outs_time_left outs_time_right  fl clearfix">
											  <div class="fl">
												<img src="../../../img/time1.png"></img>
											  </div>
											  <div class="uts_time_text fl">时长：08:12</div>
											</div>
										</div>
									</div>
								  </div>
								</div>
							</li>
							<li  class="outs_list">
								<div>
								  <div class="outs clearfix">
									<div class="outs_title">
									  <img class="outs_left_title" src="../../../img/title3.png"></img>
									  <div class="outs_left">
										<!-- 头冠 -->
										<img src="../../../img/tou3.png"></img>
									  </div>
									</div>
									<div class="outs_right">
										<div class="outs_right_title active">阿拉蕾</div>
										<div class="outs_rule active">
											<span class="">表演曲目:</span> 《我是一只小小鸟》
										</div>
										<!-- 时间 -->
										<div class="outs_time clearfix">
											<div class="outs_time_left fl clearfix">
											  <div class="fl">
												<img src="../../../img/time.png"></img>
											  </div>
											  <div class="uts_time_text fl">播放量：456</div>
											</div>
											<div class="outs_time_left outs_time_right  fl clearfix">
											  <div class="fl">
												<img src="../../../img/time1.png"></img>
											  </div>
											  <div class="uts_time_text fl">时长：08:12</div>
											</div>
										</div>
									</div>
								  </div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!-- 榜单 -->
				<div v-show="cur==4">
					<ul>
						<li  class="outs_list">
							  <div class="outs clearfix">
								<div class="outs_left">
								  <img src="../../../img/bj-2.jpg"></img>
								</div>
								<div class="outs_right">
									<div class="outs_right_title overflow-1">
										最具民族演出，荣获一等奖作品作品作品作最具民族演出，荣获一等奖作品作品作品作最具民族演出，荣获一等奖作品作品作品作最具民族演出，荣获一等奖作品作品作品作
									</div>
									<div class="outs_rule">《刚刚好》</div>
									<div class="outs_Judges"><span class="text-black">表演者：</span>小白</div>
									<!-- 时间 -->
									<div class="outs_time clearfix">
										<div class="outs_time_left fl clearfix">
										  <div class="fl">
											<img src="../../../img/time.png"></img>
										  </div>
										  <div class="uts_time_text fl">播放量：456</div>
										</div>
										<div class="outs_time_left outs_time_right  fl clearfix">
										  <div class="fl">
											<img src="../../../img/time1.png"></img>
										  </div>
										  <div class="uts_time_text fl">时长：08:12</div>
										</div>
									</div>
								</div>
							  </div>		
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cur:0,
			curt: 0,
			fileList: [], //图片
			imgurl: "", //图片路径
			oneurl: "", //传给后台的图片类型
			imgs: "", //截图
		};
},
mounted() { 
	this.initVideo();
},
methods: {
	initVideo() {
	//初始化视频方法
	let myPlayer = this.$video(myVideo, {
		controls: true,
		autoplay: "muted",
		preload: "auto"
	});
	},
	// 图片上传
	uploadImg(file) {
	  const param = new FormData();
	  param.append("file", file.file);
	  param.append("token", localStorage.getItem("token"));
	},
	beforeRead(file) {
	  return true;
	},
	beforeDelete(file) {
	  return false;
	},
}
};
</script>

<style scoped="scoped">
/* 冠名 */
.naming .outs_right_title{
 margin-top: 30px; 
}
.outs_right_title.active{
	font-size: 30px;
}
.naming .outs_left{
  width: 160px;
  height: 160px;
  border-radius: 50%;
}
.naming .outs_title{
  position: relative;
}
.naming  .outs_left_title{
  position: absolute;
  width: 170px;
  height: 107px;
  z-index: 100;
  left: -3px;
  top: -55px;
}
.naming .outs_left img{
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%; 
}
.naming .outs_right{
  float: left;
  height: 160px;
  margin-left: 30px;
  width: ;
}
.naming .outs_right_title{
  color: #000;
  font-size: 30px;
  font-weight: bold;
}
.naming .outs_list{
  margin-top: 50px; 
}
/* 赛况 */
.outs{
  width: 100%;
  padding: 30px 0 0 0;
}
.outs_left{
  width: 280px;
  height: 190px;
  float: left;
}
.outs_left img{
  width: 100%;
  height: 100%;
}
.outs_right{
  float: right;
  width: 420px;
  height: 190px;
}
.outs_right_title{
  font-size: 30px;
}
.outs_rule{
  color: #f05454;
  font-size: 30px;
}
.outs_rule.active{
	color: #333333;
}
.outs_Judges{
  font-size: 26px;
  color: #999999;
}
.outs_time_left img{
  width: 20px;
  height: 20px;
}
.outs_time_left{
  font-size: 22px;
  color: #999999;
  margin-top: 12px; 
}
.uts_time_text{
  margin-left: 10px;
  height: 16px;
  line-height: 25px;
}
.outs_time_right{
  margin-left: 20px; 
}
.btn{
	margin-top: 85px;
	margin-bottom: 85px;
}
/* 报名 */
.upload_entry{
	width: 100%;
}
.upload_entry .text-bolder{
	font-size: 30px;
	margin: 15px 0;
	display: inline-block;
}
.van_uploader .van-button--normal{
	width: 230px;
	height: 100px;
	font-size: 30px;
}
.upload_works .text-bolder{
	font-size: 30px;
	margin: 15px 0;
	display: inline-block;
}
/* 参赛留言 */
.works_msg{
  width: 100%;
  margin-top: 20px; 
}
.works_msg textarea{
  width: 100%;
  height: 360px;
  background: #e9e9e9;
  padding-left: 10px; 
  box-sizing: border-box;
}
/* 填写个人信息 */
.info_input{
  width: 100%;
  height: 80px;
  position: relative;
  margin-top: 20px; 
}
.info_input input{
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  background: #e9e9e9;
  padding-left: 80px;
}
.info_input img{
  width: 45px;
  height: 45px;
  position: absolute;
  left: 20px;
  top: 20px;
}

.nav_list .sign_up .tab-tilte{
	width: 100%;
	margin-top: 30px;
}
.nav_list .sign_up .tab-tilte li{
	float: left;
	width: 50%;
	padding: 10px 0;
	text-align: center;
	background-color: transparent;
	cursor: pointer;
	font-size: 30px;
	font-weight: bold;
	color: #999999;
}
/* 点击对应的标题添加对应的背景颜色 */
.nav_list .sign_up .tab-tilte .active{
	color: #000;
}
.nav_list .sign_up .tab-content {
	width: 100%;
	padding: 0 20px;
	margin-top: 10px;
}
/* 互动 */
.info_speak{
  width: 100%;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
}
.info_speak_name{
  color: #4f4f4f;
  font-weight: bold;
  font-size: 28px;
}
.info_speak_text{
  font-size: 26px;
  color: #666;
}
.info_speak_list{
  line-height: 30px;
  margin-top: 15px; 
}
/* 评论 */
.comment{
  width: 100%;
  height: 120px;
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  left: 0;
}
.comment input{
  height: 80px;
  width: 100%;
  background: #f1f1f1;
  border-radius: 15px;
  padding-left: 40px;
  position: relative;
  box-sizing: border-box;
}
.comment img{
  width: 60px;
  height: 44px;
  position: absolute;
  right: 50px;
  top: 30px;
}
/* tab切换 */
.nav_list .tab-tilte{
	width: 100%;
	margin-top: 30px;
}
.nav_list .tab-tilte li{
	float: left;
	width: 20%;
	padding: 10px 0;
	text-align: center;
	background-color:#f4f4f4;
	cursor: pointer;
	font-size: 34px;
	font-weight: bold;
	color: #999999;
}
/* 点击对应的标题添加对应的背景颜色 */
.nav_list .tab-tilte .active{
	color: #e3a41c;
}
.nav_list .tab-content {
	width: 100%;
	padding: 0 20px;
	margin-top: 10px;
}
/* 关注 */
.follow {
  width: 150px;
  height: 60px;
  position: absolute;
  right: 20px;
  top: 100px;
}
.follow .follow_opacity{
  opacity: 0.6;
  background: #e6a00c;
  width: 150px;
  height: 60px;
  border-radius: 15px;
}
.follow .follow_list{
  position: absolute;
  top: 13px;
  right: 10px;
  font-size: 30px;
}
.follow img{
  width: 32px;
  height: 37px;
  z-index: 1000;
  position: absolute;
  left: -40px;
  top: 5px;
}
/* 直播标题 */
.Interface .live {
  width: 300px;
  height: 40px;
  position: absolute;
  top: 100px;
}
.Interface .live .live_status{
  width: 20px;
  height: 20px;
  background: #1de318;
  border-radius: 50%;
  display: inline-block;
}
.Interface{
	width: 100%;
	padding: 0 20px;
	margin-top: ;
}
.Interface .video-js{
	width: 100%;
	height: 490px;
	position: relative;
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
