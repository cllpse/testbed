(function ()
{
    var link = document.createElement("link");

    link.href = "https://10.8.25.115:8080/index.css";
    link.type = "text/css";
    link.rel = "stylesheet";

    document.getElementsByTagName("head")[0].appendChild(link);
}());

(function ()
{
    var script = document.createElement("script");

    script.href = "https://10.8.25.115:8080/index.js";
    script.type = "text/javascript";

    document.getElementsByTagName("head")[0].appendChild(script);
}());
