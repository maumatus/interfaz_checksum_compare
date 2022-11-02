//Implementacion selección de archivos e interactividad
//estatico por mientras, luego haremos refactor a "Server Side Rendering"
//Selectores por defecto si "Drag and Drop" no funciona
const fileSelectorA = document.getElementById('txt-a');
const fileSelectorB = document.getElementById('txt-b');

fileSelectorA.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
});

fileSelectorB.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
});
  
