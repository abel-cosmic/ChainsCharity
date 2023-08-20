import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const CardForm = () => {
  const { t } = useTranslation();
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const onSubmit = (values) => {
    console.log("formik data", values);
  };
  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = t("required");
    }
    if (!values.email) {
      errors.email = t("required");
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = t("invalid-email");
    }
    if (!values.subject) {
      errors.subject = t("required");
    }
    if (!values.message) {
      errors.message = t("required");
    }
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const [message, setMessage] = useState("");

  const formattedMessage = message
    .split("\n")
    .map((text, index) => <p key={index}>{text}</p>);

  const variants = {
    initial: { scaleX: 0, scaleY: 0, opacity: 0 },
    animate: {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      transition: { delay: 1, duration: 1.2 },
    },
    whileFocus:{ }
  };
  const inputs = {
    whileFocus :{scale:1.4}
  }
  return (
    <motion.form
      variants={variants}
      initial="initial"
      animate="animate"
      whileFocus="whileFocus"
      onSubmit={formik.handleSubmit}
      className="w-full shadow-cust flex flex-col  gap-10 items-center p-10  max-md:p-4 max-md:w-full max-lg:gap-8 max-lg:text-sm"
    >
      <div className="flex flex-row gap-12 w-full max-md:flex-col max-lg:gap-4 ">
        <div className="relative w-full">
          {formik.touched.name && formik.errors.name ? (
            <div className="validate">{formik.errors.name}</div>
          ) : null}
          <motion.input
          variants={inputs}
            type="text"
            placeholder={t("your-name")}
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            id="name"
            className="w-full pl-6 py-2 max-lg:pl-4 border-black  border-[0.8px] rounded focus:border-[#0D82BE]"
          />
        </div>
        <div className="relative w-full">
          {formik.touched.email && formik.errors.email ? (
            <div className="validate">{formik.errors.email}</div>
          ) : null}
          <motion.input
          variants={inputs}
            type="email"
            placeholder={t("your-email")}
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            id="email"
            className="w-full pl-6  py-2 max-lg:pl-4  border-black  border-[0.8px] rounded focus:border-[#0D82BE]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10  max-lg:gap-8 w-full">
        <div className="relative w-full">
          {formik.touched.subject && formik.errors.subject ? (
            <div className="validate">{formik.errors.subject}</div>
          ) : null}
          <motion.input
          variants={inputs}
            type="text"
            placeholder={t("subject")}
            name="subject"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.subject}
            id="subject"
            className="w-full pl-6  py-2 max-lg:pl-4 border-black  border-[0.8px] rounded focus:border-[#0D82BE]"
          />
        </div>
        <div className="relative w-full">
          {formik.touched.message && formik.errors.message ? (
            <div className=" self-start text-[#f00] text-[10px] absolute  left-0 lg:bottom-[16.5rem] max-lg:bottom-[16rem] font-semibold  ">
              {formik.errors.message}
            </div>
          ) : null}
          <motion.textarea
          variants={inputs}
            type="text"
            placeholder={t("message")}
            name="message"
            onBlur={formik.handleBlur}
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
        value={t("send-message")}
        className="bg-primary cursor-pointer bg-opacity-90 text-white px-10 py-2 rounded hover:bg-opacity-100 max-md:self-start max-lg:text-sm"
      />
    </motion.form>
  );
};
export default CardForm;
