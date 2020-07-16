<template>
	<div class="user">
		<div class="private_title clearfix">
			<router-link to="/live">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">直播间场所</span>
		</div>
		<div class="my_user">
			<p>上传场所相关图片</p>
			<div class="update">
				<van-uploader
				  :max-size="10000000"
				  :after-read="uploadImg"
				  :before-read="beforeRead"
				  :max-count="4"
				  v-model="fileList"
				  multiple
				  preview-size= "173.5px"
				/>
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
.my_user .btn{
	width: 325px;
	height: 70px;
	background: #efefef;
	color: #999999;
	margin: 0 auto;
	margin-top: 300px;
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
	font-size: 26px;
	font-weight: bold;
	color: #666;
}
.private_title .iconfont{
	color: #cdcdcd;
}
.private_title .iconfont.icon-lianxiren{
	font-size: 36px;
}
.update{
	margin-top: 20px;
}
</style>
