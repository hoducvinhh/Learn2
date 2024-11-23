// ham thay doi ngau nhien gia tri mau r g b
function radomColor()
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// //chon phan tu button
 const btnList = document.querySelectorAll(".btn");
// // moi lan click thay doi ma nen va mau chu cua button
// for (let btn of btnList) {
//     if (btn instanceof HTMLElement) {
//         btn.addEventListener("click", function () {
//             btn.style.backgroundColor = radomColor();
//             btn.style.color = radomColor();
//         });
//     }
// }


// // chon phan tu co class la title

 const titles = document.querySelectorAll("#title");

// for (let title of titles) {
//     if (title instanceof HTMLElement) {
//         title.addEventListener("click", function () {
//             title.style.backgroundColor = radomColor();
//             title.style.color = radomColor();
//         });
//     }
// }

//de tham chieu den phan tu dang duoc click
function changeColor()
{
    this.style.backgroundColor = radomColor();
    this.style.color = radomColor();
}

//code phis tren viet gon laij nhu sau
//moi lan click thay doi mau nen va mau chu cua button

for(let btn of btnList)
{
    btn.addEventListener("click", changeColor);
}

for(let title of titles)
    {
        title.addEventListener("click", changeColor);
    }
    

