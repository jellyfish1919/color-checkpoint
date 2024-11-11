// // console.log("hello")
// document.addEventListener('DOMcontentloaded', function(){
//     const btncolor =document.getElementById("change-color-btn");
//     const divcolor =document.getElementById("color-box");
//     // console.log(btncolor)
//     function getrandomcolor(){
//         return '#' + Math.random().toString(16).slice(-6);
//     }
//     btncolor.addEventListener('click', function(){
//     divcolor.style.backgroundColor =getrandomcolor()
//     })
//     btncolor.onclick = function(){
//         divcolor.style.backgroundColor =getrandomcolor()
//     }
    
// })


document.addEventListener('DOMContentLoaded', function() {
    const btncolor = document.getElementById("change-color-btn");
    const divcolor = document.getElementById("color-box");

    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    btncolor.addEventListener('click', function() {
        divcolor.style.backgroundColor = getRandomColor();
    });
});
