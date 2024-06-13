import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./Header";

const App: React.FC = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consentGiven: false,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 50) {
        setShowHeader(true);
      } else {
        setLastInteractionTime(Date.now());
      }
    };

    const handleInactivity = () => {
      if (Date.now() - lastInteractionTime > 2000) {
        setShowHeader(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    const inactivityInterval = setInterval(handleInactivity, 1000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(inactivityInterval);
    };
  }, [lastInteractionTime]);

  const isFormValid = formData.name && formData.email && formData.consentGiven;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <Header isVisible={showHeader} />
      <header
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('showcase.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
        }}
      >
        <div className="bg-black w-full h-full min-h-screen bg-opacity-60 px-20 py-40 rounded text-center flex justify-center items-center flex-col">
          <h1 className="text-5xl font-bold mb-4">Just Jits</h1>
          <p className="text-2xl mb-6">Just Jits, no fluff</p>
          <button
            onClick={() =>
              document
                .getElementById("description")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Find out more
          </button>
        </div>
      </header>

      <main>
        <section
          id="description"
          className="min-h-screen mb-10 flex flex-col items-center justify-center"
        >
          <div className="flex flex-col max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-4">
              About JustJits
            </h2>
            <p className="text-lg text-center">
              JustJits is a Jiu Jitsu gym template focused on turning online
              visitors into people who come and try a class. Our theme is
              designed to provide a seamless and engaging experience for
              potential members, making it easy for them to find information,
              see class schedules, and sign up for a trial class.
            </p>
          </div>
        </section>
        <section
          id="features"
          className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
          style={{
            backgroundImage: "url('showcase.jpg')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
          }}
        >
          <div className="bg-black w-full h-full min-h-screen bg-opacity-60 px-20 py-40 rounded text-center flex justify-center items-center flex-col">
            <h2 className="text-3xl font-bold text-center mb-4">Features</h2>
            <ul className="list-disc list-inside text-lg space-y-2 flex flex-col items-center">
              <li className="w-full text-left">
                Customizable Design: Tailor the look and feel of your site
                easily.
              </li>
              <li className="w-full text-left">
                Class Schedules: Display your class schedules in an intuitive
                layout.
              </li>
              <li className="w-full text-left">
                Instructor Profiles: Showcase detailed profiles of your
                instructors.
              </li>
              <li className="w-full text-left">
                Trial Class Sign-Ups: Convert visitors into trial class
                participants with ease.
              </li>
              <li className="w-full text-left">
                Responsive Design: Ensure your site looks great on all devices.
              </li>
            </ul>
          </div>
        </section>
        <section
          id="roadmap"
          className="min-h-screen mb-10 flex flex-col items-center justify-center"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Roadmap</h2>
          <ul className="list-disc list-inside text-lg space-y-2 flex flex-col items-center">
            <li className="w-full text-left">
              Member Management: Track attendance and progress.
            </li>
            <li className="w-full text-left">
              Billing and Payments: Automated invoicing and payment processing.
            </li>
            <li className="w-full text-left">
              Event Management: Organize and promote seminars and competitions.
            </li>
            <li className="w-full text-left">
              Inventory Management: Track and sell merchandise.
            </li>
            <li className="w-full text-left">
              Advanced Analytics: Gain insights into your gym's performance.
            </li>
          </ul>
        </section>
        <section
          id="signup"
          className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
          style={{
            backgroundImage: "url('showcase.jpg')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
          }}
        >
          <div className="bg-black w-full h-full min-h-screen bg-opacity-60 px-20 py-40 rounded text-center flex justify-center items-center flex-col">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-center mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-center mb-4">
                We are nearing the end of development for the initial release of
                JustJits. Join our waiting list to receive updates on the
                template and get a 10% discount when we launch!
              </p>
              <form
                name="signup"
                method="POST"
                data-netlify="true"
                className="flex flex-col items-center"
              >
                <input type="hidden" name="form-name" value="signup" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="p-3 border rounded mb-4 w-full max-w-md text-black"
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="p-3 border rounded mb-4 w-full max-w-md text-black"
                  onChange={handleInputChange}
                />
                <label className="flex items-center mb-4 flex-nowrap">
                  <input
                    type="checkbox"
                    name="consentGiven"
                    required
                    className="mr-2"
                    onChange={handleInputChange}
                  />
                  I consent to receiving updates about the Just Jits Template.
                </label>
                <button
                  type="submit"
                  className={`font-bold py-2 px-4 rounded ${
                    isFormValid
                      ? "bg-gray-800 hover:bg-gray-700 text-white"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                  disabled={!isFormValid}
                >
                  Notify Me!
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-6 text-center w-full">
        <p>&copy; 2024 JustJits. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
