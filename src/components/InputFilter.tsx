interface InputFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export const InputFilter = ({ value, onChange }: InputFilterProps) => {
  return (
    <div className="w-full max-w-md my-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por nombre, raza o afiliación..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
};
