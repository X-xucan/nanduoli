<template>
	<div class="bianji">
		<div class="private_title clearfix">
			<router-link to="/my">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">编辑资料</span>
		</div>
		<div class="change">
			<div id="app">
			  <div class="item_bock">
			     <div class="head_img">
			       <img :src="userInfo.avatar"/>
			     </div>
			   </div>
			   <div>
				   <div @click="showModal= true"  class="caption">点击更改头像</div>
				   <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
			   </div>
			 </div>
		</div>
		<!-- 弹框 -->
		<div class="module" v-if="showModal">
			<div class="module_mochen"></div>
			<ul>
				<li>拍一张</li>
				<li @click.stop="uploadHeadImg">从相册选择</li>
				<li>查看大图</li>
				<li @click="showModal= false">取消</li>
			</ul>
		</div>
		<!-- 个人资料 -->
		<div class="personal_data">
			<ul>
				<li class="list clearfix">
					<span class="name fl">昵称</span>
					<router-link to="/user">
						<div class="fr">
							<span class="list_title">用户名</span>
							<i class="iconfont icon-youkuohao"></i>
						</div>
					</router-link>
				</li>
				<li class="list clearfix">
					<span class="name fl">签名</span>
					<router-link to="/auto">
						<div class="fr">
							<span class="list_title">昵称</span>
							<i class="iconfont icon-youkuohao"></i>
						</div>
					</router-link>
				</li>
				<li class="list clearfix">
					<span class="name fl">性别</span>
					<div class="fr">
						<span class="list_title" @click="showModals= true">男</span>
						<i class="iconfont icon-youkuohao"></i>
					</div>
				</li>
				<li class="list clearfix">
					<span class="name fl">生日</span>
					<div class="fr clearfix">
						<span class="list_title fl">
							<van-field v-model="timeValue"  plain type="primary" @click="showPopFn()" readonly />
							<van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
							  <van-datetime-picker v-model="currentDate" type="date" @change="changeFn()" @confirm="confirmFn()" @cancel="cancelFn()" />
							</van-popup>
						</span>
						<i class="iconfont icon-youkuohao fl"></i>
					</div>
				</li>
				<li class="list clearfix">
					<span class="name fl">地区</span>
					<div class="fr clearfix">
						<span class="list_title fl">
							<van-field
								readonly 
								clickable 
								:value="value" 
								@click="showPicker = true" 
							  />
							<van-popup v-model="showPicker" position="bottom">
								<van-picker 
									show-toolbar 
									:columns="columns" 
									@cancel="showPicker = false" 
									@confirm="onConfirm"
									@change="onChange" />
							</van-popup>
						</span>
						<i class="iconfont icon-youkuohao fl"></i>
					</div>
				</li>
				<li class="list clearfix">
					<span class="name fl">毕业学校</span>
					<div class="fr">
						<span class="list_title">
							<input type="text"/>
						</span>
						<i class="iconfont icon-youkuohao"></i>
					</div>
				</li>
			</ul>
		</div>
		
		<!-- 弹框 -->
		<div class="module" v-if="showModals">
			<div class="module_mochen"></div>
			<ul>
				<li style="border-bottom: none;"></li>
				<li @click="showModals= false">男</li>
				<li @click="showModals= false">女</li>
				<li style="border-bottom: none;"></li>
			</ul>
		</div>
	</div>
</template>

<script>
const citys = {
	'浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
	'福建': ['福州', '厦门', '莆田', '三明', '泉州']
};
export default{
	data () {
		return {
			userInfo: {
			  avatar: require('../../img/head.jpg')
			},
			showModal: false,
			selected: '男',
			showModals: false,
			msg: '',
			currentDate: new Date(),
			changeDate: new Date(),
			show: false, // 用来显示弹出层
			timeValue: '',
			 value:'',
				showPicker:false,
				columns: [
					{
						values: Object.keys(citys),
						className: 'column1'
					},
					{
						values: citys['浙江'],
						className: 'column2',
						defaultIndex: 2
					}
				]
		}
	},
  methods: {
	   onConfirm(value) {
	                  this.value = value[0]+'-'+value[1];
	                  this.showPicker = false;
	              },
	              onChange(picker, values) {
	                  picker.setColumnValues(1, citys[values[0]]);
	              },
    // 打开图片上传
    uploadHeadImg: function () {
      this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显示
    handleFile: function (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)
    },
	showPopFn() {
	        this.show = true;
	      },
	      showPopup() {
	        this.show = true;
	      },
	      changeFn() { // 值变化是触发
	        this.changeDate = this.currentDate // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
	      },
	      confirmFn() { // 确定按钮
	        this.timeValue = this.timeFormat(this.currentDate);
	        this.show = false;
	      },
	      cancelFn(){
	        this.show = true;
	      },
	      timeFormat(time) { // 时间格式化 2019-09-08
	        let year = time.getFullYear();
	        let month = time.getMonth() + 1;
	        let day = time.getDate();
	        return year + '年' + month + '月' + day + '日'
	      }
	    },
	    mounted() {
	      this.timeFormat(new Date());
	    }
  }
</script>

<style scoped="scoped">
.van-field__control{
	width: 250px;
}
.list_title .van-cell{
	font-size: 30px;
	color: #666666 !important;
}
.van-field__control{
	color: #666666 !important;
}
.van-cell{
	width: 250px;
	padding: 0;
}
.list_title{
	font-size: 30px;
	color: #666666;
}
.personal_data .list input{
	width: 300px;
	height: 100%;
	margin-left: 10px;
}
.personal_data .name{
	font-size: 32px;
	font-weight: bold;
}
.personal_data ul li {
	width: 100%;
	margin-top: 30px;
	border-bottom: 1px solid #F1F1F1;
	padding-bottom: 10px;
}
.personal_data{
	width: 100%;
	height: 100%;
	padding: 0 20px;
}
.module_mochen{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.3);
	position: fixed;
	top: 0;
	bottom: 0;
	z-index: 1000;
}
.module ul li{
	width: 100%;
	height: 85px;
	font-size: 36px;
	color: #000;
	text-align: center;
	line-height: 85px;
	border-bottom: 1px solid #F1F1F1;
	font-weight: 800;
}
.module ul {
	width: 100%;
	height: 434px;
	background: #fff;
	position: fixed;
	bottom: 0;
	z-index: 1000;
	padding-top: 40px;
}
.bianji .change{
	width: 100%;
	height: 100%;
	margin-top: 40px;
}
.item_bock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:100%;
  width: 100%;
  padding:0px 24px 0px 38px;
  background: #fff;
}
.head_img{
  height: 200px;
  width: 200px;
  margin: 0 auto;
}
.head_img img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.setting_right{
  display: flex;
  height: 37px;
  justify-content: flex-end;
  align-items: center;
}
.hiddenInput{
  display: none;
}
.caption {
  color: #000;
  font-size: 36px;
  height: 37px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
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
