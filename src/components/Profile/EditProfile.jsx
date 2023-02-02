import React from 'react'
import cls from "./EditProfile.module.css";
import { Content } from "../../pages/Profile";
import { useRef, useState } from 'react';
import { Divider } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { logoutUser } from '../../store/auth';
import { profileActions } from '../../store/profile';

const EditProfile = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef(); 
    const fromRef = useRef();
    const dobRef = useRef();
    const usernameRef = useRef();
    const avatarRef = useRef();
    const coverImgRef = useRef();
    const [wantPasswordChange, setWantPasswordChange] = useState(false);
    const oldPasswordRef = useRef();
    const newPasswordRef = useRef(); 
    const [avatarSelected, setAvatarSelected] = useState(false);
    const [coverImgSelected, setCoverImgSelected] = useState(false);
    const { user, logoutRef } = useSelector(state => state.auth);
    const [sendingPost, setSendingPost] = useState(false);
    const [error, setError] = useState('');
    
    const editProfileHandler = async(e) => {
       e.preventDefault(); 
       
       let updates = {};
       let types = [];
       if (firstNameRef.current.value) updates.firstName = firstNameRef.current.value;
       if (lastNameRef.current.value) updates.lastName = lastNameRef.current.value;
       if (emailRef.current.value) updates.email = emailRef.current.value;
       if (fromRef.current.value) updates.from = fromRef.current.value;
       if (dobRef.current.value) updates.dateOfBirth = dobRef.current.value;
       if (usernameRef.current.value) updates.username = usernameRef.current.value;
       if (wantPasswordChange){
           if (oldPasswordRef.current.value) updates.oldPassword = oldPasswordRef.current.value;
           if (newPasswordRef.current.value) updates.newPassword = newPasswordRef.current.value;
        }
        if (avatarSelected) {
            types.push('avatar');
        }
        if (coverImgSelected){
            types.push('coverImg');
        }
        if (!Object.keys(updates).find(k => updates[k] !== '') && !avatarSelected && !coverImgSelected) return setError("Please fill at least one field");
        setSendingPost(true); 
        setError('');

        types = JSON.stringify(types);
        updates.types = types;

       let formData = new FormData();
        formData.append('userId', user._id);
       Object.keys(updates).forEach(u => formData.append(u, updates[u]));
        if (avatarSelected) formData.append('images', avatarRef.current.files[0]);
        if (coverImgSelected) formData.append('images', coverImgRef.current.files[0]);

        try {
            const response = await axios.put('/user/update', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status !== 200){
                setError(response.data.err.message);
            } else {
                if (updates.username) {
                    logoutRef.click();
                }
                else window.open(`/profile/${user.username}/`, '_self');
            }
        } catch (err) {
            // console.log(err); 
            setError(err.response.data.err);
        } finally {
            setSendingPost(false);
        }
    }
    
    const cancelAvatarSelectionHandler = () => {
        avatarRef.current.value = "";
        setAvatarSelected(false)
    }

    const cancelCoverImgSelectionHandler = () => {
        coverImgRef.current.value = "";
        setCoverImgSelected(false)
    }
    

  return (
      <Content>
          <form onSubmit={editProfileHandler}>
              <div className={cls["edit-profile"]}>
                    <label htmlFor="firstname" className={cls['option']}>
                        <span>First Name</span>
                        <input ref={firstNameRef} id="firstname" type="text" />
                    </label>
                    <label htmlFor="lastname" className={cls['option']}>
                        <span>Last Name</span>
                        <input ref={lastNameRef} id="lastname" type="text" />
                    </label>
                    <label htmlFor="email" className={cls['option']}>
                        <span>Email</span>
                        <input ref={emailRef} id="email" type="email" />
                    </label>
                    <label htmlFor="username" className={cls['option']}>
                        <div className={cls["option-extra-info"]}>
                            <span>Username</span>
                            <span className={cls['info']}>* Relogin required</span>
                        </div>
                        <input ref={usernameRef} id="username" type="text" />
                    </label>
                    <label htmlFor="from" className={cls['option']}>
                        <span>From</span>
                        <input ref={fromRef} id="from" type="text" />
                    </label>
                    <label htmlFor="dob" className={cls['option']}>
                        <span>Birth Day</span>
                        <input ref={dobRef} id="dob" type="date" />
                    </label>
                    <div className={cls["files-section"]}>
                        <div htmlFor="" className={cls['option'] + ' ' + cls['avatar-option'] + ' ' + (avatarSelected ? cls['avatar-option-active'] : '')}>
                            <label htmlFor='avatar'>Profile Picture</label>
                            <input style={{display: 'none'}} onChange={() => setAvatarSelected(avatarRef.current.files.length)} ref={avatarRef} id="avatar" type="file" accept=".jpg,.jpeg,.png,.gif" />
                            {avatarSelected && <div onClick={cancelAvatarSelectionHandler} className={cls['file-cancel-btn']}>X</div>}
                        </div>
                        <div  className={cls['option'] + ' ' + cls['cover-option'] + ' ' + (coverImgSelected ? cls['cover-option-active'] : '')}>
                            <label htmlFor='coverImg'>Cover Picture</label>
                            <input style={{display: 'none'}} onChange={() => setCoverImgSelected(coverImgRef.current.files.length)} ref={coverImgRef} id="coverImg" type="file" accept=".jpg,.jpeg,.png,.gif" />
                            {coverImgSelected && <div onClick={cancelCoverImgSelectionHandler} className={cls['file-cancel-btn']}>X</div>}
                        </div>
                    </div>
                    <Divider className={cls['divider']}>
                        <div onClick={() => setWantPasswordChange((state) => !state)} className={cls['divider-btn'] + ' ' +
                                (wantPasswordChange ? cls['divider-btn-active'] : '')}>
                            <span> Password Change </span>
                            <i></i>
                            <div></div>
                        </div>
                    </Divider>
                    { wantPasswordChange && <div className={cls['want-password-change']}>
                        <label htmlFor="oldpassword" className={cls['option']}>
                            <span>Old Password</span>
                            <input ref={oldPasswordRef} id="oldpassword" type="password" />
                        </label>
                        <label htmlFor="newpassword" className={cls['option']}>
                            <span>New Password</span>
                            <input ref={newPasswordRef} id="newpassword" type="password" />
                        </label>
                    </div>}
                    {error && <span className={cls['upload-error']}>{error}</span>}
                    <button type="submit" className={cls["submit-btn"]}>
                        {sendingPost ? <CircularProgress color='inherit' size={"2rem"} /> : "Save"}                 
                    </button>
              </div>
          </form>
      </Content>
  )
}

export default EditProfile