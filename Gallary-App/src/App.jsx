import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [idx, setIdx] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${idx}&limit=28`,
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [idx]);

  let printUserData = (
    <h3 className="text-xl text-gray-400 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem) {
      return (
        <div key={elem.id}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen overflow-auto p-4 text-white">
      <div className="flex flex-wrap gap-4">{printUserData}</div>
      <div className="flex justify-center items-center gap-6 p-4">
        <button onClick={() => {
          if(idx > 1)
            setIdx(idx - 1)
            setUserData([])
        }}
         className="bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded-2xl px-4 py-2 font-semibold">
          Prev
        </button>
        <h4>Page{idx}</h4>
        <button onClick={() => {
          setUserData([])
          setIdx(idx + 1)
        }}
         className="bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded-2xl px-4 py-2 font-semibold">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
