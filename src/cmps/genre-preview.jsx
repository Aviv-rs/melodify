import { useNavigate } from "react-router-dom"

export function GenrePreview ({ genre }) {
    console.log("genre", genre);

    const navigate = useNavigate()

    const onGoToGenre = () => {
        navigate(`/genre/${genre.name}`)
    }
return (  
        <div onClick={onGoToGenre} style={{ backgroundColor: genre.color }} className="genre-card" >
            <h3>{genre.name}</h3>
            <img src={genre.imgUrl} alt="genre" />
        </div>
    )
}




