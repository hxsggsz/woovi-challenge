import { forwardRef } from "react";
import { IMaskInput as DefaultMaskInput } from "react-imask";

export interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const SimpleDateInput = forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <DefaultMaskInput
        {...other}
        mask="00/00"
        inputRef={ref}
        definitions={{
          "#": /1-9/,
        }}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

export default SimpleDateInput;
