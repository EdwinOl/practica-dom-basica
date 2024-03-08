const form1 = document.querySelector('#form1')
const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

btn.addEventListener('click', btnOnclick)

function btnOnclick(event){
    //Para que no se actualice el formulario y se borre el resultado: event.preventDefault()
    event.preventDefault()

    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs
}




/*
h1.innerHTML = 'Hola '
h1.innerText = 'Hola <br> feo'
*/
//MOSTRAR EL NOMBRE DE LA ETIQUETA
//console.log(h1.getAttribute('class'));
//CAMBIAR EL NOMBRE DE LA ETIQUETA
//h1.setAttribute('class', 'rojo')

//AGREGAR UNA CLASE A UNA ETIQUETA
//h1.classList.add('rojo')
//REMOVER UNA CLASE A UNA ETIQUETA
//h1.classList.remove('verde')

//CREAR UN ELEMENTO DESDE CERO
//const img = document.createElement('img')
//img.setAttribute('src', 'https://i.ytimg.com/vi/zUMhYjWbo4A/maxresdefault.jpg')
//console.log(img)

//parrafo2.innerHTML = ''
//parrafo2.append(img)
