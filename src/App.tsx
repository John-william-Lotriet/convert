import React from "react";

const App: React.FC = () => {
  return (
    <div>
      <header
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('hero-bg.jpg')" }}
      >
        <div className="bg-black w-10/12 bg-opacity-50 px-20 py-40 rounded text-center">
          <h1 className="text-5xl font-bold mb-4">JustJits</h1>
          <p className="text-2xl mb-6">Just Jits, no fluff</p>
          <button
            onClick={() =>
              document
                .getElementById("signup")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Notified & Get a Discount!
          </button>
        </div>
      </header>

      <main className="container mx-auto p-6 mt-10">
        <section id="description" className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            About JustJits
          </h2>
          <p className="text-lg text-center">
            JustJits is a Jiu Jitsu gym template focused on turning online
            visitors into people who come and try a class. Our theme is designed
            to provide a seamless and engaging experience for potential members,
            making it easy for them to find information, see class schedules,
            and sign up for a trial class.
          </p>
        </section>
        <section id="features" className="bg-gray-100 p-6 rounded-lg mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">Features</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              Customizable Design: Tailor the look and feel of your site easily.
            </li>
            <li>
              Class Schedules: Display your class schedules in an intuitive
              layout.
            </li>
            <li>
              Instructor Profiles: Showcase detailed profiles of your
              instructors.
            </li>
            <li>
              Trial Class Sign-Ups: Convert visitors into trial class
              participants with ease.
            </li>
            <li>
              Responsive Design: Ensure your site looks great on all devices.
            </li>
          </ul>
        </section>
        <section id="future-features" className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            Future Enhancements
          </h2>
          <p className="text-lg text-center mb-4">
            As we grow, so will our feature set. Look forward to:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Member Management: Track attendance and progress.</li>
            <li>
              Billing and Payments: Automated invoicing and payment processing.
            </li>
            <li>
              Event Management: Organize and promote seminars and competitions.
            </li>
            <li>Inventory Management: Track and sell merchandise.</li>
            <li>
              Advanced Analytics: Gain insights into your gym's performance.
            </li>
          </ul>
        </section>
        <section id="signup" className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-4">
            Be the First to Know
          </h2>
          <p className="text-lg text-center mb-6">
            Sign up now to get exclusive updates and a discount when we launch!
          </p>
          <form
            name="signup"
            method="POST"
            data-netlify="true"
            className="flex flex-col items-center"
          >
            <input type="hidden" name="form-name" value="signup" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-3 border rounded mb-4 w-full max-w-md"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Notify Me!
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-6 text-center w-full">
        <p>&copy; 2024 JustJits. All rights reserved.</p>
        <p>
          Contact us at info@justjits.com | Follow us on{" "}
          <a href="#" className="text-blue-400">
            Facebook
          </a>
          ,{" "}
          <a href="#" className="text-blue-400">
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
