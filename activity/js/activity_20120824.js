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
                {tid:'16108',tname:'zip dowm ',tinfo:'啦啦啦啦啦啦啦啦啦', tpic:"hhttp://st2.yxp.126.net/img2012/page/1601/te116108/116616.jpg"},
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
        }
    }
})();

var CONFIG = (function(){
    var URL = "http://yxp.163.com/act/20120824.html";
    var content = "获取命中章鱼贴";
    return {
        getURL:function(){
            return URL;
        },
        getContent:function(){
            return content;
        }
    }
})();

var userName="";
var templateName="";
var discount="";
var templateDesc="";
var tid="16054";

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
                        background:"transparent",
                        top:"20%",
                        left:"25%"
                },
               });
}

function removePopListener(content) {
    content.find("#closeBtn").click(function(){
             $.unblockUI();
            }
         );
}

function showBinggoWin(){
    resetBlockUI();
    var content = $('<div class="g-binggo">\
                      <div class="m-title">\
                          <button id="closeBtn" class="closeWindow" style="padding-left:480px;" hidefocus></button>\
                      </div>\
                      <div class="m-snapshot">\
                          <img id="templatePic" src="" alt="章鱼贴产品图" style="border:none;width:220px;height:220px"/>\
                      </div>\
                      <div class="m-content">\
                          <div class="templateInfo">\
                              <p style="font-weight:normal">恭喜<span id="userName"></span>获得命中优惠</p>\
                              <p id="templateName">模板名</p>\
                              <p id="templateDesc" style="font-weight:normal">模板内容</p>\
                              <p>章鱼贴<span id="discount"></span>折</p>\
                            <span class="action"><button class="btn" value="领取优惠>>">领取优惠>></button></span>\
                          </div>\
                          <div class="m-share" style="padding-left:10px">\
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
    setTemplateInfo(content);
    (function(){
        content.find('.btn').click(function(){
          showCouponWin();  
        })
    })();
    showPopUp(content, '564px', '435px');
}

function setTemplateInfo(content) {
    templateName = TemplatePool.getTemplateInfo(tid)["tname"];
    templateDesc = TemplatePool.getTemplateInfo(tid)["tinfo"];
    templatePic = TemplatePool.getTemplateInfo(tid)["tpic"];
    content.find('#userName').text(userName);
    content.find('#templateName').text(templateName);
    content.find('#discount').text(discount);
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
                      <div class="m-content" style="padding-left:30px">\
                          <a style="text-decoration:underline;color:#14a4ac">进入邮箱查看使用方法>></a>\
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

function buyProduct(){
    window.open("http://yxp.163.com/store/goods/9/119/1101/", "_blank");
}

function showInteractiveWin() {
    resetBlockUI();
    var content = $('<div class="g-interactive">\
                      <div class="m-title">\
                          <button id="closeBtn" class="closeWindow" hidefocus></button>\
                      </div>\
                      <div class="m-content">\
                          <input type="text" class="u-input"/>\
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
        var name = content.find('.u-input').val();
        setUserName(name);
        console.log("userName is: " +userName);
        showBinggoWin();
    });
}

function setUserName(name) {
    userName = name;
}

function showRules(){
    showRuleWin();
}

function getAction(){
    $.post("http://yxp.163.com/activity.do?action=act20120824Play",function(data){
        alert(data);
    }._$bind(this));
}

//share to neteaase weibo
$('.m-share .u-netease').bind("click", function(){
    var pic = TemplatePool.getTemplateInfo(tid)["tpic"];
    var url = "http://t.163.com/article/user/checkLogin.do?"+"link="+escape(CONFIG.getURL())+"&info="+encodeURI(CONFIG.getContent()) + "&pic=" + pic;
    window.open(url, "_blank", "width=500,height=300, resizable=yes");
})

//share to sina weibo
$('.m-share .u-sina').bind("click", function(){
    var pic = TemplatePool.getTemplateInfo(tid)["tpic"];
    var url="http://v.t.sina.com.cn/share/share.php?"+"url="+escape(CONFIG.getURL())+"&title="+encodeURI(CONFIG.getContent()) + "&pic=" + pic;
    window.open(url, "_blank", "width=500,height=300, resizable=yes");
});

//share to douban
$('.m-share .u-douban').bind("click", function(){
    var pic = TemplatePool.getTemplateInfo(tid)["tpic"];
    var url = "http://shuo.douban.com/!service/share?" + "href=" + escape(CONFIG.getURL()) + "&name=" + encodeURI(CONFIG.getContent()) + "&image=" + pic;
    window.open(url, "_blank", "width=500,height=300, resizable=yes");
});

//shre to qzone
$('.m-share .u-qq').bind("click", function(){
    var pic = TemplatePool.getTemplateInfo(tid)["tpic"];
    var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + "url=" + escape(CONFIG.getURL()) + "&title=" + encodeURI(CONFIG.getContent())+ "&pics=" + pic;
    window.open(url, "_blank", "width=500,height=300, resizable=yes");
});

//share to renren
$('.m-share .u-renren').bind("click", function(){
    var pic = TemplatePool.getTemplateInfo(tid)["tpic"];
    var url = "http://share.renren.com/share/buttonshare/post/1004?" + "url=" + escape(CONFIG.getURL()) + "&content=" + encodeURI(CONFIG.getContent()) + "&pic=" + pic;
    window.open(url, "_blank", "width=500,height=300, resizable=yes");
});
