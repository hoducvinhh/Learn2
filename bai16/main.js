//https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png

//chon phan tu cha
const container = document.getElementById("container");

let baseUrl = "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/"

// //tao phan tu con moi
// const newImg = document.createElement("img");
// newImg.src = `${baseUrl}1.png`;

// //them phan tu con vao container
// container.appendChild(newImg);

//bai toan2

// for(let i=1;i<152;i++)
// {
//     const newImg = document.createElement("img");
//     newImg.src = `${baseUrl}${i}.png`;
//     container.appendChild(newImg);
// }

//bai3

for(let i=1;i<152;i++)
{
    //tao 1 khoi div de chua phan tu img va span
    const newDiv = document.createElement("div");

    //them div vao cuoi container
    //va lay node moi tao ra gan vao parentDiv

    const parentDiv = container.appendChild(newDiv);

   // tao phan tu con, them vao trong parentDiv

    const newImg = document.createElement("img");
    newImg.src = `${baseUrl}${i}.png`;

    //them vao trong khoi parentDiv
    parentDiv.appendChild(newImg);

    //them the span so thu tu vao trong parentDiv
    const newSpan = document.createElement("span");
    newSpan.innerText = `#${i}`;
    parentDiv.appendChild(newSpan);

}
