$(function () {
//    $("#beolvas").on("click", kiir);
//ha a beviteli mező taratlma változik--> küldjünk kérést a szervernek
    $("#vnev").on("keyup", be);
//küldés:milyen karakterek vannak leütve már a beviteli mezőbe
//a szerver visszaküldi, azokat a vároneveket, amelyek a megadott betűkkel kezdődnek
//ezek kiírása <p>
});

var varosok = [];

function be() {
//    console.log($("#vnev").val());
    $.ajax({
        type: "GET",
        url: "feldolgoz.php?nev="+$("#vnev").val(),
        success: function (result) {
//            console.log(result);
            varosok = JSON.parse(result);
            console.log(varosok);
//            kiir();
        },
        error: function () {
            alert("Hiba az adatok betöltésekor!")
        }
    });
}