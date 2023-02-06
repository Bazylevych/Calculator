import { useEffect, useState } from "react";
import CalcButton from "./components/CalcButton";
import CalcInput from "./components/CalcInput";

function App() {
  const [value, setValue] = useState<string>("");
  const calcValues: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "=",
    "C",
  ];

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-500">
      <div className="w-[600px] bg-slate-400 h-[600px] rounded-xl flex justify-around flex-col items-center ">
        <CalcInput value={value} />
        <div className=" w-[250px] h-[400px] grid grid-cols-3 gap-3  ">
          {calcValues.map((calc: any) => (
            <CalcButton value={value} setValue={setValue} text={calc} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
