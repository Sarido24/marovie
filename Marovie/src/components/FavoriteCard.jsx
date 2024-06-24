import Loading from "./Loading";

export default function FavoriteCard({img}){
   
    if(img){
        return (
            <div className="shadow-md shadow-red rounded-lg">
                <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500/${img}`} alt="" />
            </div>
        )
    }
    
}