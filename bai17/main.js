const btn = document.querySelector("#btn");

btn.addEventListener("click", function()
{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    const colorCode = `rgb(${r},${g},${b})`;
    //thay doi mau nen cua body
    //document.body.style.backgroundColor = "rgb(0,0,0)";
    document.body.style.backgroundColor = `${colorCode}`;


    const h1 = document.querySelector("#title");
    h1.textContent = colorCode;
});

