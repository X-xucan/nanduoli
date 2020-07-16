<template>
	<div>
		<div class="exhi">
		  <div class="exhi_img">
		    <img  src="../../../img/haed.jpg"/>
			<router-link to="/sutido">
				<div class="fanhui">
					<i class="iconfont icon-fanhui fl"></i>
				</div>
			</router-link>
		  </div>
		  <div class="follow">
		    <div class="follow_opacity"></div>
		    <div class="follow_list">
		      <img src="../../../img/guanzhu.png"></img>
		      <span class="text-white">已关注</span>
		    </div>
		  </div>
		</div>
		<!-- 粉丝 -->
		<div class="fans">
		  <div class="title_fans">佛系白小白</div>
		  <div class="fans_list">
		    <span>粉丝：1.5w</span>
		    <span class="text">作品：88</span>
		  </div>
		  <!-- 描述 -->
		  <div class="describe">
		  1976年3月12日出生于安徽省芜湖市，中国内地影视女演员、歌手导演、监制，毕业北京电影学院表演系，并取得北京电影学院导演系硕士学位。1993年，出演个人首部电影《画魂》，开启了她的演艺生涯。1995年，首次担纲女主角，并出演了个人首部电视剧《姐姐妹妹闯北京》。1998年，其主演的清装宫廷剧《还珠格格》播出该剧创造出收视率中国第一、亚洲第一、重播率最高等多项纪录
		  </div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
.fanhui {
	position: absolute;
	top: 35px;
	left: 20px;
	color: #fff;
	
}
.fanhui .iconfont{
	font-size: 40px;
}
.exhi{
  width: 100%;
  height: 711px;
  padding: 0 15px;
}
.exhi_img img{
  width: 100%;
  height: 711px;
}
.follow {
  width: 150px;
  height: 60px;
  position: absolute;
  right: 20px;
  top: 35px;
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
/* 标题 */
.fans{
  margin-top:20px; 
}
.fans .title_fans{
  text-align: center;
  font-size: 34px;
  font-weight: bold;
}
.fans_list{
  text-align: center;
  margin-top: 20px;
  color: #999; 
}
.fans_list .text{
  margin-left: 25px; 
}

.describe{
  padding: 0 15px;
  color: #333333;
  margin-top: 10px;
  font-size: 24px;
}
</style>
