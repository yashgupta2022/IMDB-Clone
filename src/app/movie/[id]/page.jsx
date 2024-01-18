import Image from "next/image"

export default async function MoviePage({params}) {
    try {
        const movieId = params.id   
        if (params.id !=="Spinner-1s-96px.svg") {
        let res = await fetch (
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
        )
        let movie = await res.json()
        return (
            <div className="w-full">
                <div className="p-4 md:p--8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
                    <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path }`}  alt="" width={500} height={300} className='rounded-lg mx-auto '
                    style={{maxWidth: '300px' ,maxHeight: '400px'}}
                    ></Image>
                    <div className="p-2">
                        <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
                        <p className="text-lg mb-3">{movie.overview}</p>
                        <p className="mb-3"><span className="font-semibold mr-1"> Date Released : </span>
                        {movie.release_date || movie.first_air_date}</p>
                        <p ><span className="font-semibold mr-1"> Rating : </span>{movie.vote_count}</p>                       
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        )}
    }
    catch (error) {
        return <h1 className="text-center pt-6">Unable to load Movie.. Try Again Later</h1>
    }
    
}
