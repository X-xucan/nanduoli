<template>
	<div class="report">
		<div class="private_title clearfix">
			<router-link to="/follow">
				<i class="iconfont icon-fanhui fl"></i>
				<span class="name">用户举报</span>
			</router-link>
		</div>
		<div class="report_title">
			<p class="yuan">举报原因</p>
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
		<!--  -->
		<div class="comment">
			<textarea></textarea>
		</div>
		<div class="update">
			<van-uploader
			  :max-size="10000000"
			  :after-read="uploadImg"
			  :before-read="beforeRead"
			  :max-count="4"
			  v-model="fileList"
			  multiple
			  preview-size= "84px"
			/>
		</div>
		<div>
			<div class="btn" @click="submit">提交</div>
		</div>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          { name: '色情低俗', isSelected: false },
          { name: '政治敏感', isSelected: false },
          { name: '违法犯罪', isSelected: false },
          { name: '垃圾广告', isSelected: false },
          { name: '售卖假货', isSelected: false },
          { name: '非原创内容', isSelected: false },
          { name: '侵犯利益', isSelected: false },
          { name: '涉嫌诈骗', isSelected: false },
		  { name: '侮辱谩骂', isSelected: false }
          ],
        actiove: 0,
		fileList: [], //图片
	    imgurl: "", //图片路径
	    oneurl: "", //传给后台的图片类型
	    imgs: "", //截图
      }
    },
    methods: {
      cutTabClick (index, item) {
        this.actiove = index
        item.isSelected = !item.isSelected
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
	  submit () {
		  
	  }
    }
  }
</script>

<style scoped="scoped">
.report .btn{
	margin: 0 auto;
	margin-top: 140px;
	background: #ec3255;
	border-radius: initial;
}
.update{
	width: 100%;
	padding: 0 20px;
	margin-top: 15px;
}
.update .van-uploader__preview-delete{
	width: 20px !important;
	height: 20px !important;
}
.report .comment{
	width: 100%;
	height: 100%;
	padding: 0 20px;
	margin-top: 65px;
}
.report .comment textarea{
	width: 100%;
	height: 295px;
	background: #F1F1F1;
	padding-left: 20px;
	padding-top: 10px;
	box-sizing: border-box;
}
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
.report_title .yuan{
	color: #666;
	font-size: 22px;
}
.report_title{
	padding: 0 20px;
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
	margin-left: 10px;
}
.private_title .iconfont{
	color: #cdcdcd;
}
.private_title .iconfont.icon-lianxiren{
	font-size: 36px;
}
</style>
