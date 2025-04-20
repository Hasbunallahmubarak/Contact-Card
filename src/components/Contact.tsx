interface Props {
  key: number;
  name: string;
  number: string;
  mail: string;
  prev_image: any;
  toggle: boolean;
  deleteFunc: () => void;
}
const Contact = ({
  name,
  number,
  mail,
  prev_image,
  toggle,
  deleteFunc,
}: Props) => {
  return (
    <div>
      <div className="contact-card-container">
        <div className={`contact-card ${toggle && "dark-bg"}`}>
          <span className="cancel" onClick={deleteFunc}>
            &times;
          </span>
          <div className="image">
            <img src={prev_image} alt={`${name.toLowerCase()} picture`} />
          </div>
          <h2 className="name">{name}</h2>
          <h4 className="number">
            <a href={`tel: ${number}`} className="link">
              <i className="bi-telephone-fill"></i> {number}
            </a>
          </h4>
          <h4 className="mail">
            <a href={`mailto: ${mail}`} className="link">
              <i className="bi-envelope-fill"></i> {mail}
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
