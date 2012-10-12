//template ids map
var TemplatePool = (function(){
    var pool = [
                {tid:'16671',tname:'空白模板',tinfo:'拥有无尽的想象力', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116671/116706.jpg"},
                //亲子
                {tid:'16076',tname:'蓝鲸',tinfo:'好可爱好可爱好可爱！', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116076/116554.jpg"},
                {tid:'16107',tname:'我最可爱',tinfo:'啧啧，真自恋呐', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116107/116620.jpg"},
                {tid:'16106',tname:'小狮萌萌',tinfo:'逆天萌物哇', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116106/116624.jpg"},
                {tid:'16063',tname:'马戏团的小伙伴',tinfo:'有一颗亮铮铮的童心哦', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116063/116542.jpg"},
                {tid:'16077',tname:'小人国',tinfo:'也带我去小人国吧！', tpic:"http://st2.yxp.126.net/img2012/page/1601/te116077/116557.jpg"},
                {tid:'16155',tname:'我的节日',tinfo:'跳舞唱歌做吃货，过节啦！ ', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116155/116585.jpg"},
                {tid:'16117',tname:'天才小画家',tinfo:'吼吼吼~围观围观围观', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116117/116344.jpg"},
                {tid:'16105',tname:'青蛙王子',tinfo:'求公主求公主', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116105/116628.jpg"},
                {tid:'16101',tname:'汽车呼呼开 ',tinfo:'好羡慕', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116101/116515.jpg"},
                //爱情
                {tid:'16047',tname:'滚床单 ',tinfo:'非礼勿视，嘻嘻', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116047/116652.jpg"},
                {tid:'16111',tname:'浪花一朵朵 ',tinfo:'最近没少冲浪花吧？', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116111/116530.jpg"},
                {tid:'16058',tname:'熊熊爱意 ',tinfo:'爱真美好', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116058/116518.jpg"},
                {tid:'16050',tname:'喵喵的爱情 ',tinfo:'粉嫩粉嫩的', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116050/116539.jpg"},
                {tid:'16079',tname:'爱上心头 ',tinfo:'桃花儿朵朵开', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116079/116565.jpg"},
                {tid:'16064',tname:'sweet heart ',tinfo:'甜上心头', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116064/116545.jpg"},
                {tid:'16116',tname:'框不住爱 ',tinfo:'爱满溢了呐', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116116/116656.jpg"},
                //趣图
                {tid:'16112',tname:'pocker ass',tinfo:'矮油，重口味我喜欢', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116112/116527.jpg"},
                {tid:'16113',tname:'非礼勿视 ',tinfo:'目不转睛了吧？', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116113/116524.jpg"},
                {tid:'16054',tname:'旋转木马 ',tinfo:'色彩斑斓的童话故事', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116054/116632.jpg"},
                {tid:'16108',tname:'zip dowm ',tinfo:'啦啦啦啦啦啦啦啦啦', tpic:"http://st2.yxp.126.net/img2012/page/1601/te116108/116616.jpg"},
                {tid:'16078',tname:'呼神护咒 ',tinfo:'玛丽玛丽玛丽贝贝红', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116078/116561.jpg"},
                {tid:'16053',tname:'巧克力生活 ',tinfo:'看着真好吃！', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116053/116636.jpg"},
                {tid:'16052',tname:'好奇的长颈鹿 ',tinfo:'为什么我的脖子这么长？', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116052/116640.jpg"},
                {tid:'16048',tname:'小丑的眼泪 ',tinfo:'肿么哭了？', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116048/116644.jpg"},
                //校园
                {tid:'16118',tname:'童年的单车 ',tinfo:'单车上的回忆还有谁？', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116118/116593.jpg"},
                {tid:'16114',tname:'那些年 ',tinfo:'时光机躲哪里去了？', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116114/116521.jpg"},
                {tid:'16067',tname:'信使 ',tinfo:'想寄信给谁哇？', tpic:"http://st2.yxp.126.net/img2012/page/1601/te116067/116548.jpg"},
                {tid:'16109',tname:'大大泡泡糖 ',tinfo:'越吹越大', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116109/116536.jpg"},
                {tid:'16103',tname:'窗里窗外 ',tinfo:'人生的美好风景', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116103/116512.jpg"},
                //白搭
                {tid:'16068',tname:'午后茶 ',tinfo:'惬意的呐', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116068/116551.jpg"},
                {tid:'16038',tname:'村上春树 ',tinfo:'好文艺哦', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116038/116648.jpg"},
                {tid:'16110',tname:'魔镜 ',tinfo:'谁是天下最美的女子？', tpic:"http://st2.yxp.126.net/img2012/page/1601/te116110/116533.jpg"},
                {tid:'16115',tname:'宝丽来的super star ',tinfo:'啦啦啦，一举成名', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116115/116509.jpg"}
                ];
    
    return{
        getTemplateInfo:function(tid){
            var result;
            $.each(pool, function(index, value){
                if(tid == value["tid"]) {
                    result = value;
                    return;//break each loop
                }
            });
            return result;
        },
        getPool:function() {
        	return pool;
        }
    };
})();

var CONFIG = (function(){
    var URL = "http://yxp.163.com/act/20120824.html";
    var detailURLBase = "http://yxp.163.com/store/detail/?pt=1601&";
    return {
        getURL:function(){
            return URL;
        },
        getDetailURLBase:function(){
        	return detailURLBase;
        }
    };
})();

function log(tag){
	$.post("http://yxp.163.com/log/" + tag + "&t=" + new Date().getTime());
}

var voucherList=[{index:1,code:"sjt85",info:"章鱼贴8.5折"},
    				{index:2,code:"sjt7",info:"章鱼贴7折"},
    				{index:3,code:"sjt6",info:"章鱼贴6折"},
    				{index:4,code:"sjt5",info:"章鱼贴5折"},
    				{index:5,code:"sjtm1",info:"章鱼贴单套装免费+包邮"},
    				{index:6,code:"sjtm2",info:"章鱼贴三套装免费+包邮"},
    				{index:7,code:"sjty",info:"章鱼贴包邮"}];

var userName="";
var templateName="";
var discountDesc="";
var templateDesc="";
var tid = "";
var randomCode="";
var luckyCount = 0;

//当面中奖的类型对象
var prizeType={};

function resetBlockUI() {
    $.blockUI.defaults.css.border = 'none';
    $.blockUI.defaults.css.cursor = 'default';
    $.blockUI.defaults.overlayCSS.cursor = 'default';
}

function showPopUp(content, width, height) {
    var _width = width ? width: '544px';
    var _height = height? height: '275px';
    $.blockUI({
                message:content,
                css:{
                        width:_width,
                        height:_height,
                        top:"25%",
                        left:"33%",
                        overflow:'auto',
                        backgroundColor:'transparent'
                }
               });
}

function removePopListener(content) {
    content.find("#closeBtn").click(function(){
             $.unblockUI();
            }
         );
}

function showSorryWin(){
	resetBlockUI();
	var content = $('<div class="g-sorry">\
                      <div class="m-title">\
                          <button id="closeBtn" class="closeWindow" hidefocus></button>\
                      </div>\
					</div>\
					'
					);
    removePopListener(content);
    showPopUp(content, '553px', '289px');
}

function showBinggoWin(){
    resetBlockUI();
    var content = $('<div class="g-binggo">\
                      <div class="m-title" style="width:80px">\
                          <button id="closeBtn" class="closeWindow" hidefocus></button>\
                      </div>\
                      <div class="m-snapshot">\
                          <img id="templatePic" src="" alt="章鱼贴产品图" style="width:220px;height:220px;margin-left:10px"/>\
                      </div>\
                      <div class="m-content0824">\
                          <div class="templateInfo">\
                              <p style="font-weight:normal"><span class="userName"></span>的命中章鱼贴竟然是</p>\
                              <p id="templateName">模板名</p>\
                              <p id="templateDesc" style="font-weight:normal">模板内容</p>\
                              <br/>\
                              <p style="width:200px;white-space:pre-wrap">快去领取你的<span id="discount"></span>优惠吧</p>\
                            <span class="action"><button class="btn" value="领取优惠>>">领取优惠>></button></span>\
                          </div>\
                          <div class="m-share" style="width:120px">\
                              <p>分享我命中章鱼贴到</p>\
                              <ul>\
                                  <li><button class="u-netease"></button></li>\
                                  <li><button class="u-sina"></button></li>\
                                  <li><button class="u-douban"/></button></li>\
                                  <li><button class="u-qq"/></button></li>\
                                  <li><button class="u-renren"/></button></li>\
                              </ul>\
                          </div>\
                      </div>\
                  </div>\
                    ');
    removePopListener(content);
    shareBind(content);
    setTemplateInfo(content);
    (function(){
        content.find('.btn').click(function(){
          log("getCoupon");
          sendCouponInfo();
          showCouponWin();  
        })
    })();
    showPopUp(content, '564px', '435px');
}

function setTemplateInfo(content) {
    templateName = TemplatePool.getTemplateInfo(tid)["tname"];
    templateDesc = TemplatePool.getTemplateInfo(tid)["tinfo"];
    templatePic = TemplatePool.getTemplateInfo(tid)["tpic"];
    content.find('.userName').text(userName);
    content.find('#templateName').text(templateName);
    content.find('#discount').text(discountDesc);
    content.find('#templateDesc').text(templateDesc);
    content.find('#templatePic').attr("src", templatePic);
}

function showRuleWin(){
    resetBlockUI();
    var content = $('<div class="g-rule">\
                      <div class="m-title">\
                          <button id="closeBtn" class="closeWindow" hidefocus/></button>\
                      </div>\
                    </div>\
                    ');
    removePopListener(content);
    showPopUp(content, '564px', '435px');
}

function showCouponWin(){
    resetBlockUI();
    var content = $('<div class="g-coupon">\
                      <div class="m-title">\
                          <button id="closeBtn" class="closeWindow" hidefocus></button>\
                      </div>\
                      <div class="m-content0824" style="padding-left:30px;width:450px;border:none">\
                          <a style="text-decoration:underline;color:#14a4ac" onclick="checkMail()">进入邮箱了解更详细的使用方法>></a>\
                          <button class="btn">马上购买>></button>\
                      </div>\
                  </div>\
                    ');
    removePopListener(content);
    (function(){
        content.find('.btn').click(function(){
            buyProduct();
        })
    })();
    showPopUp(content);
}

function checkMail() {
	log("checkMail");
	var email = $.getFullUserName();
	var result = email.split('@');
	var domainSuffix = result[1];
	navigateToMail(domainSuffix);
}

function navigateToMail(domainSuffix){
    var url = "//mail." + domainSuffix;
	window.open(url,"");
}

function buyProduct(){
	log("buyNow");
	var finalTid = "te1" + tid;
	var destination = CONFIG.getDetailURLBase() + "tid=" + finalTid + "&param=0";
    window.open(destination, "_blank");
}

function showInteractiveWin() {
    resetBlockUI();
    var content = $('<div class="g-interactive">\
                      <div class="m-title">\
                          <button id="closeBtn" class="closeWindow" hidefocus></button>\
                      </div>\
                      <div class="m-content0824">\
                          <input type="text" maxlength="7" class="u-input" style="margin-left:-50px"/>\
                          <button class="btn">确定>></button>\
                      </div>\
                  </div>\
               ');
     
    removePopListener(content);
    popUpBinggoListener(content);
    showPopUp(content);
}

function popUpBinggoListener(content) {
    content.find('.btn').click(function(){
    	log("confirmLucky");
        var name = content.find('.u-input').val();
        setUserName(name);
        showBinggoWin();
    });
}

function hasChance(){
   	return luckyCount < 4 && luckyCount > 0;
}

function setUserName(name) {
    userName = name;
}

function showRules(){
    showRuleWin();
}

function getAction(){
	log("tryLucky");
	var isLogined = $.isLogin();
	if(!isLogined){
		var url = "https://reg.163.com/logins.jsp?url="+encodeURIComponent(window.location.href);
		window.open(url, "_self");
		return;
	}
		
	$.post("http://yxp.163.com/activity.do?action=act20120824Play",function(data){
//		var codeIndexStart = data.lastIndexOf("code=");
//		var codeIndexEnd = data.lastIndexOf(", prizeType=");
//		var end = data.length;
		
		prizeType = null;
		var discount = "";
		randomCode = "";
		
		if(/code=(\w*)/g.test(data)) {
			randomCode = RegExp.$1;
		}

		if(/luckyCount=(\d{1})/g.test(data)){
			luckyCount = RegExp.$1;
		}
		
		if(/prizeType=(sjt\w*)/g.test(data)) {
			discount = RegExp.$1;
		}
		
		if(randomCode == -1 || data == 0) {
			alert("网络错误，抽奖失败");
			return;
		}
		
//		prizeType = null;
//		var discount = "";
//		randomCode = "";
		
//		if(end<10){
//			alert("网络错误，抽奖失败");
//			return;
//		}
		
//		randomCode = data.slice(codeIndexStart + 5,codeIndexEnd);
//		discount = data.slice(codeIndexEnd+12,end-1);
		
		for (var i=0;i<voucherList.length;i++){
			if(voucherList[i].code == discount){
				prizeType = voucherList[i];
				discountDesc = prizeType["info"];
				break;
			}
		}
		
		getRandomTid();
		
		if(hasChance()){
			showWindow();
		} else {
			showSorryWin();
		}
	});
}

//userName, templateName, randomCode,prizeType["code"]
function sendCouponInfo() {
	$.post("http://yxp.163.com/activity.do?action=act20120824AddVoucher",
		{templateId:tid, userName:encodeURIComponent(userName), templateName:encodeURIComponent(templateName), randomCode:randomCode, codeName:prizeType["code"], codeInfo:encodeURIComponent(prizeType["info"])},
		function(data) {
			if(data == 0) {
				alert("绑定优惠券失败!");
			}
		});
}

function showWindow() {
	var isLogined = $.isLogin();
	if(isLogined) {
		showInteractiveWin();
	} else {
		var url = "https://reg.163.com/logins.jsp?url="+encodeURIComponent(window.location.href);
		window.open(url, "_self");
	}
}

function getRandomTid(){
	var pool = TemplatePool.getPool();
	var length = pool.length;
	var random = Math.round(Math.random() * length);
	var template = pool[random];
	tid =  template["tid"];
}

$(document).ready(function(){
	var _userName=$.getUserName(),
		_$login=$("#login"),
		_url="https://reg.163.com/logins.jsp?url="+encodeURIComponent(window.location.href);
	_$login.attr("href",_url);
	if($.isLogin()&&!(/^_[\d]+$/.test(_userName))){
		$("#uname").html(_userName);
		_$login.html("重新登录");
	}
});

//share event bind

function shareBind(content){
//share to neteaase weibo
content.find('.m-share .u-netease').bind("click", function(){
 	var pic = "http://st1.yxp.126.net/img/action/120824/weibopic.jpg";
 	//TemplatePool.getTemplateInfo(tid)["tpic"];
    var templateName = TemplatePool.getTemplateInfo(tid)["tname"];
    var discountDisc = prizeType["info"];
    var content = "哇!" + userName + "在命中章鱼贴竟然是" + templateName + "，我还能享受"+ discountDisc + "的命中优惠哦!" + "印像派章鱼贴，不只是让我的iphone与众不同~了解更多请点击 "+CONFIG.getURL();
    var url = "http://t.163.com/article/user/checkLogin.do?"+"&info="+encodeURI(content) + "&pic=" + pic;
    window.open(url, "_blank", "width=500,height=300, resizable=yes");
});

//share to sina weibo
content.find('.m-share .u-sina').bind("click", function(){
	var pic = "http://st1.yxp.126.net/img/action/120824/weibopic.jpg";
    var templateName = TemplatePool.getTemplateInfo(tid)["tname"];
    var discountDisc = prizeType["info"];
    var content = "哇!" + userName + "在命中章鱼贴竟然是" + templateName + "，我还能享受"+ discountDisc + "的命中优惠哦!" + "印像派章鱼贴，不只是让我的iphone与众不同~了解更多请点击 "+CONFIG.getURL();
    var url="http://v.t.sina.com.cn/share/share.php?"+"title="+encodeURI(content) + "&pic=" + pic;
    window.open(url, "_blank", "width=500,height=300, resizable=yes");
});

//share to douban
content.find('.m-share .u-douban').bind("click", function(){
    var pic = "http://st1.yxp.126.net/img/action/120824/weibopic.jpg";
    var templateName = TemplatePool.getTemplateInfo(tid)["tname"];
    var discountDisc = prizeType["info"];
    var content = "哇!" + userName + "在命中章鱼贴竟然是" + templateName + "，我还能享受"+ discountDisc + "的命中优惠哦!" + "印像派章鱼贴，不只是让我的iphone与众不同~了解更多请点击 "+CONFIG.getURL();
    var url = "http://shuo.douban.com/!service/share?" + "name=" + encodeURI(content) + "&image=" + pic;
    window.open(url, "_blank", "width=500,height=300, resizable=yes");
});

//shre to qzone
content.find('.m-share .u-qq').bind("click", function(){
    var pic = "http://st1.yxp.126.net/img/action/120824/weibopic.jpg";
   	var templateName = TemplatePool.getTemplateInfo(tid)["tname"];
    var discountDisc = prizeType["info"];
    var url = encodeURIComponent(CONFIG.getURL());
    var title = encodeURI("印像派章鱼贴");
    var content = encodeURI("哇!" + userName + "在命中章鱼贴竟然是" + templateName + "，我还能享受"+ discountDisc + "的命中优惠哦!" + "印像派章鱼贴，不只是让我的iphone与众不同~了解更多请点击 "+ CONFIG.getURL());
    var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + "url=" + url  + "&title=" + title + "&pics=" + encodeURIComponent(pic) + "&summary=" + content;
    window.open(url, "_blank", "width=500,height=300, resizable=yes");
});

//share to renren
content.find('.m-share .u-renren').bind("click", function(){
    var pic = "http://st1.yxp.126.net/img/action/120824/weibopic.jpg";
    var templateName = TemplatePool.getTemplateInfo(tid)["tname"];
    var discountDisc = prizeType["info"];
    var content = "哇!" + userName + "在命中章鱼贴竟然是" + templateName + "，我还能享受"+ discountDisc + "的命中优惠哦!" + "印像派章鱼贴，不只是让我的iphone与众不同~了解更多请点击 "+CONFIG.getURL();
    var url = "http://widget.renren.com/dialog/share?" + "resourceUrl=" + encodeURIComponent(CONFIG.getURL()) + "&srcUrl" + encodeURIComponent(CONFIG.getURL()) + "&title=" + encodeURI(content) + "&pic=" + pic;
    window.open(url, "_blank", "width=500,height=300, resizable=yes");
});
}

