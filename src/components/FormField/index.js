import React from 'react';

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      {label !== 'Descrição' ? (
        <label>
          {label}:
          <input name={name} type={type} value={value} onChange={onChange} />
        </label>
      ) : (
        <label>
          {label}:
          <textarea name={name} type={type} value={value} onChange={onChange} />
        </label>
      )}
    </div>
  );
}

export default FormField;
