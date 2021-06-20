import React from 'react';
import { Button, Modal } from 'rsuite';
import useModelState from '../../../misc/custom-hooks';
import ProfileAvatar from '../../ProfileAvatar';

const ProfileInfoBtnModal = ({ profile, children, ...btnProps }) => {
  const { isOpen, close, open } = useModelState();

  const { name, avatar, createdAt } = profile;

  const membersince = new Date(createdAt).toLocaleDateString();

  return (
    <>
      <Button {...btnProps} onClick={open}>
        {name}
      </Button>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>{name} profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <ProfileAvatar src={avatar} name={name} />
          <h4 className="mt-2">{name}</h4>
          <p>Member since {membersince}</p>
        </Modal.Body>
        <Modal.Footer>
          {children}
          <Button block onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileInfoBtnModal;
