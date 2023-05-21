import { FaPlus } from "react-icons/fa";
import { useRef, useState } from "react";

export default function Addinput() {
  const inputTitle = useRef("");
  const inputDescription = useRef("");
  const [data, setData] = useState([]);
  const removeElement = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

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
      <div className="preview grid grid-cols-3 w-full">
          {data && data.length>0 ? data.map((value, index)=>{
            return(
              <div key={index}>
                <button className="remove" onClick={() => {
                  data.map(()=>{ removeElement(index)});
                }}>
              <h3>{value.title}</h3>
              <h6>{value.description}</h6>
              </button>
              
              </div>
            )
          }): "No ToDo"}
        
      </div>
    </div>
  );
}
