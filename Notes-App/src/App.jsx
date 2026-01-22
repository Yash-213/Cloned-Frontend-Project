import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    setTask(copyTask);

    copyTask.push({ title, details });
    setTitle("");
    setDetails("");
  };
const deleteNote =(idx)=>{
  const copyTask = [...task];
  copyTask.splice(idx, 1);
  setTask(copyTask);

}
  return (
    <div className="h-screen bg-black lg:flex text-white">
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        className="flex items-start p-10 gap-4 flex-col lg:w-1/2"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input
          type="text"
          className="px-5 py-2 border-2 w-full font-medium outline-none rounded-2xl h-15"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          className="px-5 py-2 h-32 border-2 w-full font-medium outline-none rounded-2xl"
          placeholder="Enter Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button
          onClick={(e) => {
            SubmitHandler(e);
          }}
          className="bg-white w-full active:scale-95 font-medium outline-none text-black px-5 py-2 rounded-2xl"
        >
          Add Notes
        </button>
      </form>
      <div className="p-10 lg:w-1/2 lg:border-l-2">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex gap-5 mt-5 h-[90%] overflow-auto items-start justify-start flex-wrap ">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start px-4 pb-5 pt-9 relative bg-cover h-52 w-40 rounded-2xl text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h1 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h1>
                  <p className="mt-4 leading-tight text-xs font-semibold text-gray-600">
                    {elem.details}
                  </p>
                </div>
                <button onClick={() => {
                  deleteNote(idx);
                }} className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 rounded-xl font-bold text-xs text-white">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
