//template ids map
var TemplatePool = (function(){
    var pool = [
                {tid:'16671',tname:'�հ�ģ��',tinfo:'ӵ���޾���������', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116671/116706.jpg"},
                //����
                {tid:'16076',tname:'����',tinfo:'�ÿɰ��ÿɰ��ÿɰ���', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116076/116554.jpg"},
                {tid:'16107',tname:'����ɰ�',tinfo:'��������������', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116107/116620.jpg"},
                {tid:'16106',tname:'Сʨ����',tinfo:'����������', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116106/116624.jpg"},
                {tid:'16063',tname:'��Ϸ�ŵ�С���',tinfo:'��һ������ͯ��Ŷ', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116063/116542.jpg"},
                {tid:'16077',tname:'С�˹�',tinfo:'Ҳ����ȥС�˹��ɣ�', tpic:"http://st2.yxp.126.net/img2012/page/1601/te116077/116557.jpg"},
                {tid:'16155',tname:'�ҵĽ���',tinfo:'���質�����Ի����������� ', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116155/116585.jpg"},
                {tid:'16117',tname:'���С����',tinfo:'����~Χ��Χ��Χ��', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116117/116344.jpg"},
                {tid:'16105',tname:'��������',tinfo:'��������', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116105/116628.jpg"},
                {tid:'16101',tname:'���������� ',tinfo:'����Ľ', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116101/116515.jpg"},
                //����
                {tid:'16047',tname:'������ ',tinfo:'�������ӣ�����', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116047/116652.jpg"},
                {tid:'16111',tname:'�˻�һ��� ',tinfo:'���û�ٳ��˻��ɣ�', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116111/116530.jpg"},
                {tid:'16058',tname:'���ܰ��� ',tinfo:'��������', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116058/116518.jpg"},
                {tid:'16050',tname:'�����İ��� ',tinfo:'���۷��۵�', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116050/116539.jpg"},
                {tid:'16079',tname:'������ͷ ',tinfo:'�һ�����俪', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116079/116565.jpg"},
                {tid:'16064',tname:'sweet heart ',tinfo:'������ͷ', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116064/116545.jpg"},
                {tid:'16116',tname:'��ס�� ',tinfo:'����������', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116116/116656.jpg"},
                //Ȥͼ
                {tid:'16112',tname:'pocker ass',tinfo:'���ͣ��ؿ�ζ��ϲ��', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116112/116527.jpg"},
                {tid:'16113',tname:'�������� ',tinfo:'Ŀ��ת���˰ɣ�', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116113/116524.jpg"},
                {tid:'16054',tname:'��תľ�� ',tinfo:'ɫ�ʰ�쵵�ͯ������', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116054/116632.jpg"},
                {tid:'16108',tname:'zip dowm ',tinfo:'������������������', tpic:"hhttp://st2.yxp.126.net/img2012/page/1601/te116108/116616.jpg"},
                {tid:'16078',tname:'������ ',tinfo:'������������������', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116078/116561.jpg"},
                {tid:'16053',tname:'�ɿ������� ',tinfo:'������óԣ�', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116053/116636.jpg"},
                {tid:'16052',tname:'����ĳ���¹ ',tinfo:'Ϊʲô�ҵĲ�����ô����', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116052/116640.jpg"},
                {tid:'16048',tname:'С������� ',tinfo:'��ô���ˣ�', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116048/116644.jpg"},
                //У԰
                {tid:'16118',tname:'ͯ��ĵ��� ',tinfo:'�����ϵĻ��仹��˭��', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116118/116593.jpg"},
                {tid:'16114',tname:'��Щ�� ',tinfo:'ʱ���������ȥ�ˣ�', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116114/116521.jpg"},
                {tid:'16067',tname:'��ʹ ',tinfo:'����Ÿ�˭�ۣ�', tpic:"http://st2.yxp.126.net/img2012/page/1601/te116067/116548.jpg"},
                {tid:'16109',tname:'��������� ',tinfo:'Խ��Խ��', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116109/116536.jpg"},
                {tid:'16103',tname:'���ﴰ�� ',tinfo:'���������÷羰', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116103/116512.jpg"},
                //�״�
                {tid:'16068',tname:'���� ',tinfo:'������', tpic:"http://st1.yxp.126.net/img2012/page/1601/te116068/116551.jpg"},
                {tid:'16038',tname:'���ϴ��� ',tinfo:'������Ŷ', tpic:"http://st3.yxp.126.net/img2012/page/1601/te116038/116648.jpg"},
                {tid:'16110',tname:'ħ�� ',tinfo:'˭������������Ů�ӣ�', tpic:"http://st2.yxp.126.net/img2012/page/1601/te116110/116533.jpg"},
                {tid:'16115',tname:'��������super star ',tinfo:'��������һ�ٳ���', tpic:"http://st4.yxp.126.net/img2012/page/1601/te116115/116509.jpg"}
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
    var content = "��ȡ����������";
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
                          <img id="templatePic" src="" alt="��������Ʒͼ" style="border:none;width:220px;height:220px"/>\
                      </div>\
                      <div class="m-content">\
                          <div class="templateInfo">\
                              <p style="font-weight:normal">��ϲ<span id="userName"></span>��������Ż�</p>\
                              <p id="templateName">ģ����</p>\
                              <p id="templateDesc" style="font-weight:normal">ģ������</p>\
                              <p>������<span id="discount"></span>��</p>\
                            <span class="action"><button class="btn" value="��ȡ�Ż�>>">��ȡ�Ż�>></button></span>\
                          </div>\
                          <div class="m-share" style="padding-left:10px">\
                              <p>������������������</p>\
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
                          <a style="text-decoration:underline;color:#14a4ac">��������鿴ʹ�÷���>></a>\
                          <button class="btn">���Ϲ���>></button>\
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
                          <button class="btn">ȷ��>></button>\
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
