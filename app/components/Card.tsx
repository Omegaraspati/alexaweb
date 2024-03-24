import React from 'react'

const Card = () => {
  return (
    <div data-aos="fade-up"
    data-aos-duration="1000">
        <div className="container my-24 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section className="mb-32 text-center">
  <h1 className='text-3xl text-orange-600 py-20 text-center font-semibold uppercase'>Why Choose Us ?</h1>

    <div className="grid gap-x-6 md:grid-cols-3 xl:gap-x-12">
      <div className="mb-6 lg:mb-0">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat transition duration-300 ease-in-out hover:scale-105">
            
            <img src="/images/card1.jpg" className="w-full rounded-t-lg" />
            <a target ='blank' href="/Artikel1">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg className="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-lg font-bold uppercase">How we Maintain our Standard</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
             Laboratorium Specialist
            </h6>
            
            <p>
            Dalam rangka menjaga kualitas air produksi alexa menfokuskan kepada 3 
            katagori audit baik audit exaternal maupun audit internal dan masukan dari customer...
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 lg:mb-0">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat transition duration-300 ease-in-out hover:scale-105">
            <img src="/images/csr.jpg" className="w-full rounded-t-lg" />
            <a target='blank' href="/Artikel2">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg className="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-lg font-bold uppercase">Pentingnya menjaga kelestarian hutan untuk hasil air yg optimal</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400 ">
            Environmental Maintenance
            </h6>
            
            <p>
            Sejak awal alexa berkomitment melaksanakan csr fokus kepada pelestarian hutan...
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 lg:mb-0">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat transition duration-300 ease-in-out hover:scale-105">
            <img src="/images/csr2.jpg" className="w-full rounded-t-lg" />
            <a target='blank' href="/About">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg className="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-lg font-bold uppercase">Tentang Alexa Pure Water</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400 ">
            PT.CINTA AIR MINUM
            </h6>
            
            <p>
            Sebagai anugrah tuhan sudah bertahun2 terbentuk hutan bambu alami di kawasan penggunungan manglayang...
            </p>
          </div>
        </div>
      </div>
        </div>
      </section>
  {/* <!-- Section: Design Block --> */}
</div>
    </div>
  )
}

export default Card