//lay cac phan tu can thao tac tu Dom 
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const steps = document.querySelectorAll(".step")

let currentActive = 1; 
// khoi tao gia tri ban dau cua buoc dang hoat dong


//lang nghe su kien cho nut next
next.addEventListener("click", ()=>{
    changeStep(1); // tang buoc len 1
});

// lang nghe su kien cho nut prev
prev.addEventListener("click", ()=>{
    changeStep(-1); //giam buoc di 1
});

function changeStep(step)
{
    currentActive+=step; //thay doi gia tri currentActive

    update(); //cap nhat lai giao dien
}

update()
{
    //duyet qua cac phan tu cua danh sach steps
    steps.forEach((step,idx)=>{
        // console.log(step);
        // console.log(idx);
        if(idx<currentActive)
        {
            step.classList.add("active");
        }
        else
        {
            step.classList.remove("active");
        }
    });
    prev.disabled = currentActive ===1;
    next.disabled = currentActive ===steps.length;
}



