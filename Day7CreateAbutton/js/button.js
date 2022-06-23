var btn = document.createElement("button");
btn.id = "btn";
btn.innerHTML = "0";
document.body.appendChild(btn);
var click_count = 0;
btn.onclick = function () {
    click_count++;
    btn.innerHTML = click_count;
};
