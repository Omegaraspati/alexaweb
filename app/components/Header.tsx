import React from 'react'

const Header = () => {
  return (
    <div data-aos="fade-up"
     data-aos-duration="1000">

      <h1 className='text-3xl text-orange-600 py-20 text-center font-semibold uppercase'>Why Choose Us ?</h1>
      <div className='flex justify-center items-center gap-8 max-md:flex-col m-56 flex-wrap  ' >
        {/* ------------------------------------1-------------------------------------- */}
        <div
          className="block rounded-lg 
          flex-1 bg-white shadow-secondary-1 dark:bg-surface-dark min-w-64 "
          >
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            <img
              className="rounded-t-lg w-full"
              src="/images/card1.jpg"
              alt="" />
            <a href="#!">
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-6 text-surface dark:text-white">
            <h5 className="mb-2 text-xl font-medium leading-tight">How we Maintain our Standard</h5>
            <p className="mb-4 text-base">
              Dalam rangka menjaga kualitas air produksi alexa menfokuskan kepada 3 katagori audit baik audit exaternal maupun audit internal dan masukan dari customer
            </p>
            <a href="/Artikel1"><button 
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              >
              Selengkapnya
            </button></a>
          </div>
        </div>
        {/* ------------------------------------------2------------------------------------- */}
        <div
          className="block rounded-lg 
          flex-1 bg-white shadow-secondary-1 dark:bg-surface-dark min-w-64">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            <img
              className="rounded-t-lg  w-full"
              src="/images/csr.jpg"
              alt="" />
            <a href="#!">
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-6 text-surface dark:text-white">
            <h5 className="mb-2 text-xl font-medium leading-tight ">Pentingnya menjaga kelestarian hutan untuk hasil air yg optimal</h5>
            <p className="mb-4 text-base">
              Sejak awal alexa berkomitment melaksanakan csr fokus kepada pelestarian hutan.
            </p>
            <a href="/Artikel2"><button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              Selengkapnya
            </button></a>
          </div>
        </div>
        {/* -------------------------------------------3---------------------------------------- */}
        <div
          className="block rounded-lg 
          flex-1 bg-white shadow-secondary-1 dark:bg-surface-dark min-w-64">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            <img
              className="rounded-t-lg w-full"
              src="/images/csr2.jpg"
              alt="" />
            <a href="/!">
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-6 text-surface dark:text-white">
            <h5 className="mb-2 text-xl font-medium leading-tight">ABOUT US</h5>
            <p className="mb-4 text-base">
            Sebagai anugrah tuhan sudah bertahun2 terbentuk hutan bambu alami di kawasan penggunungan manglayang.  Hutan memberikan udara yg segar bertahun tahun membawa berkah bagi kehidupan.</p>
            <a href="/About"><button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              Selengkapnya
            </button></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header