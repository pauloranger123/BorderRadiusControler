    // Pegando a box laranja que onde será feita a curva
    let previewBox = document.querySelector('.cuboParaModelar'),

    // Pegando elemento para exibir pixels:
    previewNumbers = document.querySelector('[data-exibir-numeros]'),
    //Pegando os inputs onde serão passados os valores
    inputs = document.querySelectorAll('input'),
    // Um array para controlar melhor os cantos dos arrays:
    dataBorderRadius={
    'topLeft' : 0,
    'topRight' : 0,     
    'BottomLeft' : 0,
    'BottomRight' : 0,
       
    
 }

// Trabalhando em cimda do array:
 inputs.forEach(function(input){
    input.addEventListener('change', function(){
        let border = this.getAttribute('border'),
        value = this.value + `px`; 
        dataBorderRadius[border] = value;
        draw();

    });
 });

 function draw() {
    let radiusValue = `${dataBorderRadius.topLeft} ${dataBorderRadius.topRight} ${dataBorderRadius.BottomRight} ${dataBorderRadius.BottomLeft} `;
    previewBox.style.borderRadius = radiusValue;

    previewNumbers.innerHTML = `border-radius: ${radiusValue}`
 }
