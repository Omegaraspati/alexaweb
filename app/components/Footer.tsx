import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer section with social media icons and newsletter sign-up --> */}
      <footer
        className="flex flex-col items-center bg-blue-700 text-center text-white dark:bg-neutral-700 dark:text-white">
        <div className="container px-6 pt-6">
          {/* <!-- Social media icons container --> */}
          <div className="mb-6 flex justify-center space-x-2">
            <a target ='blank'
              href ="https://www.facebook.com/profile.php?id=100081183174355"
              type="button"
              className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512">
                  {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                  <path
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </a>

          
            <a
              href="https://www.instagram.com/alexa.waterid/"
              type="button"
              className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>

          </div>

          {/* <!-- Newsletter sign-up form --> */}
          <div>
            <form action="">
              <div
                className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                <div className="md:mb-6 md:ms-auto">
                  <p>
                    <strong>PT.CINTA AIR MINUM</strong>
                  </p>
                </div>

              </div>
            </form>
          </div>

          {/* <!-- Copyright information --> */}
          <div className="mb-6">
            <p>
              Jln. Pamubusan no 23 RT 04 RW 01 Desa Cibiru Wetan Kecamatan Cileunyi
            </p>
          </div>

          {/* <!-- Links section --> */}
          <section className="mb-32 text-center md:text-left">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="mb-6 md:mb-0">
                <h2 className="mb-6 text-3xl font-bold">
                  Sudah dipercaya oleh  <br />
                  <u className="">beberapa Perusahaan</u>
                </h2>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  PT.CINTA AIR MINUM
                </p>

                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  Alexa Pure Water
                </p>

                <a target='blank' href="https://api.whatsapp.com/send/?phone=6287825214470&text&type=phone_number&app_absent=0"><button data-te-ripple-init data-te-ripple-color="light" type="button"
                  className="inline-block rounded-full bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                  Pre-order now
                </button></a>
              </div>

              <div className="mb-6 md:mb-0">
                <div className="grid grid-cols-4 gap-6">
                  <div className="mb-12">
                    <img src="/images/mandiri.png"
                      className="px-6 dark:brightness-150" />
                  </div>

                  <div className="mb-12">
                    <img src="/images/mujigae.png"
                      className="px-6 dark:brightness-150" />
                  </div>

                  <div className="mb-12">
                    <img src="/images/daihatsu.png"
                      className="px-6 dark:brightness-150" />
                  </div>

                  <div className="mb-12">
                    <img src="/images/dinsos.png"
                      className="px-6 dark:brightness-150" />
                  </div>

                  <div className="mb-12">
                    <img src="/images/indahcargo.png"
                      className="px-6 dark:brightness-150" />
                  </div>

                  <div className="mb-12">
                    <img src="/images/panin.png"
                      className="px-6 dark:brightness-150" />
                  </div>

                  <div className="mb-12">
                    <img src="/images/PTA.png"
                      className="px-6 dark:brightness-150" />
                  </div>

                  <div className="mb-12">
                    <img src="/images/tehgopek.png"
                      className="px-6 dark:brightness-150" />
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </footer>
    </div>
  )
}

export default Footer