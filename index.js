const typeImg = {
    bug: "img/bug.webp",
    dark: "img/dark.webp",
    dragon: "img/dragon.png",
    electric: "img/electric.png",
    fairy: "img/fairy.png",
    fighting: "img/fighthing.png",
    fire: "img/fire.webp",
    flying: "#F5F5F5",
    ghost: "img/ghost.png",
    grass: "img/grass.webp",
    ground: "img/ground.png",
    ice: "img/ice.png",
    normal: "img/normal.webp",
    poison: "img/poison.png",
    psychic: "img/psychic.webp",
    rock: "img/rock.png",
    steel: "img/steel.png",
    water: "img/water.webp"
};
function carregar(){
    let codigo = document.getElementById('pokemon').value;
    let url = `https://pokeapi.co/api/v2/pokemon/${codigo}`;

    fetch(url)

    .then((result)=>{
        return result.json();
    })

    .then((dado)=>{
        let nome = dado.name;

        let img = dado.sprites.front_default;

        document.getElementById('nome').textContent = nome;
        document.getElementById('imagem').setAttribute('src',img);

        let hp = dado.stats[0].base_stat;

        document.getElementById('hp').textContent = hp;

        let attack = dado.stats[1].base_stat;

        document.getElementById('atck').textContent = attack;

        let def = dado.stats[2].base_stat;

        document.getElementById('def').textContent = def;

        let especial = dado.stats[3].base_stat;

        document.getElementById('especial').textContent = especial;

        let especial_def = dado.stats[4].base_stat;

        document.getElementById('especial_def').textContent = especial_def;

        let speed = dado.stats[5].base_stat;

        document.getElementById('speed').textContent = speed;

        const tipo = dado.types[0].type.name;
        const background = typeImg[tipo];

        const fundo = document.getElementById('main');

        fundo.style.backgroundImage = `url(${background})`;

        fundo.style.backgroundSize = 'cover';

        fundo.style.backgroundPosition = 'center';
    })
}