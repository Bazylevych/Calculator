import { useEffect, useState } from "react";
interface CalcButtonProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  text: string;
}

export default function CalcButton({
  value,
  setValue,
  count,
  setCount,
  text,
}: CalcButtonProps) {
  const [cash, setCash] = useState<number>(0);

  useEffect(() => {
    // console.log("value: ", value);
    // console.log("count: ", count);
  }, [count, value]);

  const buttonNumber = (text: string) => {
    const S: string = text;
    if (value === " 0") {
      setValue(" " + S);
      setCount(parseInt(S));
    } else if (
      value !== " 0" &&
      value[value.length - 1] !== "+" &&
      value[value.length - 1] !== "-"
    ) {
      setValue(value + S);
      setCount(parseInt(value[value.length - 1] + S));
      //   console.log("POINT: ", value + S);
      //   console.log("CASH: ", cash);
    }
    if (value[value.length - 1] === "+") {
      setValue(value + " " + S);
    }
    if (value[value.length - 1] === "-") {
      setValue(value + " " + S);
    }
  };

  const buttonClear = () => {
    setValue(" 0");
    setCount(0);
  };

  const buttonPlusMinus = (text: string) => {
    const arr: string[] = value.split(" ");

    if (value && text === "+") {
      setValue(value + " +");

      if (arr[arr.length - 2] === "+" && arr.length >= 3) {
        setCount(count + parseInt(arr[arr.length - 1]));
        setCash(count + parseInt(arr[arr.length - 1]));
      }
    }

    if (value && text === "-") {
      setValue(value + " -");

      if (arr[arr.length - 2] === "-" && arr.length >= 3) {
        setCount(count - parseInt(arr[arr.length - 1]));
        setCash(count - parseInt(arr[arr.length - 1]));
      }
    }
  };

  const buttonResult = () => {
    const arr: string[] = value.split(" ");
    if (value) {
      if (arr[arr.length - 2] === "+") {
        setCount(count + parseInt(arr[arr.length - 1]));
        setValue(`${count + parseInt(arr[arr.length - 1])}`);
      } else if (arr[arr.length - 2] === "-") {
        setCount(count - parseInt(arr[arr.length - 1]));
        setValue(`${count - parseInt(arr[arr.length - 1])}`);
      }
    }
  };

  function CalcOnClick(text: string) {
    switch (text) {
      case "1":
        return buttonNumber(text);
      case "2":
        return buttonNumber(text);
      case "3":
        return buttonNumber(text);
      case "4":
        return buttonNumber(text);
      case "5":
        return buttonNumber(text);
      case "6":
        return buttonNumber(text);
      case "7":
        return buttonNumber(text);
      case "8":
        return buttonNumber(text);
      case "9":
        return buttonNumber(text);
      case "0":
        return buttonNumber(text);
      case "+":
        return buttonPlusMinus(text);
      case "-":
        return buttonPlusMinus(text);
      case "=":
        return buttonResult();
      case "C":
        return buttonClear();
    }
  }

  return (
    <button
      className="w-[50px] h-[30px] bg-slate-800 text-white"
      onClick={() => CalcOnClick(text)}
    >
      {text}
    </button>
  );
}
