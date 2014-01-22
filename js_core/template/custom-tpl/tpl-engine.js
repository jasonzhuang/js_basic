/**
 * Created with JetBrains WebStorm.
 * User: yougen.zhuangyg
 * Date: 14-1-22
 * Time: ÏÂÎç1:50
 * To change this template use File | Settings | File Templates.
 */
// http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line

var TemplateEngine = function(html, options) {
    var re = /<%([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0;
    var add = function(line, js) {
        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
    }
    while(match = re.exec(html)) {
        add(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(html.substr(cursor, html.length - cursor));
    code += 'return r.join("");';
    console.log(code);
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
}