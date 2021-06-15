import React from 'react';
import {
  Button,
  Icon,
  Modal,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'rsuite';
import useModelState from '../misc/custom-hooks';

const CreateRoomBtnModal = () => {
  // eslint-disable-next-line no-unused-vars
  const { isOpen, open, close } = useModelState();
  return (
    <div className="mt-1">
      <Button block color="green" onClick={open}>
        <Icon icon="creative" />
        Create new chat room
      </Button>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>New chat room</Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <ControlLabel>Room name</ControlLabel>
              <FormControl name="name" placeholder="Enter chat room name..." />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button block appearance="primary">
            Create new chat room
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default CreateRoomBtnModal;
