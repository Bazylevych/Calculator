interface CalcInputProps {
  value: string;
}

export default function CalcInput({ value }: CalcInputProps) {
  return (
    <input
      className="rounded-lg w-2/3 h-[40px] mt-10"
      defaultValue={value}
      type="text"
      style={{ textAlign: "right", paddingRight: "10px" }}
      placeholder=" 0"
    />
  );
}
