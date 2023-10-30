import React, { useState } from 'react';
import classNames from 'classnames';

const FilledTextField = ({
  LabelText,
  LeadingIcon,
  HandleLeadClick,
  TrailingIcon,
  HandleTrailClick,
  Type,
  Width,
  HtmlFor,
  SupportingText,
  value,
  onChange,
  validationErrors,
  setValidationErrors,
  inputAttributes,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    if (validationErrors && setValidationErrors)
      setValidationErrors({ ...validationErrors, [HtmlFor]: null });
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const labelClassName = classNames(
    'text-xs absolute transition-transform duration-300',
    {
      'text-[#0078D4]': isFocused || value,
      'text-[#A79DAE]': !(isFocused || value),
    }
  );

  const containerClassName = classNames(
    'border-b flex gap-x-2 mt-4 relative h-fit',
    {
      'border-red-500':
        SupportingText && SupportingText.type === 'error' && !isFocused,
      'border-blue-500': isFocused,
      'border-gray-300':
        !isFocused && !(SupportingText && SupportingText.type === 'error'),
    }
  );

  const supportingTextClassName = classNames(
    'text-xs mt-1 absolute bottom-[-20px]',
    {
      'text-[#FF0000]': SupportingText && SupportingText.type === 'error',
      'text-[#0078D4]': SupportingText && SupportingText.type === 'info',
      'text-[#FFA500]': SupportingText && SupportingText.type === 'warning',
      // Add more classes for other types as needed
    }
  );

  return (
    <div className={`${Width ? Width : 'w-fit'} ${containerClassName}`}>
      {LeadingIcon && (
        <div
          className="flex justify-center items-center"
          onClick={HandleLeadClick}
        >
          {LeadingIcon}
        </div>
      )}
      <div className="relative p-1 w-full">
        <label
          className={labelClassName}
          htmlFor={HtmlFor}
          style={{
            transform:
              isFocused || value ? 'translateY(-1rem) scale(0.8)' : 'none',
          }}
        >
          {LabelText}
        </label>
        <input
          className="text-sm outline-none w-full bg-inherit"
          id={HtmlFor}
          type={Type}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          {...inputAttributes}
        />
      </div>
      {TrailingIcon && (
        <div
          className="flex justify-center items-center"
          onClick={HandleTrailClick}
        >
          {TrailingIcon}
        </div>
      )}
      {SupportingText && (
        <div className={supportingTextClassName}>{SupportingText.text}</div>
      )}
    </div>
  );
};

export default FilledTextField;
