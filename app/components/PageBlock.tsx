import React from 'react'

const PageBlock = () => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="1000">
            <div className="container my-24 mx-auto md:px-6">
                {/* <!-- Section: Design Block --> */}
                <section className="mb-32">
                    <div
                        className="block rounded-lg bg-sky-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="flex flex-wrap items-center">
                            <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                                <img src="/images/Profile1.jpg" alt="pagealexa"
                                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                            </div>
                            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                                <div className="px-6 py-12 md:px-12">
                                    <h2 className="mb-4 text-2xl font-bold uppercase">
                                        Kenapa Harus ALEXA ?
                                    </h2>
                                    <a href='/About'><p className="mb-6 flex items-center font-bold uppercase no-underline hover:underline text-danger dark:text-danger-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                            stroke="currentColor" className="mr-2 h-5 w-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                                        </svg>
                                        Selengkapnya
                                    </p></a>
                                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                                        Air minum ALEXA merupakan air Spring Water atau air alam murni yang keluar langsung dari akar tanaman kemudian mengalir
                                        ke dalam tanah dan bebatuan yang ada di dalam tanah sehingga air sudah terkikis kotorannya oleh alam dan menghasilkan
                                        air alami yang sehat dan menyegarkan.</p>
                                    <div className="text-neutral-500 dark:text-neutral-300">
                                    <li className = 'text-1xl font-normal'>Kualitas dan Keaslian Terjamin</li><br></br>
                                    <li className = 'text-1xl font-normal'>Siap Antar Kemana saja</li><br></br>
                                    <li className = 'text-1xl font-normal'>Murni dari sumber air pegunungan</li><br></br>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PageBlock