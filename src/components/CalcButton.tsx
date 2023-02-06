import { useEffect, useState } from "react";
interface CalcButtonProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  text: string;
}

export default function CalcButton({ value, setValue, text }: CalcButtonProps) {
  // функция принимает значение нажатой кнопки и добавляет его в поле калькулятора
  const buttonNumber = (text: string) => {};

  // функция вывода результата
  const buttonResult = () => {};

  // функция очистки поля ввода в калькуляторе
  const buttonClear = () => {
    setValue(" 0");
  };

  function CalcOnClick(text: string) {
    switch (text) {
      case "1" ||
        "2" ||
        "3" ||
        "4" ||
        "5" ||
        "6" ||
        "7" ||
        "8" ||
        "9" ||
        "0" ||
        "+" ||
        "-":
        return buttonNumber(text);
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
