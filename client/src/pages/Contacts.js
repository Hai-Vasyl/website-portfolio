import React, { useState } from "react"
import axios from "axios"
import { RiMailSendLine } from "react-icons/ri"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { ImWarning } from "react-icons/im"
import { BsCheck } from "react-icons/bs"
import contactsImage from "../images/undraw_delivery_address_03n0.svg"

function ContactsSection() {
  const initialFrom = [
    { param: "name", name: "Contact name", value: "", msg: "" },
    { param: "email", name: "Email address", value: "", msg: "" },
    { param: "message", name: "Message", value: "", msg: "" },
  ]
  const [form, setForm] = useState(initialFrom)
  const [load, setLoad] = useState(false)
  const [isPosted, setIsPosted] = useState(false)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      let isEmptyField = false

      if (isPosted) {
        return
      }

      setForm(
        form.map((item) => {
          if (!item.value) {
            item.msg = "Fill this field!"
            isEmptyField = true
          }
          return item
        })
      )

      if (isEmptyField) {
        return
      }

      setLoad(true)
      const [name, email, message] = form
      await axios({
        url: "/post-email",
        method: "post",
        data: { name: name.value, email: email.value, message: message.value },
      })
      setLoad(false)
      setIsPosted(true)
      setForm(initialFrom)
    } catch (error) {
      const { errors } = error.response.data
      setForm(
        form.map((item) => {
          errors.forEach((err) => {
            if (item.param === err.param) {
              item.msg = err.msg
            }
          })
          return item
        })
      )
      setLoad(false)
    }
  }

  const handleChange = (e) => {
    setForm(
      form.map((item) => {
        if (item.param === e.target.name) {
          item.msg = ""
          item.value = e.target.value
        }
        return item
      })
    )
  }

  const fields = form.map((item) => {
    return (
      <label key={item.param} className='field'>
        <span className='field__name'>{item.name}</span>
        {item.param === "message" ? (
          <textarea
            className={`field__textarea field__input ${
              item.msg && "field__input--error"
            }`}
            name={item.param}
            value={item.value}
            onChange={handleChange}
          ></textarea>
        ) : (
          <input
            className={`field__input ${item.msg && "field__input--error"}`}
            name={item.param}
            type={item.param === "email" ? "email" : "text"}
            value={item.value}
            onChange={handleChange}
            autoComplete='off'
          />
        )}
        <span className={`field__msg ${item.msg && "field__msg--active"}`}>
          <ImWarning className='field__msg-icon' />
          <span className='field__msg-name'>{item.msg}</span>
        </span>
      </label>
    )
  })

  return (
    <div className='wrapper'>
      <h2 className='title'>Contact me</h2>

      <div className='contacts'>
        <div className='form'>
          <div className={`loader ${load && "loader--load"}`}>
            <div className='loader__spinner'></div>
          </div>
          <form onSubmit={handleSubmit} className='form__fields'>
            {fields}
            <button className='form__btn-handler'></button>
          </form>
          <div className='form__btns'>
            <a
              href='https://github.com/Hai-Vasyl'
              target='_blank'
              rel='noopener noreferrer'
              className='form__link'
            >
              <FaGithub className='form__icon' />
            </a>
            <a
              href='https://www.linkedin.com/in/vasyl-hai-2819051b1/'
              target='_blank'
              rel='noopener noreferrer'
              className='form__link'
            >
              <FaLinkedinIn className='form__icon' />
            </a>
            <button
              className={`form__submit btn btn-primary ${
                isPosted && "form__submit--disabled"
              }`}
              onClick={handleSubmit}
            >
              {isPosted ? (
                <BsCheck className='btn__icon' />
              ) : (
                <RiMailSendLine className='btn__icon' />
              )}
              <span className='btn__name'>
                {isPosted ? "Posted" : "Submit"}
              </span>
            </button>
          </div>
        </div>

        <div className='contacts__image-side'>
          <img
            className='contacts__image'
            src={contactsImage}
            alt='contactsImg'
          />
        </div>
      </div>
    </div>
  )
}

export default ContactsSection
