import { memo } from "react";

const icons = {
  star: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-8 h-8 mb-4 transition-colors duration-300"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  ),
  tag: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-8 h-8 mb-4 transition-colors duration-300"
      aria-hidden="true"
    >
      <path d="M22.24 12.09L13.5 3.36c-.39-.39-.9-.58-1.42-.58H4.12c-1.1 0-2 .9-2 2v7.96c0 .53.21 1.04.59 1.41l8.73 8.74c.78.78 2.05.78 2.83 0l7.96-7.97c.78-.78.78-2.05 0-2.83zm-12.24-3.09c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  ),
  terminal: (
    <svg
      width="24"
      height="48"
      viewBox="0 0 15 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 mb-4 transition-colors duration-300"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6H14.7V13.6266H14.2258V14.7999H0.474195V13.6266H0V6Z"
        fill="#BE81FB"
      />
      <path
        d="M7.6258 7.74992H8.38065L9.45 9.4612L10.5193 7.74992H11.3372L9.95322 9.96823L11.4 12.2499H10.4565L9.45 10.5386L8.44354 12.2499H7.5L8.94678 9.96823L7.5 7.74992H7.6258Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
      <path
        d="M6.03166 10.8125C5.9643 11.1249 5.89694 11.2499 5.42534 11.4999L4.95375 11.5625L4.48215 11.4999C4.21268 11.375 3.87582 11.1249 3.80844 10.6874C3.74107 10.2499 3.80844 7.74992 3.80844 7.74992H3.06737V10.8125C3 10.8125 3.40422 11.8749 3.87582 12.0624C4.3474 12.2499 4.40694 12.2177 4.95375 12.2499C5.41883 12.2405 5.66074 12.1823 6.03166 11.9999C6.57063 11.75 6.70538 11.4999 6.84012 10.8125C6.97485 10.1249 6.84012 7.74992 6.84012 7.74992H6.03166M6.03166 10.8125C6.03166 9.61645 6.03166 8.9459 6.03166 7.74992M6.03166 10.8125V7.74992"
        stroke="white"
        strokeWidth="0.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4.10662H14.7V1.46665L14.2258 1.17333V0.586665H13.5145V0H0.474195V0.586665H0V4.10662ZM8.06128 3.51997V1.75998H12.8032V3.51997H8.06128ZM4.74193 3.51997V1.75998H5.69032V3.51997H4.74193ZM3.31935 3.51997V1.75998H4.26774V3.51997H3.31935ZM1.8375 3.51997V1.75998H2.78589V3.51997H2.32591H1.8375Z"
        fill="#BE81FB"
      />
    </svg>
  ),
};

const features = [
  {
    title: "UI/UX Mudah",
    description:
      "Aliquam sed sapien congue dui laoreet hendrerit eget ac dolor.",
    icon: "terminal",
  },
  {
    title: "Fitur Menarik",
    description:
      "Aliquam sed sapien congue dui laoreet hendrerit eget ac dolor.",
    icon: "star",
  },
  {
    title: "Harga Terbaik",
    description:
      "Aliquam sed sapien congue dui laoreet hendrerit eget ac dolor.",
    icon: "tag",
  },
];

const DetailButton = ({ href }) => (
  <a
    href={href}
    className="flex items-center text-sm font-semibold mt-4 text-white transition-colors duration-300 group-hover:text-blue-500"
  >
    Detail
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-4 h-4 ml-1 transition-colors duration-300 group-hover:fill-blue-500"
    >
      <path d="M12 4l8 8-8 8-1.41-1.41L17.17 13H4v-2h13.17l-6.59-6.59L12 4z" />
    </svg>
  </a>
);

const BenefitFeature = memo(({ title, description, Icon }) => (
  <div className="group relative text-white p-4 rounded-xl max-w-sm transform transition duration-200 hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col items-start hover:bg-white hover:text-blue-500 overflow-hidden">
    <Icon />
    <h3 className="text-2xl font-bold mb-2 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-base transition-colors duration-300">{description}</p>
    <DetailButton href="#detail" />
  </div>
));

const Benefit = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-5xl font-bold mb-4">
              Kenapa Harus Pilih Livecst?
            </h2>
            <p className="text-lg">
              Phasellus varius erat sed sem venenatis aliquet. Aliquam sed
              sapien congue dui laoreet hendrerit eget ac dolor. Aenean euismod
              non nibh at rhoncus.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map(({ title, description, icon }) => (
              <BenefitFeature
                key={title}
                title={title}
                description={description}
                Icon={() => icons[icon]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
