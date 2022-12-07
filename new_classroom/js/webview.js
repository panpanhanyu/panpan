
setTimeout(
  ()=>{

    $(".t_join_new_class").click(function(e){
       classOrder_id = getCaption(e.currentTarget.href)
      //  location.href="../new_classroom.html";
      //  window.location.href="new_classroom.html";
         const {ipcRenderer} = require('electron') 
      
      ipcRenderer.sendToHost(classOrder_id)//向webview所在页面的进程传达消息
    })
    // $(".aui-btn").click(function(){
     
    //   const teacher_id=getCookie("teacher_id");
    //   const classroomid=getCookie("classroomid");
    //   //嵌套页面
    //   const {ipcRenderer} = require('electron') 
      
    //   ipcRenderer.sendToHost('pong')//向webview所在页面的进程传达消息
      
    // })


 
  },1000
)

function getCaption(obj){
  var index=obj.lastIndexOf("\/");
  obj=obj.substring(index+1,obj.length);
//  console.log(obj);
  return obj;
}

// function getCookie(c_name) {
//   if(document.cookie.length > 0) {
//     c_start = document.cookie.indexOf(c_name + "=");//获取字符串的起点
//     if(c_start != -1) {
//       c_start = c_start + c_name.length + 1;//获取值的起点
//       c_end = document.cookie.indexOf(";", c_start);//获取结尾处
//       if(c_end == -1) c_end = document.cookie.length;//如果是最后一个，结尾就是cookie字符串的结尾
//       return decodeURI(document.cookie.substring(c_start, c_end));//截取字符串返回
//     }
//   }
//   return "";
// }
