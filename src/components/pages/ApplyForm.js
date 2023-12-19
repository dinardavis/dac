import * as React from "react";
import ScrollToTop from '../ScrollToTop'
export default function ApplyForm(props) {


  const [contactForm, setContactForm] = React.useState({});
  const [animate, setAnimate] = React.useState(false);
  const [formData, setFormData] = React.useState({
    jobTitle: props.jobTitle,
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formInputsValid, setFormInputsValid] = React.useState(
    {
      firstName: false, 
      lastName: false, 
      email: false, 
      message: false,
    }
  )
  const [firstNameField, setFirstNameField] = React.useState("")
  const [lastNameField, setLastNameField] = React.useState("")
  const [emailField, setEmailField] = React.useState("")
  const [messageField, setMessageField] = React.useState("")


  React.useEffect(() => {
    setFirstNameField(document.querySelector(".firstNameField"))
    setLastNameField(document.querySelector(".lastNameField"))
    setEmailField(document.querySelector(".emailField"))
    setMessageField(document.querySelector(".messageField"))
  }, [])
 
  React.useEffect(() => {
    setContactForm(document.querySelector(".contact-form"))
  }, [])

  React.useEffect(() => {
    if(animate === false) {
      setAnimate(true)
    }
    setTimeout(() =>{
      if(animate) {
        animateThankYouModal();
      }
    }, 100)
  }, [animate])

  function animateThankYouModal() {
    if(contactForm.classList) {
      contactForm.classList.add("active") 
    }
  }

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
          ...prevFormData,
          [event.target.name]: event.target.value
      }
    })
    validateFormInputs()
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    if(formInputsValid.firstName && formInputsValid.lastName && formInputsValid.email && formInputsValid.message) {
      // navigate('/thankyou')
    } else {
      if(firstNameField.value.length === 0) {
        firstNameField.classList.add("input-error")
      }
      if(lastNameField.value.length === 0) {
        lastNameField.classList.add("input-error")
      }
      if(emailField.value.length === 0) {
        emailField.classList.add("input-error")
      }
      if(messageField.value.length === 0) {
        messageField.classList.add("input-error")
      }
    }
  }

  function validateFormInputs() {
    if(firstNameField.value.length === 0 && document.activeElement === firstNameField) {
      firstNameField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, firstName: false}
      })
    } else if(firstNameField.value.length > 0) {
      firstNameField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, firstName: true}
      })
    }

    if(lastNameField.value.length === 0 && document.activeElement === lastNameField) {
      lastNameField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, lastName: false}
      })
    } else if(lastNameField.value.length > 0) {
      lastNameField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, lastName: true}
      })
    }

    if(emailField.value.length === 0 && document.activeElement === emailField) {
      emailField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, email: false}
      })
    } else if(emailField.value.length > 0) {
      emailField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, email: true}
      })
    }

    if(messageField.value.length === 0 && document.activeElement === messageField) {
      messageField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, message: false}
      })
    } else if(messageField.value.length > 0) {
      messageField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, message: true}
      })
    }
  }

  return (
    <section className='contact-section'>
      <ScrollToTop />
      <form 
      className="form contact-form apply-form"
      onClick={props.toggleShowApplyForm}
      >
        <ScrollToTop />
        <div 
          className="apply-form-content"
          onClick={e => e.stopPropagation()}
        >
        <div className="apply-form-close-btn" onClick={props.toggleShowApplyForm}>X</div>
        <div className="form-row form-row-name">
          <br />
          <input
            className="jobTitleField"
            disabled
            type="text"
            placeholder="Job Title"
            onChange={handleChange}
            name="jobTitle"
            id="jobTitle"
            value={`Position Title: ${formData.jobTitle}`}
          />
          <input
            className="firstNameField"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            id="firstName"
            value={formData.firstName}
          />
          <input
            className="lastNameField"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            id="lastName"
            value={formData.lastName}
          />
        </div>
        <div className="form-row">
          <input
            className="emailField"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </div>
        <div className="form-row">
          <textarea
            className="messageField"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
          ></textarea>
        </div>
        <div className="upload-btn-container" >
          <div className="upload-btn">Upload<br></br>Resume</div>
          <div className="upload-btn">Upload<br></br>Cover Letter</div>
        </div>
        <button 
          type="submit" 
          className="btn contact-btn cta-btn btn-hover"
          onClick={handleSubmit}
        >
          Submit
        </button>
        </div>
      </form>
      </section>
  );
}
