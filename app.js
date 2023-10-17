


`https://pokeapi.co/api/v2/pokemon/`

const readUsers = async () => {
    
    let pokArreglo = [];

    for (let i = 1; i <= 20; i++) {
        url = `https://pokeapi.co/api/v2/pokemon/${i}` ;
        // console.log (url)
        // pokArreglo.push(url)

        const enlace = await fetch(url)

        const data = await enlace.json();

        pokArreglo.push(data);


    }
        
        pokemon(pokArreglo)

}

const pokemon = (user) =>{

    user.map((poke, i) => {
        const contenedor = document.getElementById(`contenedor`)

        // Generar dinamicamente etiqueta div
        let div = document.createElement('div');
        // Generar dinamicamente etiquets img
        let img = document.createElement('img');
        // Generar dinamicamente etiquetas p
        let p = document.createElement('p');

        div.id = `app-${i}`;
        div.classList.add(`app`);

        img.src = poke.sprites?.other.home.front_default;

        p.innerHTML = `${poke.id} - ${poke.name}`

        contenedor.appendChild(div);
        
        div.appendChild(p);
        div.appendChild(img);
    })
        //  console.log (template.forms[0])     
    }
// console.log (user)
readUsers()

























