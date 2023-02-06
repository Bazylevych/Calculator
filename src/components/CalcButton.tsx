interface CalcButtonProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  text: string;
}

export default function CalcButton({ value, setValue, text }: CalcButtonProps) {
  // функция принимает значение нажатой кнопки и добавляет его в поле калькулятора
  const buttonNumber = (text: string) => {
    if (!value.length && Number.isInteger(parseInt(text))) {
      setValue(" " + text);
    }
    if (
      Number.isInteger(parseInt(value[value.length - 1])) &&
      Number.isInteger(parseInt(text))
    ) {
      setValue(value + text);
    } else if (
      Number.isInteger(parseInt(value[value.length - 1])) &&
      !Number.isInteger(parseInt(text))
    ) {
      setValue(value + " " + text + " ");
    } else if (
      value[value.length - 1] === " " &&
      Number.isInteger(parseInt(text))
    ) {
      setValue(value + text);
    }
  };

  // функция вывода результата
  const buttonResult = () => {};

  // функция очистки поля ввода в калькуляторе
  const buttonClear = () => {
    setValue(" 0");
  };

  function CalcOnClick(text: string) {
    switch (text) {
      case "2":
        return buttonNumber(text);
      case "1":
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
        return buttonNumber(text);
      case "-":
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
