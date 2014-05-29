// 格式化数据
/**
 *  {
    *      2014: {
    *          2: [
    *              {
    *                  date: '2014-02-25',
    *                  year: '2014',
    *                  month: '2'
    *                  ...
    *              },
    *              // ... 同个月内若干日志
    *          ],
    *          3:[]
    *          // ... 一年内若干月份
    *      }，
    *      2013：{}
    *      // ...
    *  }
 *
 */
(function(){
     var data = serialData(sourceData);
    generateTime(data);
    generateContent(data);
})();


function serialData(data){
    var list = {};
    $.each(data, function(index, val){
       var date = new Date(val.date);
       var year = date.getFullYear();
       var month = date.getMonth() + 1;

       list[year] || (list[year] = {});
       list[year][month] || (list[year][month] = []);

       var item = val;
       item.year = year;
       item.month = month;
       item.like_format = item.like < 10000 ? item.like : (item.like / 10000)
       list[year][month].push(item);
    });
    return list;
}

// 时序菜单HTML生成
function generateTime(list){
    var html_scrubber_list = [],
        tpl_year = $("#tpl_scrubber_year").html(),
        tpl_month = $("#tpl_scrubber_month").html();
    $.each(list, function(year_key, year_list){
       var html_year = tpl_year.replace(/\{year\}/g, year_key);
       var html_month = [];
       $.each(year_list, function(month_key, month){
           html_month.unshift(tpl_month.replace(/\{month\}/g, month_key));
       });
       html_year = html_year.replace(/\{list\}/g, html_month.join(''));
       html_scrubber_list.push(html_year);
    });
    $("#scrubber").html(html_scrubber_list.join(''));
}

//日志列表HTML生成
function generateContent(list){
    var html_content_list  = [],
        tpl_year = $("#tpl_content_year").html(),
        tpl_month = $("#tpl_content_month").html(),
        tpl_item = $("#tpl_content_item").html();

    $.each(list, function(year_key, year_list){
        var html_year = tpl_year.replace(/\{year\}/g, year_key);
        var html_month = [];
        $.each(year_list, function(month_key, month_list){
            var html_item = []
            $.each(month_list, function(index, item){
                var item_html = tpl_item
                    .replace(/\{date\}/g, item.date)
                    .replace(/\{month\}/g, item.month)
                    .replace(/\{intro\}/g, item.intro)
                    .replace(/\{media\}/g, item.media)
                    .replace(/\{position\}/g, index%2 ? "right": "left");
                //该月所有数据
                html_item.push(item_html);
            });
            html_month.unshift(tpl_month.replace(/\{month\}/g,month_key).replace(/\{list\}/g, html_item.join('')));
        });
        html_year = html_year.replace(/\{list\}/g, html_month.join(''));
        html_content_list.push(html_year);
    });
    $("#content").html(html_content_list.join(''));

}