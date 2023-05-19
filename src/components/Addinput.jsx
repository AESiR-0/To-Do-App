import { FaPlus } from "react-icons/fa";
function Addinput() {
  return (
    <div className="">
      <div className="flex justify-center align-items">
      <input type="text" placeholder="Title" className="Name" />
      <input type="text" placeholder="Descirption" className="descirption" />
      <button className="plus-button" id="add task"><FaPlus/></button>
      </div>
    </div>
  )
}

export default Addinput
