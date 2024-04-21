var generate = document.querySelector(".generate");
var img = document.querySelector(".img");
generate.addEventListener("click",()=>
{
    if(document.querySelector(".texturl").value == "")
    {
        alert("Kindly Enter Text or URL");
    }
    else
    {
        let texturl = document.querySelector(".texturl").value;
        let apiurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${texturl}`;
        img.src=apiurl;
        document.querySelector(".conatiner").classList.add("height");
    }
});
