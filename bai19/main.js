// chon tat ca cac phan tu co class panel
const panels = document.querySelectorAll(".panel");
//xuat man hinh
console.log(panels);

//duyet tung phan tu trong danh sach panels

panels.forEach((item)=>{
    console.log(item);
    //lang nghe su kien click

    item.addEventListener("click", ()=>{
        // xoa active cua cac panel khac di
        removeActive();
        //them class active cho panel duoc click
        item.classList.add("active");

    });
});

function removeActive()
{
    //duyet tung phan tu trong danh sach panels
    panels.forEach(item =>{
        // xoa class active
        item.classList.remove("active");
    })
}

