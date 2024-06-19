export default function Button({buttonName}){

    return (
        <div className="bg-red inline-block px-3 py-2 rounded-lg text-xs hover:bg-rose-500">
            <button>{buttonName}</button>
        </div>
    )
}