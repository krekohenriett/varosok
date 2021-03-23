$(function () {
//    $("#beolvas").on("click", kiir);
//ha a beviteli mező taratlma változik--> küldjünk kérést a szervernek
    $("#vnev").on("keyup", be);
//küldés:milyen karakterek vannak leütve már a beviteli mezőbe
//a szerver visszaküldi, azokat a vároneveket, amelyek a megadott betűkkel kezdődnek
//ezek kiírása <p>
    $("article").delegate("th", "click",rendezes);
    
    $("article").delegate("th", "mouseenter", rarak);
    $("article").delegate("th", "mouseenter", levesz);
    
});

var varosok = [];

function rarak(){
    $(this).addClass("fejlec");
}

function levesz(){
    $(this).removeClass("fejlec");

}

function be() {
//    console.log($("#vnev").val());
    $.ajax({
        type: "GET",
        url: "feldolgoz.php?nev="+$("#vnev").val(),
        success: function (result) {
//            console.log(result);
            varosok = JSON.parse(result);
//            kiir();
            console.log(varosok);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok betöltésekor!")
        }
    });
}

function kiir(){
    var txt="<table><tr><th id='nev'>Városnév</th><th id='megye'>Megye</th><th id='jaras'>Járás</th><th id='torol'>Töröl</th></tr>";
    for (var i = 0; i < varosok.length; i++) {
        txt+="<tr><td>"+varosok[i].nev+"</td><td>"+varosok[i].megye+"</td><td>"+varosok[i].jaras+"</td><td><button id='torol'>Töröl</button></td></tr>";
    
    txt+="</table>";
    $("article").html(txt);
    
    txt="<select>";
    for (var i = 0; i < varosok.length; i++) {
        txt+="<option>"+varosok[i].nev+"</option>";
    }
    txt+="</select>";
    $("#legordulo").html(txt);
    }
}

var irany = false;
function rendezes(){
//    console.log("Rendez");
    console.log($(this).attr("id"));
    var ez = $(this).attr("id");
    
//    if (ez ==="id") {
//         varosok.sort(function(a, b){
//        if (irany) {
//           return Number=(a[ez])-Number (b);
//        }else{
//            return Number=(b[ez])-Number (a);
//          
//        });
//    }else{
//        
//    }
    varosok.sort(function(a, b){
        if (irany) {
           return Number(a[ez]>b[ez])-0.5; 
        }else{
            return Number(a[ez]<b[ez])-0.5; 
          
        }
        
    });
    
    irany =!irany;
    kiir();
}