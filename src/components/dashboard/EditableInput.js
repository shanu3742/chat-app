import React, { useCallback, useState } from 'react';
import { Input, InputGroup, Icon, Alert } from 'rsuite';

const EditableInput = ({
  initialValue,
  onSave,
  label = null,
  placeholder = 'write your value',
  emptyMsg = 'input is empty',
  wrapperClassName = '',
  ...inputProps
}) => {
  const [onSaveHover, setonSaveHover] = useState(false);
  const [input, setInput] = useState(initialValue);
  const onInputChange = useCallback(value => {
    setInput(value);
    setonSaveHover(false);
  }, []);
  const [isEditable, setIsEditable] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [hover, setHover] = useState(false);
  // eslint-disable-next-line no-unused-vars

  const onEditClick = useCallback(() => {
    setIsEditable(p => !p);
    setInput(initialValue);
    setHover(true);
  }, [initialValue]);

  const onSaveClick = async () => {
    const terimmed = input.trim();
    if (terimmed === '') {
      Alert.info(emptyMsg, 4000);
    }
    if (terimmed !== initialValue) {
      await onSave(terimmed);
    }
    setonSaveHover(true);
    setIsEditable(false);
    setHover(false);
  };
  return (
    <div className={wrapperClassName}>
      {label}
      <InputGroup>
        <Input
          {...inputProps}
          disabled={!isEditable}
          placeholder={placeholder}
          value={input}
          onChange={onInputChange}
        />
        <InputGroup.Button color={hover ? 'red' : 'blue'} onClick={onEditClick}>
          <Icon icon={isEditable ? 'close' : 'edit2'} />
        </InputGroup.Button>
        {isEditable && (
          <InputGroup.Button
            color={!onSaveHover ? 'red' : 'green'}
            onClick={onSaveClick}
          >
            <Icon icon="check" />
          </InputGroup.Button>
        )}
      </InputGroup>
    </div>
  );
};

export default EditableInput;
