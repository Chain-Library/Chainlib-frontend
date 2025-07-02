"use client";

import Image from "next/image";
import Link from "next/link";
import Image2 from "@/assets/Images/image.png";
import Image3 from "@/assets/Images/footerimage.png";
import Image4 from "@/assets/Images/ImageLogo.png";
import Imagetiny1 from "@/assets/Images/1.png";
import Imagetiny2 from "@/assets/Images/2.png";
import Imagetiny4 from "@/assets/Images/4.png";
import Imagetiny5 from "@/assets/Images/5.png";

export default function About() {  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16 md:py-20">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0F265C]">
                <span className="text-[#0061FF]">Empowering</span> Stories,
                <br />
                Decentralized Freedom.
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="relative h-24 md:h-32">
              <Image
                src={Image2}
                alt="Diverse community of readers and writers"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* What is Chainlib */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-semibold text-[#096CFF] mb-2">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    What is Chainlib?
                  </span>
                </h2>

                <p className="text-gray-700">
                  Chainlib is a new marketplace built on the Polygon blockchain,
                  where authors can publish books and readers can support them
                  directly. We eliminate middlemen, ensure fair compensation,
                  and provide a platform where creativity thrives and readers
                  discover unique voices.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-blue-600 mb-2">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    Why Chainlib Exists?
                  </span>
                </h2>
                <p className="text-gray-700">
                  We believe creators deserve fair pay for their publications.
                  ChainLib empowers authors to earn more from their work and
                  give readers direct access to their favorite writers. By using
                  blockchain technology, we&apos;ve created a transparent and
                  decentralized way of supporting literary creation and
                  readership.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Us Different Section - Updated to match image */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-8 md:mb-0">
                <h2 className="text-2xl font-bold text-[#0F265C]">
                  What Makes Us Different
                </h2>
              </div>

              <div className="md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Decentralized Storage Feature */}
                  <div className="bg-gray-50 p-6 rounded-lg flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 bg-blue-100 rounded flex items-center justify-center">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24.6073 38.7063L47.1186 51.8212C47.7746 52.2029 48.1801 52.9066 48.1801 53.67V79.6762C48.1801 80.4992 47.2885 81.0121 46.5758 80.6006L24.0676 67.605C23.4056 67.2233 23 66.5166 23 65.7532V39.6307C23 38.8047 23.8946 38.2918 24.6073 38.7063Z"
                            fill="#096CFF"
                          />
                          <path
                            d="M73.8676 35.1099L51.3981 48.1174C50.7331 48.5021 49.9131 48.5021 49.251 48.1174L26.8501 35.0651C26.1404 34.6506 26.1434 33.6248 26.8531 33.2163L49.251 20.2863C49.9131 19.9046 50.7271 19.9046 51.3892 20.2863L73.8646 33.261C74.5773 33.6725 74.5773 34.7013 73.8646 35.1129L73.8676 35.1099Z"
                            fill="#096CFF"
                          />
                          <path
                            d="M77.6432 39.7199V65.7529C77.6432 66.5163 77.2346 67.223 76.5726 67.6047L54.0614 80.6003C53.3487 81.0119 52.457 80.496 52.457 79.6759V53.6787C52.457 52.9153 52.8626 52.2115 53.5246 51.8269L76.0358 38.7954C76.7485 38.3839 77.6402 38.8968 77.6402 39.7199H77.6432Z"
                            fill="#0F3D99"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Decentralized Storage
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Books live on IPFS, never locked behind servers.
                      </p>
                    </div>
                  </div>

                  {/* NFT Publishing Feature */}
                  <div className="bg-gray-50 p-6 rounded-lg flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="30" cy="30" r="30" fill="#096CFF" />
                          <path
                            d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM4.55986 30C4.55986 44.0502 15.9498 55.4401 30 55.4401C44.0502 55.4401 55.4401 44.0502 55.4401 30C55.4401 15.9498 44.0502 4.55986 30 4.55986C15.9498 4.55986 4.55986 15.9498 4.55986 30Z"
                            fill="#0F3D99"
                          />
                          <path
                            d="M13.4391 36.6484V23.6707H16.3744L20.4941 30.2554C20.6858 30.5631 20.8861 30.9086 21.0951 31.2919C21.3042 31.6693 21.519 32.0903 21.7397 32.5548C21.9661 33.0193 22.1897 33.5245 22.4103 34.0703L22.1229 34.2271C22.0881 33.7626 22.0561 33.2632 22.0271 32.729C21.998 32.189 21.9748 31.6722 21.9574 31.1786C21.94 30.6851 21.9313 30.2728 21.9313 29.9418V23.6707H24.64V36.6484H21.6961L17.9596 30.6822C17.7099 30.2757 17.466 29.8663 17.2279 29.4541C16.9957 29.036 16.7489 28.5715 16.4876 28.0605C16.2321 27.5495 15.9331 26.9543 15.5905 26.275L15.9563 26.2053C15.9911 26.8382 16.0231 27.4421 16.0521 28.0169C16.0869 28.586 16.1131 29.0999 16.1305 29.5586C16.1479 30.0173 16.1566 30.3889 16.1566 30.6735V36.6484H13.4391ZM26.8872 36.6484V23.6707H35.5361V25.9004H29.5524V29.4279H34.9961V31.6054H29.5524V36.6484H26.8872ZM36.8077 25.9004V23.6707H47.399V25.9004H43.4447V36.6484H40.7795V25.9004H36.8077Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        NFT Publishing
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Every published work is a tradable asset, linked to a
                        tokenbound account.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          width="78"
                          height="70"
                          viewBox="0 0 78 70"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_67_2264)">
                            <g opacity="0.7">
                              <path
                                d="M10.8828 42.545C11.3931 43.557 11.9689 44.549 12.5932 45.4953L12.8811 45.3058C12.2639 44.3708 11.6952 43.3888 11.1907 42.3896L10.8828 42.545Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M8.54639 36.1452C8.80864 37.2484 9.13788 38.3487 9.52698 39.4134L9.85052 39.2951C9.46569 38.2418 9.14073 37.1558 8.88133 36.0654L8.54639 36.1452Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M19.5923 52.9025C20.503 53.5809 21.4623 54.2123 22.4428 54.7781L22.6153 54.4803C21.6461 53.9201 20.6969 53.2959 19.7975 52.626L19.5923 52.9025Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M14.8975 48.0078L14.6338 48.2302C15.3635 49.0982 16.1517 49.9319 16.977 50.7102L17.2135 50.4593C16.3983 49.6911 15.6187 48.8658 14.8975 48.0078Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M35.3505 0.051525L35.3705 0.395018C36.4851 0.329455 37.6267 0.32803 38.7427 0.389317L38.7612 0.0458239C37.6324 -0.0168885 36.4779 -0.0154632 35.3491 0.051525H35.3505Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M7.75537 29.3799C7.75537 30.5173 7.82378 31.6632 7.95491 32.7863L8.29698 32.7464C8.16728 31.6375 8.10171 30.5044 8.10029 29.3799H7.75537Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M25.4931 56.3106C26.535 56.7595 27.6139 57.1515 28.7014 57.4764L28.7998 57.1458C27.7251 56.8251 26.659 56.4374 25.6285 55.9941L25.4917 56.3106H25.4931Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M25.5748 2.72657L25.438 2.41016C24.3989 2.86055 23.3741 3.37792 22.3936 3.94661L22.566 4.24449C23.5352 3.68151 24.5472 3.17126 25.5748 2.72514V2.72657Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M19.7539 6.10365L19.5472 5.82715C18.6393 6.50558 17.7613 7.2453 16.9375 8.02493L17.1741 8.27578C17.9879 7.50471 18.8559 6.77496 19.7539 6.10365Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M8.86706 22.6907L8.53212 22.6123C8.27272 23.714 8.07603 24.8457 7.94775 25.9731L8.28982 26.013C8.4181 24.8985 8.61194 23.781 8.86706 22.6907Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M32.0229 0.788436L31.963 0.449219C30.8456 0.647333 29.7282 0.912435 28.6436 1.23883L28.7433 1.56949C29.8151 1.24738 30.9197 0.985125 32.0243 0.789861L32.0229 0.788436Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M9.83938 18.4658C9.72393 18.7552 9.61133 19.0473 9.50586 19.3395L9.8294 19.4564C9.93202 19.1728 10.0403 18.8906 10.1529 18.6098C10.0489 18.5613 9.94485 18.5129 9.83938 18.4658Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M54.5885 5.77539L54.3833 6.0519C55.2827 6.72035 56.1521 7.44867 56.9702 8.2169L57.2068 7.96605C56.3801 7.18927 55.4993 6.4524 54.59 5.77539H54.5885Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M63.3103 16.123L63.0024 16.2784C63.5084 17.2804 63.9602 18.3208 64.3451 19.3713L64.6686 19.253C64.2795 18.1897 63.822 17.1364 63.3089 16.123H63.3103Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M59.5513 10.4434L59.2876 10.6657C60.0102 11.5223 60.6901 12.4316 61.3072 13.3652L61.5951 13.1756C60.9694 12.2307 60.2824 11.3114 59.5513 10.4448V10.4434Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M64.3662 39.2682L64.6898 39.3865C65.0774 38.3204 65.4067 37.2201 65.6675 36.1155L65.3326 36.0371C65.0746 37.1289 64.7496 38.2164 64.3662 39.2696V39.2682Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M61.3403 45.2856L61.6282 45.4752C62.2525 44.5274 62.8283 43.5325 63.3372 42.5206L63.0293 42.3652C62.5262 43.3658 61.9575 44.3478 61.3403 45.2856Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M42.1522 0.431641L42.0938 0.770858C43.1983 0.961846 44.3029 1.22125 45.3762 1.54051L45.4745 1.20984C44.3885 0.887731 43.271 0.625479 42.1522 0.431641Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M38.8052 58.3027L38.8251 58.6476C39.9597 58.5821 41.0999 58.4495 42.2145 58.2543L42.1546 57.915C41.0543 58.1089 39.9269 58.2386 38.8052 58.3041V58.3027Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M45.436 57.1369L45.5343 57.4676C46.6204 57.1426 47.6979 56.7492 48.7398 56.2988L48.603 55.9824C47.5739 56.4271 46.5078 56.8162 45.4346 57.1369H45.436Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M51.6128 54.467L51.7852 54.7649C52.7658 54.1977 53.7236 53.5663 54.6329 52.8878L54.4263 52.6113C53.5269 53.2812 52.5805 53.9055 51.6113 54.467H51.6128Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M57.0093 50.4422L57.2459 50.693C58.0697 49.9148 58.8579 49.0796 59.5876 48.2116L59.3239 47.9893C58.6027 48.8473 57.8245 49.6725 57.0093 50.4422Z"
                                fill="#096CFF"
                              />
                              <path
                                d="M48.6842 2.3735L48.5474 2.68991C49.5764 3.13175 50.5912 3.64057 51.5633 4.20071L51.7357 3.9014C50.7523 3.33414 49.7246 2.81961 48.6842 2.37207V2.3735Z"
                                fill="#096CFF"
                              />
                            </g>
                            <path
                              d="M0.786756 10.5536L11.8085 16.9745C12.1306 17.1626 12.3287 17.5061 12.3287 17.8796V30.6116C12.3287 31.015 11.8926 31.2658 11.5434 31.0648L0.523079 24.701C0.19954 24.5142 0 24.1679 0 23.7945V11.0054C0 10.6021 0.437562 10.3498 0.786756 10.5536Z"
                              fill="#096CFF"
                            />
                            <path
                              d="M24.9024 8.79157L13.9021 15.1597C13.5772 15.3479 13.1752 15.3479 12.8503 15.1583L1.88414 8.76877C1.53637 8.56638 1.53779 8.06468 1.88556 7.86372L12.8517 1.53261C13.1752 1.3459 13.5743 1.3459 13.8978 1.53261L24.901 7.88509C25.2502 8.08606 25.2502 8.58918 24.901 8.79157H24.9024Z"
                              fill="#096CFF"
                            />
                            <path
                              d="M26.7506 11.049V23.7939C26.7506 24.1673 26.551 24.5137 26.2275 24.7004L15.2072 31.0628C14.858 31.2638 14.4219 31.0129 14.4219 30.6096V17.8832C14.4219 17.5098 14.6214 17.1649 14.9435 16.9768L25.9652 10.5958C26.3144 10.3934 26.7506 10.6457 26.7506 11.049Z"
                              fill="#0F3D99"
                            />
                            <path
                              d="M52.651 18.2381L63.4105 24.5065C63.7241 24.6889 63.9179 25.0253 63.9179 25.3902V37.82C63.9179 38.2134 63.4917 38.4586 63.1511 38.2619L52.3931 32.0505C52.0767 31.8681 51.8828 31.5303 51.8828 31.1654V18.6799C51.8828 18.2851 52.3104 18.04 52.651 18.2381Z"
                              fill="#096CFF"
                            />
                            <path
                              d="M76.1954 16.5188L65.4559 22.7359C65.138 22.9197 64.7461 22.9197 64.4297 22.7359L53.7229 16.4974C53.3837 16.2993 53.3851 15.809 53.7244 15.6137L64.4297 9.4337C64.7461 9.25127 65.1352 9.25127 65.4516 9.4337L76.1939 15.6351C76.5346 15.8318 76.5346 16.3235 76.1939 16.5202L76.1954 16.5188Z"
                              fill="#096CFF"
                            />
                            <path
                              d="M77.9999 18.7221V31.1648C77.9999 31.5297 77.8046 31.8675 77.4882 32.0499L66.7287 38.2613C66.3881 38.458 65.9619 38.2114 65.9619 37.8195V25.3939C65.9619 25.029 66.1558 24.6926 66.4722 24.5088L77.2316 18.2803C77.5723 18.0836 77.9984 18.3287 77.9984 18.7221H77.9999Z"
                              fill="#0F3D99"
                            />
                            <path
                              d="M21.1598 48.5311L32.1644 54.942C32.4851 55.1287 32.6833 55.4736 32.6833 55.8456V68.5577C32.6833 68.9597 32.2471 69.2119 31.8993 69.011L20.8976 62.6585C20.5741 62.4718 20.3745 62.1268 20.3745 61.7534V48.9843C20.3745 48.581 20.8121 48.3301 21.1598 48.5325V48.5311Z"
                              fill="#096CFF"
                            />
                            <path
                              d="M45.2369 46.7733L34.2537 53.1315C33.9287 53.3197 33.5282 53.3197 33.2032 53.1301L22.2542 46.7505C21.9079 46.5481 21.9079 46.0464 22.2556 45.8469L33.2047 39.5258C33.5282 39.3391 33.9258 39.3391 34.2494 39.5258L45.2355 45.8683C45.5832 46.0692 45.5832 46.5709 45.2355 46.7733H45.2369Z"
                              fill="#096CFF"
                            />
                            <path
                              d="M47.0826 49.0265V61.7514C47.0826 62.1248 46.8831 62.4698 46.5595 62.6565L35.5564 69.009C35.2086 69.2099 34.7725 68.9591 34.7725 68.5557V55.8493C34.7725 55.4759 34.9706 55.1324 35.2941 54.9443L46.2987 48.5747C46.6465 48.3737 47.0826 48.6246 47.0826 49.0265Z"
                              fill="#0F3D99"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_67_2264">
                              <rect width="78" height="69.0792" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Smart Contracts
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Royalties, rights, and revenue handled transparently and
                        automatically.
                      </p>
                    </div>
                  </div>

                  {/* Reader Rewards Feature */}
                  <div className="bg-gray-50 p-6 rounded-lg flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          width="56"
                          height="76"
                          viewBox="0 0 56 76"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 68.859L10.7114 39.7852L28.9038 46.7561L18.7025 75.6599L12.7517 62.7382L0 68.859Z"
                            fill="#096CFF"
                          />
                          <path
                            d="M55.7676 69.1988L45.0562 40.125L26.8638 47.0959L37.0651 75.9997L43.0159 63.078L55.7676 69.1988Z"
                            fill="#096CFF"
                          />
                          <circle
                            cx="27.8838"
                            cy="26.5235"
                            r="26.5235"
                            fill="#096CFF"
                          />
                          <path
                            d="M54.4073 26.5235C54.4073 41.172 42.5324 53.047 27.8838 53.047C13.2353 53.047 1.36035 41.172 1.36035 26.5235C1.36035 11.875 13.2353 0 27.8838 0C42.5324 0 54.4073 11.875 54.4073 26.5235ZM8.44186 26.5235C8.44186 37.261 17.1463 45.9655 27.8838 45.9655C38.6214 45.9655 47.3258 37.261 47.3258 26.5235C47.3258 15.786 38.6214 7.0815 27.8838 7.0815C17.1463 7.0815 8.44186 15.786 8.44186 26.5235Z"
                            fill="#0F3D99"
                          />
                          <path
                            d="M27.5771 13.9049C27.7003 13.6467 28.0677 13.6467 28.1909 13.9049L31.7221 21.3049C31.7716 21.4088 31.8704 21.4806 31.9845 21.4956L40.1136 22.5672C40.3971 22.6046 40.5107 22.954 40.3033 23.1509L34.3565 28.796C34.2731 28.8753 34.2353 28.9914 34.2563 29.1045L35.7492 37.1669C35.8013 37.4481 35.504 37.6641 35.2526 37.5277L28.0462 33.6164C27.9451 33.5615 27.823 33.5615 27.7218 33.6164L20.5154 37.5277C20.264 37.6641 19.9668 37.4481 20.0188 37.1669L21.5117 29.1045C21.5327 28.9914 21.495 28.8753 21.4115 28.796L15.4648 23.1509C15.2573 22.954 15.3709 22.6046 15.6545 22.5672L23.7835 21.4956C23.8976 21.4806 23.9964 21.4088 24.046 21.3049L27.5771 13.9049Z"
                            fill="#EDF7FF"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Reader Rewards
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Read, review, and grow your rank in our engaged reading
                        community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Our Community */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Join Our Community of Book Lovers
                </h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium mb-4 flex items-center justify-center space-x-2">
                  <span>Become a Member</span>{" "}
                  <span className="inline-flex items-center">
                    {" "}
                    <svg
                      width="18" 
                      height="16"
                      viewBox="0 0 27 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-auto"
                    >
                      <path
                        d="M17.6 1.4L23.2 7H0V9H23.2L17.6 14.6L19 16L27 8L19 0L17.6 1.4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>

                <div className="flex items-center mt-8">
                  <div className="flex -space-x-2 mr-4">
                    <div className="h-8 w-8 rounded-full bg-red-400">
                      <Image
                        className="h-8 w-8 rounded-full bg-red-400"
                        src={Imagetiny5}
                        alt="Community of readers"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-green-400">
                      <Image
                        className="h-8 w-8 rounded-full bg-red-400"
                        src={Imagetiny1}
                        alt="Community of readers"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-400">
                      <Image
                        className="h-8 w-8 rounded-full bg-red-400"
                        src={Imagetiny2}
                        alt="Community of readers"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-yellow-400">
                      <Image
                        className="h-8 w-8 rounded-full bg-red-400"
                        src={Imagetiny4}
                        alt="Community of readers"
                        width={32}
                        height={32}
                      />
                    </div>

                    <div className="h-8 w-8 rounded-full bg-yellow-400">
                      <Image
                        className="h-8 w-8 rounded-full bg-red-400"
                        src={Imagetiny1}
                        alt="Community of readers"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-[#000B21]">
                      Our Community
                    </p>
                    <p className="text-[#0F265C] font-semibold">
                      40k+ active members
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-80">
                <Image
                  src={Image3}
                  alt="Community of readers"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}

      <footer className="bg-white  border-gray-200 py-6 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Logo and social icons */}
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  <Image
                    src={Image4}
                    alt="Logo"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <span className="font-bold text-gray-900">ChainLib</span>
              </div>

              <div className="flex space-x-2">
                <a
                  href="#"
                  aria-label="ChainLib on Twitter"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-black hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="ChainLib on LinkedIn"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-black hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="ChainLib on LinkedIn"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-black hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Explore
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/books"
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/how-it-works"
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Legal
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-of-service"
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center md:text-left">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} ChainLib. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
