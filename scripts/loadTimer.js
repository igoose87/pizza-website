var before_loadtime = new Date().getTime();
window.onload = Pageloadtime;
function Pageloadtime() {
    var aftr_loadtime = new Date().getTime();
    // Time calculating in seconds
    pgloadtime = (aftr_loadtime - before_loadtime) / 1000

    document.getElementById("loadtime").innerHTML = "<font color='#F1F2F1'><b>" + pgloadtime + "</b></font>";
}