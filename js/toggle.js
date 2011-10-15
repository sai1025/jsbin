function toggle(elementId)
{
    var elem = document.getElementById(elementId);
    var text = document.getElementById("toggleButton");

    if (elem.style.display == "block")
    {
        elem.style.display = "none";
        text.innerHTML = "Show";
    }
    else
    {
        elem.style.display = "block";
        text.innerHTML = "Hide";
    }
}