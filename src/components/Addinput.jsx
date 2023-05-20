import { FaPlus } from "react-icons/fa";
import { useRef, useState } from "react";

export default function Addinput() {
  const inputTitle = useRef("");
  const inputDescription = useRef("");
  const [data, setData] = useState([]);

  return (
    <div className="">
      <div className="flex justify-center align-items">
        <input
          type="text"
          placeholder="Title"
          className="Name"
          ref={inputTitle}
        />
        <input
          type="text"
          placeholder="Descirption"
          className="descirption"
          ref={inputDescription}
        />
        <button
          className="plus-button"
          onClick={(e) => {
            e.preventDefault();
            setData([
              ...data,
              {
                title: inputTitle.current.value,
                description: inputDescription.current.value,
              },
            ]);
            inputTitle.current.value = '',
            inputDescription.current.value = ''
          }}


          id="add task"
        >
          <FaPlus />
        </button>
      </div>
      <div className="preview grid grid-cols-5 h-full w-full">
          {data && data.length>0 ? data.map((value, index)=>{
            return(
              <div key={index}>
                
              <h2>{value.title}</h2>
              </div>
            )
          }): "No ToDo"}
        
      </div>
    </div>
  );
}
