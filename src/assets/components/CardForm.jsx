import { useFormik } from "formik";
import { useState } from "react";

const CardForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const formattedMessage = message
    .split("\n")
    .map((text, index) => <p key={index}>{text}</p>);
  return (
    <form
      action=""
      className="w-1/2 shadow-cust flex flex-col  gap-10 items-center p-10  max-md:p-4 max-md:w-full max-lg:gap-5 max-lg:text-sm"
    >
      <div className="flex flex-row gap-20 w-full max-md:flex-col max-lg:gap-4 ">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          id="name"
          className="w-full pl-6 py-2 max-lg:pl-4 border-black  border-[0.8px] rounded focus:border-[#0D82BE]"
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          id="email"
          className="w-full pl-6  py-2 max-lg:pl-4  border-black  border-[0.8px] rounded focus:border-[#0D82BE]"
        />
      </div>
      <div className="flex flex-col gap-10  max-lg:gap-4 w-full">
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          onChange={formik.handleChange}
          value={formik.values.subject}
          id="subject"
          className="w-full pl-6  py-2 max-lg:pl-4 border-black  border-[0.8px] rounded focus:border-[#0D82BE]"
        />
        <div>
          <textarea
            type="text"
            placeholder="Message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            id="message"
            className="w-full pl-6 pt-2 pb-[12rem]  max-lg:pl-4  border-black  border-[0.8px] rounded focus:border-[#0D82BE]"
          />
          {formattedMessage}
        </div>
      </div>
      <input
        type="submit"
        value="Send Message"
        className="bg-primary bg-opacity-90 text-white px-10 py-2 rounded hover:bg-opacity-100 self-start max-lg:text-sm"
      />
    </form>
  );
};
export default CardForm;
