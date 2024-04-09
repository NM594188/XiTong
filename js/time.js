<!--
todayDate = new Date();
date = todayDate.getDate();
month= todayDate.getMonth() +1;
year= todayDate.getYear();
document.write(" ")
if(navigator.appName == "Netscape")
{
document.write(1900+year);
document.write("年");
document.write(month);
document.write("月");
document.write(date);
document.write("日");
}
if(navigator.appVersion.indexOf("MSIE") != -1)
{
document.write(year);
document.write("年");
document.write(month);
document.write("月");
document.write(date);
document.write("日");
document.write(" ");
}
//--> 