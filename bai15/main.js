//xac dinh phan tu cha
let parentElm = document.querySelector("#header");
console.log(parentElm);

//tap phan tu con moi va them the p
let p_elm = document.createElement("p");

//them noi dung vao the p
p_elm.textContent = "mot con vit xoe ra hai cai canh";

//them style
p_elm.style.color = "red";

//them class cho the p_elm

p_elm.setAttribute("Class", "doan_van");


parentElm.appendChild(p_elm)