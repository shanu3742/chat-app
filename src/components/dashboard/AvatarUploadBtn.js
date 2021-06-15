import React, { useState, useRef } from 'react';
import { Modal, Button, Alert } from 'rsuite';
import AvatarEditor from 'react-avatar-editor';
import { useProfile } from '../../context/profile.context';
import useModelState from '../../misc/custom-hooks';
import ProfileAvatar from '../ProfileAvatar';
import { database, storage } from '../../misc/firebase';

const fileInputType = '.png, .jpeg , .jpg';
const acceptedFileTypes = ['image/png', 'image/jpeg', 'image/pjpeg'];
const isValidFile = file => acceptedFileTypes.includes(file.type);
const getBlob = canvas => {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error('File process error'));
      }
    });
  });
};
const AvatarUploadBtn = () => {
  const Profile = useProfile();
  const { isOpen, open, close } = useModelState();
  const avtarEditorRef = useRef();
  const [img, setImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
  const onUploadClick = async () => {
    const canvas = avtarEditorRef.current.getImageScaledToCanvas();
    setIsLoading(true);
    try {
      const blob = await getBlob(canvas);
      const avatarFileRef = storage
        .ref(`/profile/${Profile.profile.uid}`)
        .child('avatar');
      const uploadAvatarResult = await avatarFileRef.put(blob, {
        cacheControl: `public, max-age=${3600 * 24 * 3}`,
      });
      const downloadUrl = await uploadAvatarResult.ref.getDownloadURL();
      const userAvatarRef = database
        .ref(`/profiles/${Profile.profile.uid}`)
        .child('avatar');
      userAvatarRef.set(downloadUrl);
      setIsLoading(false);
      Alert.info('Avtar has been uploaded');
    } catch (err) {
      setIsLoading(false);
      Alert.error(err.message, 4000);
    }
  };
  return (
    <div className="mt-3 text-center">
      <ProfileAvatar
        name={Profile.profile.name}
        src={Profile.profile.avatar}
        className="width-200 height-200 img-fullsize font-huge"
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
                  ref={avtarEditorRef}
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
            <Button
              block
              appearance="ghost"
              onClick={onUploadClick}
              disabled={isLoading}
            >
              Upload new avatar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AvatarUploadBtn;