window.onload = function(){
    createGrid(16)
};

function buttonpress()  {
    var input = parseInt(prompt("How many squares do you want"));

    if  (input < 1 || input > 100)  {
        alert("Please input a number from 1 to 100.");
    } else  {
        document.getElementById("squares").textContent = "";
        createGrid(input);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function createGrid(num)    {
    const sq = document.getElementById("squares");
    
    const len = "" + window.width/num + "px";

    for (let i = 0; i < num; i++)   {
        const biggerdic = document.createElement("div");
        biggerdic.style.width = window.innerWidth + "px";
        biggerdic.style.height = window.innerWidth + "px";

    
        for (let j = 0; j < num; j++)   {
            const divc = document.createElement("div");
            divc.style.width = len;
            divc.style.height = (window.innerWidth/num).toString() + "px";
            divc.style.border = '0px';
            // divc.textContent = "red";
            divc.style.flex = 1;
            divc.style.margin = '0';
            divc.style.padding = '0';

            divc.addEventListener("mouseover", () => {
                divc.style.backgroundColor = getRandomColor();
            })
            biggerdic.appendChild(divc)
        }
        sq.append(biggerdic);
    }
}