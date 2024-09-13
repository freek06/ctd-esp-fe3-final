import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validInfo, setValidInfo] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleNameInput = (e) => setName(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);

  const emailValidation = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidInfo(name.length > 5 && emailValidation(email));
    setShowMessage(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={handleNameInput} />
        <input type="email" placeholder="Email" onChange={handleEmailInput} />
        <textarea placeholder="Write your message here"></textarea>
        <button type="submit">Send</button>
      </form>
      {showMessage && (
        <p>{validInfo ? "Message sent successfully!" : "Please check your information and try again."}</p>
      )}
    </div>
  );
};

export default Form;
