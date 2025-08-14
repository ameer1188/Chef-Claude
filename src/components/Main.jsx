const Main = () => {
    function handleClick(){
        console.log("i was clicked")
    }
    return(
        <main>
           <form className="add-incredient-form" action="">
            <input 
                type="text" 
                placeholder="e.g oregano"
                aria-label="add incredient"
            />
            <button onClick={handleClick}>Add ingredient</button>
           </form>
        </main>
    )
}
export default Main;