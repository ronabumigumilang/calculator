var tombol = document.querySelector(".container-tombol");

tombol.addEventListener("click", function(e) {
    // alert("Halo")
    var tombolClick = e.target;
    var nilaiTombol = tombolClick.innerText;

    // alert(nilaiTombol)
    if(nilaiTombol == "C") {
        layar.value = ""
    } 
    else if(nilaiTombol == "<") {
        layar.value = layar.value.slice(0, -1)
    }
    else if(nilaiTombol == "=") {
        layar.value = eval(layar.value)
    }
    else { 
        layar.value = layar.value + nilaiTombol;
    }

})