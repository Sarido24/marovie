export default function Detail(){
    return (
        <>
        <div className="w-full h-full  text-gray flex flex-col py-2 lg:py-10 items-center text-xs lg:text-2xl gap-4 font-poppins">
        <img className="object-cover w-[100vh] h-[70vh] shadow-lg shadow-red rounded-lg"
          src="https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg"
          alt=""
        />
        <div className="flex flex-col gap-5 justify-start shadow-lg p-20">
          <h1 className="">Judul: INSIDE OUT 2</h1>
          <p>Release Date: 2024-06-11 </p>
          <p>Rating:  7.792 </p>
          <p>Synopsis: Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.</p>
        </div>
      </div>
      </>
    )
}