let addbtn = document.getElementById("addbtn");
let inputvalue = document.getElementById("inputvalue");
let labeltask = document.getElementById("labeltask");
addbtn.addEventListener("click", function (e) {
    e.preventDefault();
    let input = inputvalue.value;


    if (input == "") {
        alert("please inter data !")
        return;
    }

    let newdiv = document.createElement("div");
    newdiv.textContent = "🤗 :" + input + "";
    newdiv.style.padding = "20px 0px";
    newdiv.style.width = "50%";
    newdiv.style.alignItems = "center"
    newdiv.style.backgroundColor = "rgb(197 233 233 / 46%)";
    newdiv.style.margin = "30px auto";
    newdiv.style.gap = "30px"
    labeltask.append(newdiv);
    inputvalue.value = "";
});