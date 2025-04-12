import Contact from "./components/Contact";
import Data from "../src/components/data";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import defaultImage from "../src/assets/img_avatar.png";
import male from "../src/assets/img_avatar.png";
import female from "../src/assets/img_avatar2.png";
import ModalForm from "./components/ModalForm";
const App = () => {
  const [cards, updateCards] = useState([...Data]);
  const handleDelete = (id: number) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    updateCards(updatedCards);
  };
  const [prevCard, setPrevCard] = useState(false);
  const themeDeterminer = () => {
    const date = new Date();
    const currentHours = date.getHours();
    if (currentHours <= 7 || currentHours >= 19) {
      return true;
    } else {
      return false;
    }
  };

  const userTime = themeDeterminer();
  const [themeToggle, setThemeToggle] = useState(userTime);
  const createCard = () => {
    setPrevCard(true);
  };
  const closeModal = () => {
    setPrevCard(false);
  };
  const [dummyImage, setDummyImage] = useState(defaultImage);
  const [formData, setFormData] = useState({
    image: dummyImage,
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "+234",
    gender: "",
  });
  // const [selectedGender, setSelectedGender] = useState(
  //   Boolean(formData.gender)
  // );
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };
  const closePopUp = () => {
    setPrevCard(false);
  };
  function handleToggleEffect() {
    setThemeToggle((prevToggleValue) => {
      return !prevToggleValue;
    });
  }
  const handleChangePicture = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64String = reader.result;
        if (typeof base64String == "string") {
          localStorage.setItem("newImage", base64String);
          setDummyImage(localStorage.getItem("newImage")!);
        }
      };
    }
  };

  const lowerCasedFirstName = formData.first_name.toLowerCase();
  const lowerCasedLastName = formData.last_name.toLowerCase();
  const updatedLowerCasedFirstName =
    lowerCasedFirstName.charAt(0).toUpperCase() + lowerCasedFirstName.slice(1);
  const updatedLowerCasedLastName =
    lowerCasedLastName.charAt(0).toUpperCase() + lowerCasedLastName.slice(1);

  const updatedName = `${updatedLowerCasedFirstName}_${updatedLowerCasedLastName}`;
  const update = {
    email: formData.email,
    name: updatedName,
    image: dummyImage,
    id: cards.length,
    tel: formData.phone_number,
    // gender: formData.gender,
  };
  useEffect(() => {
    sessionStorage.setItem("reviewedFormData", JSON.stringify(update));
  }, [formData]);
  const storedFormData = JSON.parse(
    sessionStorage.getItem("reviewedFormData")!
  );

  function handleSubmit(event: any) {
    event.preventDefault();
    closePopUp();
    const renderData = {
      name: `${storedFormData.first_name}_${storedFormData.last_name}`,
      tel: storedFormData.phone_number,
      email: storedFormData.email,
      image: storedFormData.image,
      id: cards.length + 1,
    };
    const updatedFormData = { ...update, renderData };
    cards.push(updatedFormData);
    setFormData({
      image: dummyImage,
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "+234",
      gender: "",
    });
    setDummyImage(male);
    const notify = `Thank you ${update.name}, Your card as been created. Scroll down to check it out!`;
    window.alert(notify);
  }
  function handleSelection(event: any) {
    if (dummyImage === defaultImage && event.target.defaultValue === "male") {
      setDummyImage(male);
    } else if (
      dummyImage === defaultImage &&
      event.target.defaultValue === "female"
    ) {
      setDummyImage(female);
    }
  }
  console.log(formData.gender);
  return (
    <div className={`root ${themeToggle && "dark-bg" && "faint-effect"}`}>
      <Nav
        handleClick={createCard}
        toggle={themeToggle}
        handleToggleEffect={handleToggleEffect}
      />
      <div id="container">
        {cards.length !== 0 ? (
          cards.map((item) => (
            <Contact
              key={cards.indexOf(item)}
              name={item.name}
              mail={item.email}
              prev_image={item.image}
              number={item.tel}
              toggle={themeToggle}
              deleteFunc={() => handleDelete(item.id)}
            />
          ))
        ) : (
          <div className={`message ${themeToggle && "darkmode-color"}`}>
            <p>
              No card item found. Click the "create card" button to create one
            </p>
          </div>
        )}
        {prevCard && (
          <ModalForm
            // image={formData.image}
            firstName={formData.first_name}
            lastName={formData.last_name}
            userMail={formData.email}
            phone_number={formData.phone_number}
            handleChange={() => handleChange(event)}
            toggle={themeToggle}
            handleSelection={() => handleSelection(event)}
            handleChangePicture={() => handleChangePicture(event)}
            handleSubmit={() => handleSubmit(event)}
          />
        )}
        {prevCard && <div id="overlay" onClick={closeModal}></div>}
      </div>
    </div>
  );
};
export default App;
