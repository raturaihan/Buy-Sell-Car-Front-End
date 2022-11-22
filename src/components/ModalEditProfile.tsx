import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../interface";
import { UserDispatch } from "../redux/actions/typesActions";
import { updateUserDetail } from "../redux/actions/userActions";
import { RootState } from "../redux/reducers/indexReducers";
import { BlueGreenButton } from "../styles/Styled";

function ModalEditProfile() {
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState<string>();

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "final_project_profile_image");
    const uploadPost = await axios.post(
      "https://api.cloudinary.com/v1_1/dl6dxfigu/image/upload",
      formData
    );
    setImagePreviewUrl(uploadPost.data.secure_url);
  };

  // const { userUpdate} = useSelector(
  //   (state: RootState) => state.userReducer
  // );
  const userDispatch: UserDispatch = useDispatch();

  const [input, setInput] = useState({
    full_name: "",
    phone: "",
    profile_img: "",
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData: IUser = {
      full_name: input.full_name,
      phone: input.phone,
      profile_img: imagePreviewUrl?.toString(),
    };
    userDispatch(updateUserDetail(userData));
  };

  return (
    <div
      className="modal"
      tabIndex={-1}
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="d-flex justify-content-center mt-4">
              <h3>Edit Profile</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="full_name" className="form-label fw-bold mt-4">
                Full Name
              </label>
              <input
                name="full_name"
                type="text"
                className="form-control"
                id="full_name"
                value={input.full_name}
                onChange={handleChange}
              />
              <label htmlFor="phone" className="form-label fw-bold mt-2">
                Phone
              </label>
              <input
                name="phone"
                type="text"
                className="form-control"
                id="phone"
                value={input.phone}
                onChange={handleChange}
              />
              <div className="d-flex gap-3 mt-3">
                <label
                  htmlFor="profile_img"
                  className="form-label fw-bold mt-2"
                >
                  Profile Image
                </label>
                <input
                  type="File"
                  name="profile_img"
                  onChange={handleChangeImage}
                />
              </div>
              <div className="d-flex justify-content-center mt-5 mb-3">
                <BlueGreenButton type="submit" data-bs-dismiss="modal">
                  Edit Profile
                </BlueGreenButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEditProfile;
