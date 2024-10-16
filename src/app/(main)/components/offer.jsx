const axios = require("axios");
import { Title } from "@/components/ui/text";
import { Paragraph } from "@/components/ui/paragraph";

async function OfferSection() {
  try {
    const request = await axios.get("http://localhost:4000/lp-data");
    const data = request.data;

    return (
      <section className="bg-gradient-to-br from-cyan-100 to-purple-200 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <Title weight="bold" size="h3">
            Harga
          </Title>
          <Title weight="bold" size="h2" color="gradient_b" className="mx-10">
            pilih penawaran terbaik mu
          </Title>
          <Paragraph color="lightgray" className="mt-4 my-10 mx-10">
            Phasellus varius erat sed sem venenatis aliquet. Aenean euismod non
            nibh et rhoncus.
          </Paragraph>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start m-10">
            {data.data.offers.map((offer) => (
              <div
                key={offer.name}
                className={`border-gray-200 bg-gradient-to-br from-pink-50 via-white to-cyan-50 px-8 pb-8 pt-4 rounded-[24px] shadow-lg border transition-transform duration-300 ease-in-out ${
                  offer.name === "Best" ? "transform scale-105" : ""
                }`}
              >
                <div className="w-20 h-[0.15rem] bg-gradient-to-r to-pink-200 from-cyan-200 mx-auto"></div>
                {offer.name === "Best" ? (
                  <>
                    <div className="my-4 rounded-md bg-gradient-to-br from-blue-600 to-purple-500 p-[0.05rem]">
                      <div className="flex row h-full border rounded-md  items-center justify-center bg-white back">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="size-6"
                        >
                          <defs>
                            <linearGradient
                              id="myGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#2563EB" />{" "}
                              <stop offset="100%" stopColor="#A855F7" />{" "}
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#myGradient)"
                            fillRule="evenodd"
                            d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <h1 className="text-md p-2 font-semibold bg-gradient-to-r from-blue-600 to-purple-500 inline-block text-transparent bg-clip-text">
                          Rekomendasi
                        </h1>
                      </div>
                    </div>
                    <Title
                      size="title_lg"
                      weight="title_bold"
                      color="gradient_a"
                      className="pb-4"
                    >
                      Penawaran Terbaik
                    </Title>
                  </>
                ) : (
                  <Title
                    weight="bold"
                    size="h3"
                    color="gradient_a"
                    className="pb-4 pt-4"
                  >
                    {offer.name}
                  </Title>
                )}
                <Title weight="bold" size="h3">
                  {offer.price}
                </Title>
                <Paragraph color="lightgray" className="mt-2">
                  Get 7 days free trial
                </Paragraph>
                <div className="border-t border-gray-500 my-4"></div>
                <ul className="space-y-3 ">
                  {offer.feature.map((f, index) => (
                    <li key={index} className="flex items-center">
                      {f.unlock ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="blue"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="red"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                      <span
                        className={`ml-2 text-gray-700 ${
                          !f.unlock ? "text-gray-400 line-through" : ""
                        }`}
                      >
                        <Paragraph>{f.name}</Paragraph>
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 font-bold ${
                    offer.name === "Best"
                      ? "bg-purple-500 text-white"
                      : "bg-gradient-to-br from-cyan-100 to-purple-200 text-black"
                  } bg-blue-500 py-2 px-4 rounded-md w-full`}
                >
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (err) {
    return (
      <>
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OfferSection;
