import * as React from 'react'

export default function Contact() {
  const [contactForm, setContactForm] = React.useState({})
  const [animate, setAnimate] = React.useState(false)
  const [formData, setFormData] = React.useState(
    {
      contactGroup: "",
      firstName: "", 
      lastName: "", 
      email: "", 
      message: "",
    }
  )

  console.log(formData.contactGroup)

  const [formInputsValid, setFormInputsValid] = React.useState(
    {
      contactGroup: false,
      firstName: false, 
      lastName: false, 
      email: false, 
      message: false,
    }
  )
  const [contactGroupField, setContactGroupField] = React.useState("")
  const [firstNameField, setFirstNameField] = React.useState("")
  const [lastNameField, setLastNameField] = React.useState("")
  const [emailField, setEmailField] = React.useState("")
  const [messageField, setMessageField] = React.useState("")


  React.useEffect(() => {
    setContactGroupField(document.querySelector(".contactGroupField"))
    setFirstNameField(document.querySelector(".firstNameField"))
    setLastNameField(document.querySelector(".lastNameField"))
    setEmailField(document.querySelector(".emailField"))
    setMessageField(document.querySelector(".messageField"))
  }, [])
 
  React.useEffect(() => {
    setContactForm(document.querySelector(".contact-form"))
  }, [])

  // React.useEffect(() => {
  //   if(animate === false) {
  //     setAnimate(true)
  //   }
  //   setTimeout(() =>{
  //     if(animate) {
  //       animateThankYouModal();
  //     }
  //   }, 100)
  // }, [animate])

  function animateThankYouModal() {
    if(contactForm.classList) {
      contactForm.classList.add("active") 
    }
  }

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
    validateFormInputs()
  }

  
  function handleSubmit(event) {
    event.preventDefault()
    if(formInputsValid.contactGroup && formInputsValid.firstName && formInputsValid.lastName && formInputsValid.email && formInputsValid.message) {
      // navigate('/thankyou')
    } else {
      if(contactGroupField.value.length === 0) {
        contactGroupField.classList.add("input-error")
      }
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
    if(contactGroupField.value.length === 0 && document.activeElement === contactGroupField) {
      contactGroupField.classList.add("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, contactGroup: false}
      })
    } else if(contactGroupField.value.length > 0) {
      contactGroupField.classList.remove("input-error")
      setFormInputsValid(prevFormInputsValid => {
        return {...prevFormInputsValid, firstName: true}
      })
    }

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
    <form className='form contact-form'>
      
      <div className="form-row form-row-name">
        <br />
        <label htmlFor="contactGroup" className='select-label'>Which group would you like to contact?
          <select 
              className="contactGroupField"
              id="contactGroup"
              value={formData.contactGroup}
              onChange={handleChange}
              name="contactGroup"
          > 
              <option value="" disabled hidden>Choose Group To Contact</option>
              <option value="" disabled>Court Appointed Family Defense:</option>
              <option value="legal">Legal Services</option>
              <option value="mentors">Mentor Parents</option>
              <option value="social-workers">Social Workers</option>
              <option value="" disabled>Prevention Services:</option>
              <option value="first-call">First Call For Families</option>
              <option value="corridor">Corridor</option>
              <option value="" disabled>Other:</option>
              <option value="general">General Information</option>
              <option value="general">Interested In Funding DAC</option>
              <option value="media">Want To Learn More</option>
          </select>
        </label>
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
        >  
        </textarea>
      </div>
      <button 
        type='submit' 
        className='btn contact-btn cta-btn btn-hover'
        onClick={handleSubmit}
        >Submit</button>
    </form>
  )
}