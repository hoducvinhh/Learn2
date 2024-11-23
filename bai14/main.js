// thuộc tính .style cho phép bạn truy cập và thay đổi các thuộc tính CSS của một phần từ HTML
//let heading = document.querySelector("h1");
// thay đổi style của h1 trên giao diện
// heading.style.backgroundColor = "cyan";
// heading.style.fontSize = "46px";
// heading.style.color = "red";

//cách viết gọn nhiều thuộc tính
// Object.assign(heading.style,)
// {
//     backgroundColor: "cyan"
// }

//======================================================================
//JS DOM_ classlist javascript _ Quản lý Class CSS _ add, remove, toggle, replace, contains
// láy phần tử cần tương tác
// let element = document.getElementByid("myElement");

//them một lớp mới vào phần tử
//element.classList.add("newClass");
//

//kiểm tra xem phần tử có chứa lớp cụ thể không
//console.log(element.classList.contains("myClass"));

//xóa một lớp khỏi phần tử
//element.classList.remove("myClass");


//thay thế một lớp cũ bằng một lớp mơi
//element.classList.replace("newClass", "abc");

//nếu lớp đã tồn tại loại bỏ nó, nếu không, thêm lớp vào phần tử
//element.classList.toggle("toggleClass");

//xem các class trong phần tử
//console.log(element.classList);


//========================================================================
// JS DOMTutorial Truy cập Parent, Child, and Siblings - Truy Cập Phần Tử Cha, Con và Anh Em Js

//truy cập vào Parent, Child and Siblings
//Truy cập vào các phần tử cha con anh em
//Parent : cha
//Child : Con
//Sibling: anh em ruột
//Ví dụ: 
//let elm = document.querySelector(".hero_content");
// truy cập vào phần tử cha(phần tử cha là duy nhất)
//console.log(elm.parentElement);

//đổi màu nền của thẻ cha
//lm.parentElement.style.backgroundColor = "red";


//truy cập vào phần tử con (phần tử con có thể có nhiều)
//console.log(elm.children)

//nextElementSibling: chọn phần tử anh em kế tiếp
//console.log(elm.children[1].nextSibling);

//previousElementSibling: chọn phần tử anh em trước đó
//console.log(eml.children[1].previousElementSibling);


//==============================================================================
//JS DOMTutorial Tạo và Thêm Phần Tử Mới Vào DOM Với Append và Prepend
//append, prepend
//phương thức dùng để thêm một hoặc nhiều phần tử con vào trong phần tử cha
//append: thêm vào cuối
//prepend: thêm vào đầu

//b1: create element
//cú phám: document.createElement('elêmnt') //element: tên thẻ cần tạo
//const newImg = document.createElement("img");

//kiểm tra toàn bộ thuộc tính và phương thức newImg
//console.dir(newImg);

//b2: set attribute
//newImg.setAttribute("src", " ");

//b3: thêm phần tử cào cuối phần tử cha
//document.body.append(newImg);


