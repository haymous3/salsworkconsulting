const ContactUsForm = () => {
  return (
    <div className="pt-10 pb-20 text-center bg-[#E1E1E1] mx-5 2xl:mx-40  my-5 2xl:my-40 rounded-sm">
      <h2 className="font-bold text-2xl">
        Drop Us a <span className="text-primary">Message</span>
      </h2>
      <p className="my-5 font-semibold text-lg text-[#666666]">
        Use the form below to quickly get in touch with us
      </p>

      <form action="" className="w-full px-5 2xl:px-0 2xl:w-[60%] mx-auto">
        <div className="flex flex-wrap gap-3 2xl:gap-6 ">
          <div className="w-full 2xl:w-[48.5%]">
            <label htmlFor="name" className="hidden">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="border-2 border-[#fff] w-full h-[60] rounded-sm bg-white px-5"
            />
          </div>
          <div className="w-full 2xl:w-[48.5%]">
            <label htmlFor="name" className="hidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border-2 border-[#fff] w-full h-[60] rounded-sm bg-white px-5"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-3 2xl:mt-10 2xl:gap-6 ">
          <div className="w-full 2xl:w-[48.5%]">
            <label htmlFor="name" className="hidden">
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              placeholder="Phone"
              className="border-2 border-[#fff] w-full h-[60] rounded-sm bg-white px-5"
            />
          </div>
          <div className="w-full 2xl:w-[48.5%]">
            <label htmlFor="name" className="hidden">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="border-2 border-[#fff] w-full h-[60] rounded-sm bg-white px-5"
            />
          </div>
        </div>
        <div className="mt-3 2xl:mt-10">
          <label htmlFor="message" className="hidden">
            Message
          </label>
          <input
            type="text"
            id="message"
            placeholder="Message"
            className="border-2 border-[#fff] w-full h-[120] rounded-sm bg-white px-5"
          />
        </div>
        <input
          type="submit"
          value="SUBMIT"
          className="flex justify-end mt-10  bg-primary px-8 py-4 rounded-sm text-white font-semibold cursor-pointer"
        />
      </form>
    </div>
  );
};

export default ContactUsForm;
