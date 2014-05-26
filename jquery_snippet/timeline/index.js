/**
 * Created with JetBrains WebStorm.
 * User: yougen
 * Date: 14-5-26
 * Time: 下午10:35
 * To change this template use File | Settings | File Templates.
 */
function serialData(data){
    var list = {};
    $.each(data, function(index, val){
       var date = new Date(val.date);
       var year = date.getFullYear();
       var month = date.getMonth() + 1;

       list[year] || (list[year] = {});
       list[year][month] || (list[year][month] = {});

       var item = val;
       item.year = year;
       item.month = month;
       item.like_format = item.like < 10000 ? item.like : (item.like / 10000)
       list[year][month].push(item);
    });
}