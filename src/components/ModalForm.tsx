interface Props {
  handleChange: () => void;
  // image: any;
  firstName: string;
  lastName: string;
  userMail: string;
  toggle: boolean;
  phone_number: string;
  femaleRadioBoolean?: boolean;
  maleRadioBoolean?: boolean;
  handleChangePicture: () => void;
  handleSubmit: () => void;
  handleSelection: () => void;
}
const ModalForm = ({
  handleChange,
  handleChangePicture,
  firstName,
  toggle,
  lastName,
  userMail,
  phone_number,
  handleSubmit,
  handleSelection,
}: Props) => {
  return (
    <>
      <div className={`form-container ${toggle && "dark-bg"}`}>
        <form id="profile" onSubmit={handleSubmit}>
          <span className="form-item">
            <label htmlFor="">Your picture:</label>
            <span>
              <i className="icon icon-name bi-camera-fill"></i>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChangePicture}
                className={`${toggle && "dark-bg"}`}
              />
            </span>
          </span>
          <span className="form-item">
            <label htmlFor="">First Name:</label>
            <span>
              <i className="icon icon-name bi-person-fill"></i>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                value={firstName}
                className={`${toggle && "dark-bg"}`}
                onChange={handleChange}
              />
            </span>
          </span>
          <span className="form-item">
            <label>Last Name:</label>
            <span>
              <i className="icon icon-name bi-person-fill"></i>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={handleChange}
                className={`${toggle && "dark-bg"}`}
              />
            </span>
          </span>
          <span className="form-item">
            <label>E-mail:</label>
            <span>
              <i className="icon icon-name bi-envelope-fill"></i>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={userMail}
                onChange={handleChange}
                className={`${toggle && "dark-bg"}`}
              />
            </span>
          </span>
          <span className="form-item">
            <label>Phone No. :</label>
            <span>
              <i className="icon icon-name bi-telephone-plus"></i>
              <input
                type="tel"
                placeholder="Phone number"
                required
                name="phone_number"
                value={phone_number}
                onChange={handleChange}
                className={`${toggle && "dark-bg"}`}
              />
            </span>
          </span>
          <span className="form-item">
            <label htmlFor="gender">Gender:</label>
            <span className="no-bg">
              <span className={`${toggle && "dark-bg"}`}>
                <i className="icon icon-gender">
                  <label htmlFor="male">
                    Male <i className="icon bi-gender-male"></i>
                  </label>
                </i>
                <input
                  type="radio"
                  required
                  name="gender"
                  id="male"
                  value="male"
                  onChange={handleChange}
                  onClick={handleSelection}
                />
              </span>
              <span className={`${toggle && "dark-bg"}`}>
                <i className="icon icon-gender">
                  <label htmlFor="female">
                    Female <i className="icon bi-gender-female"></i>
                  </label>
                </i>
                <input
                  type="radio"
                  required
                  name="gender"
                  id="female"
                  value="female"
                  onChange={handleChange}
                  onClick={handleSelection}
                />
              </span>
            </span>
          </span>
          <input type="submit" value="Create card" id="submit-button" />
        </form>
      </div>
    </>
  );
};

export default ModalForm;
