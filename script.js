const win = document.querySelector.bind(document);
const body = win("body");
const curriculumIdWins = body.innerHTML.split("curriculumId")[1].split(",")[0];
const curriculumIdNumber = curriculumIdWins.match(/\d+/g);

fetch(
  "https://mydtu.duytan.edu.vn/sites/index.aspx?p=home_semester&functionid=35"
)
  .then((res) => res.text())
  .then((data) => {
    const key = data.split("var key = ")[1].split(";")[0];
    const iv = data.split("var iv = ")[1].split(";")[0];
    const para = data.split("var para = ")[1].split(";")[0];
    // get all number in para
    const paraNumber = para.match(/\d+/g);
    // save to local storage
    localStorage.setItem("key", key);
    localStorage.setItem("iv", iv);
    localStorage.setItem("mssv", paraNumber);
  });

 const mssv = localStorage.getItem("mssv");
 let keyWin = localStorage.getItem("key");
 let ivWin = localStorage.getItem("iv");
// remove " from key and iv
keyWin = keyWin.replace(/"/g, "");

let form =
  '<div class="tab-content"><div><div id="loadingAddClick" style="position: relative;" class="nhapmadk vn"><div class="content cont-vn"><div class="form-group"><div class="col-sm-2 control-label">Mã Đăng ký</div><div class="col-sm-2"><input name="ctl00\\$PlaceHolderContentArea\\$ctl00\\$ctl01\\$txt_ClassID" type="text" id="ctl00_PlaceHolderContentArea_ctl00_ctl01_txt_ClassID" class="txt txt-vn" mathfirstmark="true"><input type="hidden" name="ctl00\\$PlaceHolderContentArea\\$ctl00\\$ctl01\\$hidClassRegCode" id="ctl00_PlaceHolderContentArea_ctl00_ctl01_hidClassRegCode"></div><div class="col-sm-2 control-label" style="text-align: left; width: 100px">Mã xác nhận</div><div class="col-sm-2"><input name="ctl00\\$PlaceHolderContentArea\\$ctl00\\$ctl01\\$txtCaptchar" type="text" id="ctl00_PlaceHolderContentArea_ctl00_ctl01_txtCaptchar" class="txt txt-vn"></div><div class="col-sm-2"><div id="loadCaptchaHere"><title></title><script>document.getElementById("imgCapt").src = "../Modules/portal/JpegImage.aspx?" + new Date().getTime();</script><form name="form1" method="post" action="./LoadCaptcha.aspx?cdate=14112021152142" id="form1"><div><input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="ERW3KWJFystTxliiccYDmsi9Gd97yJoWRz+M/4ZAv1p2ZeraFoNIRPiNUdJ42QpdveNwM3+NsZWfmujToDmTB8z3iWnG4Hu2WEYqFb+Z2+PVUqL6kPU/EJwn5Ow="></div><div>\\t<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="0E6543BE"></div><div><img src="../Modules/portal/JpegImage.aspx?1639470102678" id="imgCapt" width="100%"></div></form></div></div></div><div class="form-group"><div class="col-sm-10" style="text-align: center"><input class="btn-dangky btn-dangky-vn" type="button" name="btnadd" onclick="Add_Click(\'Bạn có muốn Đăng ký Lớp này?        \',74,76,'+mssv+',\''+curriculumIdNumber[0]+'    \',\'AMINHAKEYTEM32NYTES1234567891234    \',\'7061737323313233    \')" value=""></div></div><a href="#" class="help help-vn">Hướng dẫn đăng ký</a></div><div align="center" id="idloading" class="loading"><img src="../images/ajax-loader.gif">Đang xử lý...</div></div>\n  <div style="position: relative;" id="displayThongBao" class="errormes"></div>\n  </div></div>';

win(".conner-top-right").insertAdjacentHTML("beforebegin", form);
win(".conner-top-right").style.height = "auto";
win(".errormes:not(#displayThongBao)").style.display = "none";
LoadCaptcha();