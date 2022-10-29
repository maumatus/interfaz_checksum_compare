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

//Definimos variables
const dropAreaEntrada = document.getElementById('drop-area-entrada');
const dropAreaSalida = document.getElementById('drop-area-salida');

//Entrada
dropAreaEntrada.addEventListener('dragover', (event) => {
  event.stopPropagation();
  event.preventDefault();
  // Style the drag-and-drop as a "copy file" operation.
  event.dataTransfer.dropEffect = 'copy';
});

dropAreaEntrada.addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    let fileList = event.dataTransfer.files;
    //console.log(fileList[0].type);
        if (fileList[0].type === 'text/plain') {
            //Modificamos estilos CSS cuando carga archivo
            event.target.classList.remove('drop-dashed');
            event.target.classList.add('drop');
            console.log("Tipo de archivo correcto")
            console.log(fileList);
        } else {
            console.log("tipo de archivo no soportado")
        };
});

//Salida
dropAreaSalida.addEventListener('dragover', (event) => {
  event.stopPropagation();
  event.preventDefault();
  // Style the drag-and-drop as a "copy file" operation.
  event.dataTransfer.dropEffect = 'copy';
});

dropAreaSalida.addEventListener('drop', (event) => {
  event.stopPropagation();
  event.preventDefault();
  let fileList = event.dataTransfer.files;
  //console.log(fileList[0].type);
  if (fileList[0].type === 'text/plain') {
      console.log("Tipo de archivo correcto")
      console.log(fileList);
  } else {
      console.log("tipo de archivo no soportado")
  }
});
  

