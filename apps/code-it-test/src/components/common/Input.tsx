interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

export default function Input({ onChange, value }: InputProps) {
  return (
    <div className="w-full rounded-full border-2 border-slate/900 bg-slate/100 px-6 py-[18px] text-base font-normal shadow-button">
      <input
        className="w-full border-none bg-slate-100 focus:outline-0"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder="할 일을 입력해주세요"
        value={value}
      />
    </div>
  );
}
