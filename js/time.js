<!--
todayDate = new Date();
date = todayDate.getDate();
month= todayDate.getMonth() +1;
year= todayDate.getYear();
document.write(" ")
if(navigator.appName == "Netscape")
{
document.write(1900+year);
document.write("Äê");
document.write(month);
document.write("ÔÂ");
document.write(date);
document.write("ÈÕ");
}
if(navigator.appVersion.indexOf("MSIE") != -1)
{
document.write(year);
document.write("Äê");
document.write(month);
document.write("ÔÂ");
document.write(date);
document.write("ÈÕ");
document.write(" ");
}
//--> 
