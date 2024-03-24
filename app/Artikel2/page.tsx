import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Artikel = () => {
    return (
        <div>
            <Navbar />
            <h1 className='text-3xl text-orange-600 py-20 pt-52 text-center font-semibold uppercase'>Ini Corporate Social Responsibility (CSR)
            </h1>
            <div className='flex justify-center'>
                <img className='' src='/images/csr.jpg'></img>
            </div>
            <div className=' px-96'>
                <h1 className='text-2xl font-medium  pt-20'>Sejak awal alexa berkomitment melaksanakan csr fokus kepada pelestarian hutan.
                    Hal ini dilakukan denngan beberapa alasan yg rasional,  yaitu</h1>
                <ol className="text-2xl font-medium  py-20 list-decimal list-inside">
                    <li>Hutan merupakan mekanisme alam yg sangat luar biasa dalam melestarikan sumber air alami tanpa hutan air akan menyusut bahkan akan habis seketika. Dengan demikian dengan menjaga kelestarian hutan kelestarian air murni alami akan senantiasa ada</li><br></br>
                    <li>Air yg dihasilkan oleh hutan akan sangat berguna baik bahan baku air minum alexa dan juga dapat dimanfaatkan oleh masyarakat sekitar sebagai sumber air bersih     , pertanian dan juga perikanan rakyat</li><br></br>
                    <li>Dengan hutan yg lestari keteraedian o2. Oksigen yg segar akan sangat berguna bagi kehidupan secara keseluruhan.</li><br></br>
                    <li>Tak lupa hasil reboisasi hutan juga sangat berguna bagi menahan longsoran tanah dan banjir bandang pada musim penghujan. Semenjak hutan nya terpelihara sudah tidak ada lagi longsor dan banjir</li><br></br>
                    <li>Aktivitas csr di sekitar hutan alexa ini tentunya akan menjadi percontohan bagi masyarakat sekitar betapa pentingnya hutan yg hijau harus lestarikan.</li><br></br>
                </ol>
            </div>
            <Footer />
        </div>
    )
}

export default Artikel