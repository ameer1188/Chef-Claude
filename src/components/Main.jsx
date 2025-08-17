import React  from "react"

const Main = () => {
    const ingredients = ["Chiken", "Oregano", "Tomatoes"]

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }

    return(
        <main className="items-center justify-center p-4">
           <form  onSubmit={handleSubmit} className="flex focus:within:scale-105 items-center justify-center py-10 px-10 w-auto sm:" action="">
            <input 
                type="text" 
                placeholder="e.g oregano"
                aria-label="add incredient"
                name="ingredient"
                className="w-auto sm:w-1/3 md:w-1/3 lg:w-1/2 h-13 px-4 py-2  border border-gray-300 font-semibold 
                focus:outline-none focus:ring-blue-500 rounded-tl-2xl rounded-bl-2xl "
            />
            <button
            className="  w-auto sm:w-40 md:w-50 lg:w-60 h-13 px-4 py-2 bg-indigo-800 
            text-white font-semibold whitespace-nowrap
            rounded-tr-2xl rounded-br-2xl hover:bg-indigo-900 transition hover:scale-105 before:content-['+'] before:mr-2 "
            >Add ingredient</button>
           </form>
           <div className=" h-80 p-25 bg-gradient-to-br from-purple-600 via-blue-700 to-black rounded-tr-2xl rounded-tl-2xl ">
                <ul className="
                backdrop-blur-md bg-white/20 shadow-lg max-w-xl max-h-fit py-10 text-white/80
                my-auto mx-auto items- text-center justify-center
                h-50 text-2xl font-mono  rounded-2xl">
                    {ingredientsListItems}
                </ul>
           </div>
        </main>
    )
}
export default Main;