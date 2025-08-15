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
        <main>
           <form onSubmit={handleSubmit} className="add-incredient-form" action="">
            <input 
                type="text" 
                placeholder="e.g oregano"
                aria-label="add incredient"
                name="ingredient"
            />
            <button>Add ingredient</button>
           </form>
           <ul>
            {ingredientsListItems}
           </ul>
        </main>
    )
}
export default Main;