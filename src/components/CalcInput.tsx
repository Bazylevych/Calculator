interface CalcInputProps {
  value: string;
}

export default function CalcInput({ value }: CalcInputProps) {
  return (
    <input
      className="rounded-lg w-2/3 h-[40px] mt-10"
      value={value}
      type="text"
    />
  );
}
