import React from "react";

export default function MailingList() {
  const [mailingListInfo, setMailingListInfo] = React.useState(
    {
      name: "",
      email: "", 
    }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setMailingListInfo(prevMailingList => {
        return {
            ...prevMailingList,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }

  return (
    <div className="mailing-list">
      <p className="mailing-list-copy">Join our mailing list to be kept up to date on what is happening at DAC!</p>
      <form className="mailing-list-form">
        <input
          className="mailing-list-input"
          type="email"
          placeholder="Your email address"
          onChange={handleChange}
          name="email"
          id="email"
          value={mailingListInfo.email}
        />
        <button type="submit" className="mailing-list-btn">Submit</button>
      </form>
    </div>
  )
}