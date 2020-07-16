<template>
	<div class="live">
		<div class="private_title clearfix">
			<router-link to="/success">
				<i class="iconfont icon-fanhui fl"></i>
			</router-link>
			<span class="name">创建赛区</span>
		</div>
		<div class="group">
			<div class="exhib">
				<div :key="index" v-for='(item, index) in imgs' class="exhib_img">
				  <img :src="getObjectURL(item)" />
				  <a class="close" @click="delImg(index)">×</a>
				</div>
			</div>
			<!-- 个人资料 -->
			<div class="personal_data">
				<ul>
					<li class="list clearfix">
						<span class="name fl">上传直播间封面</span>
						<div class="fr input_list" v-if="imgLen>=1 ? false : true">
							<input type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
							<i class="iconfont icon-youkuohao"></i>
						</div>
					</li>
					<li class="list clearfix">
						<span class="name fl">赛区名称</span>
						<router-link to="/disname">
							<div class="fr">
								<span class="list_title">云南歌手大赛</span>
								<i class="iconfont icon-youkuohao"></i>
							</div>
						</router-link>
					</li>
					<li class="list clearfix">
						<span class="name fl">赛区地点</span>
						<router-link to="/displace">
							<div class="fr">
								<span class="list_title">云南省昆明市</span>
								<i class="iconfont icon-youkuohao"></i>
							</div>
						</router-link>
					</li>
					<li class="list clearfix">
						<span class="name fl">赛区公告<span style="font-size: 15px; color: #999999; font-weight: 100;">（海报）</span></span>
						<router-link to="/disnotice">
							<div class="fr">
								<i class="iconfont icon-youkuohao"></i>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="btn">开通</div>
		<div class="return clearfix">
			<router-link to="/">
				<span class="fl">返回首页</span>
			</router-link>
			<router-link to="/my">
				<span class="fr">返回我的</span>
			</router-link>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        formData:new FormData(),
        imgs: {},
        imgLen:0,
      }
    },
    methods: {
      addImg(event){
        let inputDOM = this.$refs.inputer;
        // 通过DOM取文件数据
        this.fil = inputDOM.files;
        let oldLen=this.imgLen;
        let len=this.fil.length+oldLen;
        if(len>1){
          return false;
        }
        for (let i=0; i < this.fil.length; i++) {
          let size = Math.floor(this.fil[i].size / 1024);
          if (size > 5*1024*1024) {
            alert('请选择5M以内的图片！');
            return false
          }
          this.imgLen++;
          this.$set(this.imgs,this.fil[i].name+'?'+new Date().getTime()+i,this.fil[i]);
        }
      },
      getObjectURL(file) {
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
          url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
      },
      delImg(key){
        this.$delete(this.imgs,key);
        this.imgLen--;
      },
      submit(){
        for(let key in this.imgs){
          let name=key.split('?')[0];
          this.formData.append('multipartFiles',this.imgs[key],name);
        }
        this.$http.post('/opinion/feedback', this.formData,{
          headers: {'Content-Type': 'multipart/form-data'}
        }).then(res => {
          this.alertShow=true;
        });
      },
    }
  }
</script>

<style>
.live .return{
	width: 100%;
	padding: 0 100px;
	margin-top: 100px;
}
.live .btn{
	margin-top: 170px;
}
.input_list input{
	opacity: 0;
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
.group{
	width: 100%;
	padding: 0 20px;
}
.group .exhib{
	width: 100%;
	height: 340px;
	background: #f1f1f1;
}
.group .exhib img{
	width: 100%;
	height: 100%;
}
.exhib_img{
	width: 100%;
	height: 340px;
}
.exhib_img img{
	width: 100%;
	height: 100%;
}
.exhib_img{
	position: relative;
}
.exhib_img .close{
	color: #FF2D52;
	font-size: 30px;
	position: absolute;
	right: 0;
	top: 0;
	width: 30px;
	height: 30px;
	background: #ccc;
	text-align: center;
	line-height: 30px;
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
</style>
