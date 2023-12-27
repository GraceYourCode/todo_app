import Check from "./Check"

const Search_Bar = () => {
  return (
    // here is the div container which holds the search bar and checkbox for the task
    <div className="bg-desaturated_Blue px-6 py-4 rounded flex gap-5 items-center">
      <Check />
      <input type="text" defaultValue="Create a new todo..." 
      /*
       here i want to write an inline styling to remove the default background of this input tag which is 
       white because tailwind css doesn't come with a way of removig backgrounds
      */ 
     style={{background: "none"}}
     className="text-dark_Grey_Blue outline-none w-full"
      />
    </div>
  )
}

export default Search_Bar
