<template>
  <div class="control">
    <div class="img-show-top">
			<span>对比结果</span>
		</div>
    <div class="img_show_div">
			<span class="catch-img-span">抓拍图片</span>
			<div class="compareimage-box">
				<div class="compareimage-in-box">
					<div class="strange_img_show"><img src="" id="strange_img_pic" draggable=false></div>
					<div class="black_img_show"><img src="" id="black_img_pic" draggable=false></div>
				</div>
				<span class="sim"></span>
			</div>
			<span class="control-img-span">布控图片</span>
		</div>
		<div class="info-content">
			<table class="info_table" >
				<tr><td colspan="2" style="padding-top: 0px;"><div class='topline'></div></td></tr>
				<tr>
					<td width="50%"><span class='v-label'>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名&nbsp;:</span><span class='v-text' id="personName"></span></td>
					<td width="50%"><span class='v-label'>所属人脸库&nbsp;:</span><span class='v-text' id="libname" ></span><!--id="sim"--></td>
				</tr>
				<tr>
				  <td width="50%"><span class='v-label'>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别&nbsp;:</span><span class='v-text' id="sex"></span></td>
					<td width="50%"><span class='v-label'>生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;:</span><span  id="age" class='v-text' ></span></td>
				</tr>	  
				<tr>
					<td width="50%"><span class='v-label'>国&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;籍&nbsp;:</span><span class='v-text' id="country"></span></td>
					<td width="50%"><span class='v-label'>民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族&nbsp;:</span><span  id="nation" class='v-text' ></span></td>
				</tr>
				<tr>
					<td width="50%"><span class='v-label'>身份证号码&nbsp;:</span><span class='v-text' id="personId"></span></td>
					<td width="50%"><span class='v-label'>联&nbsp;系&nbsp;电&nbsp;话&nbsp;:</span><span class='v-text' id="tel"></span></td>
				</tr>
				<tr>
					<td width="50%"><span class='v-label'>住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址&nbsp;:</span><span class='v-text' id="addr"></span></td>
					<td width="50%"><span class='v-label'>现&nbsp;&nbsp;&nbsp;居&nbsp;&nbsp;&nbsp;地&nbsp;:</span><span class='v-text' id="nowaddr"></span></td>
				</tr>
			</table>
			<table class="info_table" style='height:132px;'>
			  <tr><td colspan="2" ><div class='topline'></div></td></tr>
			  <tr>
					<td width="50%"  colspan="2"><span class='v-label'>抓拍摄像头:</span><span class='v-text' id="cameraname"></span></td>
				</tr>
			  <tr>
					<td width="50%"  colspan="2"><span class='v-label'>抓&nbsp;拍&nbsp;时&nbsp;间&nbsp;:</span><span class='v-text' id="catchTime"></span></td>
				</tr>
				<tr>
					<td width="50%" ><span class='v-label'>布&nbsp;控&nbsp;单&nbsp;位&nbsp;:</span><span class='v-text' id="company"></span></td>
				</tr>
				<tr>
					<td width="50%"><span class='v-label'>布&nbsp;&nbsp;&nbsp;控&nbsp;&nbsp;&nbsp;人&nbsp;:</span><span class='v-text' id="username"></span></td>
				</tr>
				<tr>
					<td width="50%"><span class='v-label'>布&nbsp;控&nbsp;时&nbsp;间&nbsp;:</span><span class='v-text' id="startTime"></span></td>
				</tr>
	      <tr>
					<td width="50%" colspan="2"><span class='v-label'>布&nbsp;控&nbsp;原&nbsp;因&nbsp;:</span>
					  		<!-- <span class='v-text' id="comment"></span> -->
					<textarea style="margin-left:115px;margin-top:-20px;width:600px;height:60px" class='form-control'
              name="comment" id="comment"></textarea>
					</td>
				</tr>
				<!-- <tr> -->
				<tr><td colspan="2"><div class='topline'></div></td></tr>
			</table>
			<div class="btn-grup">
				<span class="v-label">是否激活&nbsp;:</span>
				<el-checkbox></el-checkbox>
				<button class="btn">确定</button>
				<button class="btn ml05">误报处理</button>
				<!-- <el-button type="primary">确定</el-button>
				<el-button type="primary">误报处理</el-button> -->
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'personControl'
}
</script>

<style scoped>
.ml05{
	margin-left:25%;
}
.btn-grup{
	background:white;
	padding-bottom:30px;
}
.btn{
	border:none;
	color:white;
	width:80px;
	height:30px;
	font-weight: 400;
	cursor: pointer;
	background:#6287d9;
	border-radius: 2px;
	font-size: 16px;
  padding: 0;
}
.img-show-top{
  width: 100%;
	height: 88px;
	line-height: 68px;
	text-align:center;
	background-color: #5676BC;
	background-image: url(../../static/img/pic_result@2x.png);
	background-repeat: no-repeat;
	background-position: center top;
	font-size: 24px;
	color: #fff; 
}
.img_show_div {
	position:relative;
	width: 100%;
	height: 301px;
	background:#5676BC;
}
.catch-img-span, .control-img-span {
	display: inline-block;
	position: absolute;
	top: 0;
	bottom: 0;
	margin-top: auto;
	margin-bottom: auto;
	width: 75px;
	height: 18px;
	line-height: 18px;
	color: #cfdeff;
	font-size: 14px;
}
.catch-img-span {
	left: 10%;
	background: url(../../static/img/pic_result_left@2x.png) no-repeat;
	background-position: right center;
	
}
.control-img-span {
	right: 10%;
	background: url(../../static/img/pic_result_right@2x.png) no-repeat;
	text-align: right;
}
.compareimage-box {
	width: 478px;
	height: 260px;
	margin-left: 28%;
	padding: 10px;
	background: url(../../static/img/pic_result_box@2x.png) no-repeat;
	position: relative;
}
.compareimage-in-box {
	width: 456px;
	height: 238px;
	padding: 2px 1px 1px 2px;
	border: 1px solid #CFDEFF;
}
.black_img_show, .strange_img_show {
	float: left;
	width: calc(50% - 1px);
	height: calc(100% - 1px);
}
.sim {
	display: inline-block;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	margin-left: auto;
	margin-right: auto;
	width: 166px;
	height: 40px;
	line-height: 40px;
	font-size: 30px;
	text-align: center;
	color: #fff;
	background: url(../../static/img/pic_result_red@2x.png) no-repeat;
}
.info_table{
	background:white;
	width: 100%;
	float: left;
}
.topline{
	border-top:1px solid #d5d5d5;
	width:100%;
}
.v-label{
	margin-left: 24px;
	color:#666;
	font-family: 微软雅黑;
	font-size: 14px;
}
.v-text{
	color:#000;
	font-family: 微软雅黑;
	margin-left:14px;
	font-size: 16px;
}
.form-control{
	height:34px;
	/* margin-top:3px; */
}
.form-control{
	height:30px;
	margin-top:3px;
}
.form-control:focus,.form-control:hover{
	border:1px solid #6287d9;
}
</style>


