import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" flex flex-col items-center">
        <p className=""> {count}</p>
        <h1 className=""> Hello World!</h1>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="font-sans bg-primary text-secondary hover:bg-secondary hover:text-primary p-3 w-fit rounded-full cursor-pointer"
        >
          Натисни
        </button>
      </div>
    </>
  );
}

export default App;
