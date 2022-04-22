'use scrict';
if(window.File && window.FileReader && window.FileList){
    alert("API's soportadas");
}else{
    alert("API's no soportadas");
}

function handleFileSelected(e){
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e){
        var src = document.createAttribute("src");
        src.value = e.target.result;
        video.setAttributeNode(src);
        alert("Video cargando..."); 
    };
    reader.readAsDataURL(file);
}
document.getElementById("archivoVideo").addEventListener("change", handleFileSelected, false);