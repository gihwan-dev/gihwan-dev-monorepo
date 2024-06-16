interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

export default function Input({ onChange, value }: InputProps) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control -- type not inferred
    <label
      className="shadow-button flex-1 rounded-full border-2 border-slate/900 bg-slate/100 px-6 py-4 text-base font-normal"
      htmlFor="search-input"
    >
      <input
        className="border-none bg-slate-100 focus:outline-0"
        id="search-input"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder="할 일을 입력해주세요"
        value={value}
      />
    </label>
  );
}
