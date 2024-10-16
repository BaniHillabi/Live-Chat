import { memo } from "react";
import { Title } from "@/components/ui/text";
import { Paragraph } from "@/components/ui/paragraph";

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-8 h-8 mb-4 transition-colors duration-300"
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

const TagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-8 h-8 mb-4 transition-colors duration-300"
    aria-hidden="true"
  >
    <path d="M22.24 12.09L13.5 3.36c-.39-.39-.9-.58-1.42-.58H4.12c-1.1 0-2 .9-2 2v7.96c0 .53.21 1.04.59 1.41l8.73 8.74c.78.78 2.05.78 2.83 0l7.96-7.97c.78-.78.78-2.05 0-2.83zm-12.24-3.09c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);

const TerminalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6 w-8 h-8 mb-4 transition-colors duration-300"
  >
    <path
      fillRule="evenodd"
      d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
      clipRule="evenodd"
    />
  </svg>
);

const icons = {
  star: StarIcon,
  tag: TagIcon,
  terminal: TerminalIcon,
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

const BenefitFeatureComponent = ({ title, description, Icon }) => (
  <div className="group relative text-white p-4 rounded-xl max-w-sm transform transition duration-200 hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col items-start hover:bg-white hover:text-blue-500 overflow-hidden">
    <Icon />
    <Title
      size="h3"
      weight="bold"
      className="mb-2 transition-colors duration-300"
    >
      {title}
    </Title>
    <Paragraph className="transition-colors duration-300">
      {description}
    </Paragraph>
    <DetailButton href="#detail" />
  </div>
);

// Assign displayName before memoizing
BenefitFeatureComponent.displayName = "BenefitFeatureComponent";

const BenefitFeature = memo(BenefitFeatureComponent);
BenefitFeature.displayName = "BenefitFeature";

const Benefit = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Title size="h1" weight="bold" className="mb-4">
              Kenapa Harus Pilih Livecst?
            </Title>
            <Paragraph>
              Phasellus varius erat sed sem venenatis aliquet. Aliquam sed
              sapien congue dui laoreet hendrerit eget ac dolor. Aenean euismod
              non nibh at rhoncus.
            </Paragraph>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map(({ title, description, icon }) => (
              <BenefitFeature
                key={title}
                title={title}
                description={description}
                Icon={icons[icon]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
