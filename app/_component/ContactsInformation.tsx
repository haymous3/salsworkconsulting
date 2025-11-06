import {PhoneIcon, EnvelopeIcon, MapPinIcon} from "@heroicons/react/24/solid";
import Button from "./Button";

const ContactsInformation = () => {
  const contactDetails = [
    {
      heading: "PHONE NUMBER",
      icon: <PhoneIcon className="w-8 h-8 text-primary" />,
      text: "+2348137386134",
      button: "CALL US ON",
    },
    {
      heading: "ADDRESS",
      icon: <MapPinIcon className="w-8 h-8 text-primary" />,
      text: "Federal University of Agriculture, Abeokuta",
      button: "View on Map",
    },
    {
      heading: "EMAIL",
      icon: <EnvelopeIcon className="w-8 h-8 text-primary" />,
      text: "adeyemoaid@gmail.com",
      button: "Send a Message",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 px-6 py-12 bg-[#f9f9f9]">
      {contactDetails.map((contact, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-8 w-[300px] hover:-translate-y-2 transform"
        >
          <div className="p-4 bg-blue-50 rounded-full mb-4 transition-all duration-300 hover:bg-blue-100">
            {contact.icon}
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {contact.heading}
          </h3>

          <p className="text-gray-600 mb-4">{contact.text}</p>

          {contact.button && (
            <Button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              {contact.button}
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactsInformation;
