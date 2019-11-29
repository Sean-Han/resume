var htmls = document.getElementsByTagName("body")[0].innerHTML

var beginIndex = 0
var maxNum = 1000
while(htmls.indexOf('$',beginIndex) > 0){
    beginIndex = htmls.indexOf('$',beginIndex)
    var endIndex = htmls.indexOf(' ',beginIndex)
    var template = htmls.substring(beginIndex,endIndex)
    var templateItems = template.substring(1).split("-")
    var domType = templateItems[0]
    var iconType = templateItems[1]
    // console.log(iconType);
    // console.log(domType ===  'i',iconType === 'icon')
    if(domType ===  'i' && iconType === 'icon'){
        var iconClass = template.substring(8)
        var htmlTemplate = "<"+domType+" class='fa fa-"+iconClass+"' aria-hidden='true' ></"+domType+">"
        htmls = htmls.replace(template,htmlTemplate)
    }

    beginIndex = endIndex
    maxNum--
    if(maxNum <= 0){
        break
    }
}

document.getElementsByTagName('body')[0].innerHTML = htmls

var lis = document.getElementsByClassName("entry-content")[0].getElementsByTagName("li")
var listItype = '<i class="fa fa-angle-right" aria-hidden="true"></i> '
for (let index = 0; index < lis.length; index++) {
    var element = lis[index];
    var inode = element.childNodes[0]
    if(inode.nodeName != 'I'){
        element.innerHTML = listItype + element.innerHTML
    }
}