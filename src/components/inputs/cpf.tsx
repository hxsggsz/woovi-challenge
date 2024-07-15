import { forwardRef } from "react";
import { IMaskInput as DefaultMaskInput } from "react-imask";

export interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const CpfInput = forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <DefaultMaskInput
        {...other}
        inputRef={ref}
        mask={"000.000.000-00"}
        definitions={{
          "#": /1-9/,
        }}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

export default CpfInput;
