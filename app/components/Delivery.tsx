import React from 'react'

const Delivery = () => {
    return (
        <div className='flex justify-center gap-20 pt-24  pb-24 ' data-aos="fade-up"
        data-aos-duration="1000">
            <div
                className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src="/images/kantor.jpg"
                        alt="kantor" />
                </div>
                <div className="p-6">
                    <p className=" text-2xl font-semibold text-center">
                        Customer Gives Call To our Admin
                    </p>
                </div>
            </div>
            {/* //////////////////////////////2///////////////////////////////// */}
            <div
                className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src="/images/kurir.jpg"
                        alt="kantor" />
                </div>
                <div className="p-6">
                    <p className=" text-2xl font-semibold text-center">
                        We Receive your Information / Address
                    </p>
                </div>
            </div>
            {/* //////////////////////////////2///////////////////////////////// */}
            <div
                className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src="/images/antar.jpg"
                        alt="antar" />
                </div>
                <div className="p-6">
                    <p className=" text-2xl font-semibold text-center">
                        We deliver Alexa
                        to your home Back and forth
                    </p>
                </div>
            </div>
            {/* //////////////////////////////2///////////////////////////////// */}
            <div
                className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src="/images/samperumah.jpg"
                        alt="samperumah" />
                </div>
                <div className="p-6">
                    <p className=" text-2xl font-semibold text-center">
                        So you and your family
                        can enjoy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Delivery