let selectedColor = "black";

window.onload = function() {

    // array de cores que servirao para pintar.
    createColorPallete(['black', 'cyan', 'red', 'yellow']);

    // funcao que cria as divs que servem para armazenar as cores a serem utilizadas.
    function createColorPallete(colors) {
        let palleteBox = document.querySelector("#color-palette");
        //a cada cor inserida no array o for cria uma div filho que serao armazenadas na div com o id="color-pallete" chamada a cima.
        for (let index in colors) {
            let palleteItem = createPallteItem(colors[index]);
            palleteBox.appendChild(palleteItem);
        }
    }   
    
    // funcao que cria o quadrado estilizado que sera armazenado na div com id="color-pallete".
    function createPallteItem(color) {
        let palleteItem = document.createElement("div");
        palleteItem.style.backgroundColor = color;
        palleteItem.className = "color";
        palleteItem.addEventListener("click", handleEvintPallete);
        // se existir alguma cor com nome "black" sera atribuido a ela a class="selected".
        if (color === "black") {
            palleteItem.classList.add("selected");
        }
        return palleteItem;
    }

    // evento que ao clicar em uma cor ela recebera a class="selected".
    function handleEvintPallete(event) {
        let oldSelectedDiv = document.querySelector(".selected");
        let currentSelectedDiv = event.target;

        oldSelectedDiv.classList.remove("selected");
        currentSelectedDiv.classList.add("selected");

        selectedColor = currentSelectedDiv.style.backgroundColor;
    }

    function handlePixelClick(event) {
        let selectedPixelDiv = event.target;
        selectedPixelDiv.style.backgroundColor = selectedColor;
      }
    
    let pixelBoardDiv = document.querySelector("#pixel-board");
    pixelBoardDiv.addEventListener("click", handlePixelClick)
      
    // botao que ao ser clicado apagara todo o tabuleiro.
    let btn = document.querySelector('#clear-board');
    let pixel = document.getElementsByClassName('pixel');
    btn.addEventListener("click", function () {
        for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = "white";
        }
    })




}
