import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import ContactFooter from "../../components/footer/ContactFooter";
import phone from "./cont.jpg"
import ReCAPTCHA from "react-google-recaptcha";
import 'animate.css';

export default function ContactUs() {
  const form = useRef();
  const [formStatus, setFormStatus] = React.useState("Send");
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false); // State for reCAPTCHA

  const resetForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isCaptchaChecked) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please complete the reCAPTCHA.',
      });
      return;
    }

    setFormStatus("Sending...");
    emailjs
      .sendForm('service_tfsl5g', 'template_afwt2gft', form.current, '5_mhEEZgXYyxuiO_F')
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("Send");
          Swal.fire({
            icon: 'success',
            title: 'Email Sent!',
            text: 'Thank you for contacting us. We will get back to you soon!',
          }).then(() => {
            resetForm();
          });
        },
        (error) => {
          console.log(error.text);
          setFormStatus("Send"); 
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Please try again later.',
          });
        }
      );
  };

  const dropShadowStyle = {
    width:'450px',
    display: 'block',
    margin: '0 auto'
  };

  return (
    <>
      <div className="container mx-auto py-7 md:px-0 bg-gray-100">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">


      <div >
          <h1 className="text-4xl bold text-blue-500 text-center ">Reach out to us today.</h1>
          <img src={phone} alt="" style={dropShadowStyle} />
          <p className="text-xl">We'd love to hear from you! Have a question or want to chat? Drop us a line and we'll get in touch soon.</p>
      </div>




        <div className="max-w-md w-full px-4 py-4 bg-white rounded-lg shadow-lg  animate__animated animate__fadeInRight animate__delay-0.5s">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="font-bold block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full names"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+254712345678"
                required
                pattern="^\+(?:[0-9] ?){6,14}[0-9]$"
                title="Phone number must be in the format +1234567890"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
              ></textarea>
            </div>
            
            <ReCAPTCHA sitekey="6LcbRqwpAAAAAJavczV3RNMvEN3Aor0NGs770sAP" onChange={() => setIsCaptchaChecked(true)} />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 rounded focus:outline-none focus:ring focus:ring-opacity-50"
            >
              {formStatus}
            </button>
          </form>
        </div>
      </div>
      </div>
      <ContactFooter/>
    </>
  );
}
