export const Input = ({
    label,
    placeholder,
    onChange,
    error,
    id,
    value,
    type,
  }) => {
    return (
      <div className="flex flex-col">
        {label && (
          <label htmlFor={id} className="mb-2 font-medium">
            {label}
            <span className="text-red-500">*</span>
          </label>
        )}
        <input
          id={id}
          type={type || "text"}
          value={value}
          placeholder={placeholder || ""}
          className="w-full border py-3 px-2 rounded-xl focus:outline-blue-500"
          onChange={onChange}
        />
        {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
      </div>
    );
  };
  