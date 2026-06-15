let form = document.querySelector('form');
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", (dets) => {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let image = document.createElement("img");
    image.setAttribute("src", inputs[0].value);

    profile.appendChild(image);
    card.append(profile);
    

    let h3 =  document.createElement("h3");
    h3.textContent = inputs[1].value;

    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;

    let p = document.createElement("p");
    p.textContent = inputs[3].value;
    
    card.append(h3);
    card.append(h5);
    card.append(p);

    main.append(card);

    inputs.forEach(function (inp) {
        if(inp.type !== "submit"){
            inp.value = " ";
        }
    })

})