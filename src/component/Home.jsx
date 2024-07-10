import AddPersonInfo from "./AddPersonInfo"
const Home = ()=>{
    return(<>
       <nav className="text-center bg-blue-700 text-white font-serif text-xl py-2 font-bold">Directory App</nav>
       <div className="px-10 py-2 border ">
        <button className="border p-0.5 text-sm text-center bg-blue-500 text-white mx-10">Add New Person</button>
        <button className="border p-0.5 text-sm text-center bg-blue-500 text-white mx-10">Retrieve Information</button>
      </div>
      <AddPersonInfo/>
    </>)
}

export default Home;