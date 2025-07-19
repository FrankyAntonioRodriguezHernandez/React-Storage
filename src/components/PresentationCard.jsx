import imagenAvatar from '../assets/Avatar.png';

function PresentationCard(){
    let name = "Franky";
return(
    <div>
        <img src= {imagenAvatar} alt='Avatar' />
        <h1>
            Hola soy {name}
        </h1>
    </div>
)
}

export default PresentationCard;