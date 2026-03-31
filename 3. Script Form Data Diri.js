document.getElementById("dataForm").addEventListener("submit", function(e){
    e.preventDefault();
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let alamat = document.getElementById("alamat").value;

    if(nama === "" || email === "" || alamat === ""){
        alert("Semua data harus diisi!");
    } else {

        document.getElementById("hasil").innerHTML =
        "<h3>Data yang dimasukkan:</h3>" +
        "<p>Nama: " + nama + "</p>" +
        "<p>Email: " + email + "</p>" +
        "<p>Alamat: " + alamat + "</p>";
    }
});