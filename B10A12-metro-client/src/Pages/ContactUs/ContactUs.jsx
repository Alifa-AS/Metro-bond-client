import React from "react";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import coverImg from '../../assets/Cover/cover.jpg'
import Cover from "../Shared/Cover/Cover";

const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  return (
    <div>
      <Helmet>
        <title>Metro || Contact Us</title>
      </Helmet>
      <Cover img={coverImg} title="Contact Us" />
      
       {/* Contact Section */}
       <div className="container mx-auto py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10 underline text-yellow-400">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8 py-8 bg-pink-50">
          <div className="space-y-4 flex justify-center items-center flex-col">
            <p><strong>Address:</strong> Dhaka 1205, Bangladesh</p>
            <p><strong>Phone:</strong> +123 456 789</p>
            <p><strong>Email:</strong> info@gmail.com</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg h-32"
              required
            ></textarea>
            <button type="submit" className="bg-pink-400 text-white px-6 py-3 rounded-lg w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-96">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509019!2d144.95565131567598!3d-37.81724897975124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce840!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1613965560442!5m2!1sen!2sau"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
