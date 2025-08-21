import React from "react"

export default function Practice(){

    const [myFavoriteThings, setMyFavoriteTings] = React.useState([])
    const allFavoriteThings = ["⭐😒","😊📞", "🍊🍎", "😱👋", "🚀😭", "🥳⭐",
     "📥🍎", "🍊📞", "😊😒", "🙂❤️", "😁😂", "🤣😍"]

    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

    function addFavoriteThing(){
        setMyFavoriteTings(prevFavThings => [...prevFavThings, allFavoriteThings[prevFavThings.length]] )
    }

    return(
        <main className=" grid place-items-center place-content-center bg-blue-200 w-scre h-screen">
            <button 
            className=" fixed top-4 border bg-blue-500 w-40 text-white px-6 py-3 rounded-full font-bold "
            onClick={addFavoriteThing}
            >Add Items
            </button>
            <br />
            <br />
            <section className="fixed top-20"
            aria-label="polite">
                {thingsElements}
            </section>

        </main>
    )
}