<template>
	<div class="user">
		<div class="private_title clearfix">
			<router-link to="/live">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">直播间活动</span>
		</div>
		<div class="my_user">
			<p>设置直播间活动</p>
			<div class="report_title">
				<div class="container">
				    <ul class="tab-list clearfix">
				      <li class="tab-li"
						:class="item.isSelected ?'Active' : '' "
						v-for="(item,index) in list" @click="cutTabClick(index,item)"
						:key="index"
					>{{item.name}}</li>
				    </ul>
			  	</div>
			</div>
			<div class="btn">
				完成
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          { name: '聊天', isSelected: false },
          { name: '才艺表演', isSelected: false },
          { name: '直播带货', isSelected: false }
          ],
        actiove: 0,
      }
    },
    methods: {
      cutTabClick (index, item) {
        this.actiove = index
        item.isSelected = !item.isSelected
      }
    }
  }
</script>


<style scoped="scoped">
.container{
	width: 100%;
	height: 100%;
	margin-top: 27px;
}
.container ul li{
	width: 175px;
	float: left;
	text-align: center;
	margin:5px 0;
	margin-right: 88px;
	height: 52px;
	line-height: 52px;
	font-size: 26px;
	font-weight: bold;
	border-bottom: 1px solid #f1f1f1;
}
.container ul li:nth-child(3n){
	margin-right: 0;
}
.container ul li.Active{
	color: #fff;
	background: #31b5ad;
}
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
