import { InputStyle, InputStyleContainer, Label } from './styles';
import { useState } from 'react';

export default function InputLabel({ label }: { label?: string }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputStyleContainer>
      <Label>{label}</Label>
      <InputStyle
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
    </InputStyleContainer>
  );
}
