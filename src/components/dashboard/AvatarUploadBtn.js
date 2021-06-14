import React, { useState } from 'react';
import { Modal, Button, Alert } from 'rsuite';
import AvatarEditor from 'react-avatar-editor';
import { useProfile } from '../../context/profile.context';
import useModelState from '../../misc/custom-hooks';
import ProfileAvatar from '../ProfileAvatar';

const AvatarUploadBtn = () => {
  const Profile = useProfile();
  const fileInputType = '.png, .jpeg , .jpg';
  const acceptedFileTypes = ['image/png', 'image/jpeg', 'image/pjpeg'];
  const isValidFile = file => acceptedFileTypes.includes(file.type);
  const { isOpen, open, close } = useModelState();
  // eslint-disable-next-line no-unused-vars
  const [img, setImg] = useState(null);
  const onFileInputChange = eve => {
    const currFiles = eve.target.files;
    if (currFiles.length === 1) {
      const file = currFiles[0];
      if (isValidFile(file)) {
        setImg(file);
        open();
      } else {
        Alert.warning(
          `Hey ${Profile.profile.name} you selected wrong file type ${file.type}`,
          4000
        );
      }
    }
  };
  return (
    <div className="mt-3 text-center">
      <ProfileAvatar
        name={Profile.profile.name}
        src={Profile.profile.avatar}
        className="width-200 height-200 imgfullsize font-huge"
      />
      <div>
        <label
          htmlFor="avatar-upload"
          className="d-block cursor-pointer padded"
        >
          Select new avatar
          <input
            id="avatar-upload"
            type="file"
            className="d-none"
            accept={fileInputType}
            onChange={onFileInputChange}
          />
        </label>
        <Modal show={isOpen} onHide={close}>
          <Modal.Header>
            <Modal.Title>Adjust and upload new avatar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center align-items-center h-100">
              {img && (
                <AvatarEditor
                  image={img}
                  width={200}
                  height={200}
                  border={10}
                  borderRadius={100}
                  rotate={0}
                />
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button block appearance="ghost">
              Upload new avatar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AvatarUploadBtn;
