import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Artikel = () => {
  return (
    <div>
        <Navbar />
        <h1 className='text-3xl text-orange-600 py-20 pt-52 text-center font-semibold uppercase'>Cosmetic Dentistry</h1>
        <div className='flex justify-center'>
        <img className ='' src ='/images/ARTIKEL1.jpg'></img>
        </div>
        <div className =' px-96'>
                        <h1 className='text-2xl font-medium  pt-20'>Dalam rangka menjaga kualitas air produksi alexa menfokuskan kepada 3 katagori audit baik audit exaternal maupun audit internal dan masukan dari customer</h1>
                        <ol className="text-2xl font-medium  py-20 list-decimal list-inside">
                            <li><b>Audit external</b> Audit ini dilakukan secara periodik oleh 3 lembaga resmi pemerintah yaitu SNI , BPPOM  dan Sertifikasi halal</li><br></br>
                            <li><b>Audit internal</b> Audit ini dilakukan oleh team internal dalam sekala rutin  per jam per hari dan bulanan. 
                            Kualita air dari mulai sumber air. Water treatment , mesin RO dan produk jadi dalam kemasan seluruh nya di test secara 
                            labotarium dalam pengawasan dan evaluasi yg sangat ketat dan terukur mengacu pada acuan SNI dan BP POM RI</li><br></br>
                            <li>Masukan dan inputan dari customer secara rutin di terima dengan baik kemudian di evaluasi dan tentunya 
                                dilakukan perbaikan-perbaikan yg berkelanjutan.</li><br></br>
                        </ol>
                    </div>
                    <Footer/>
    </div>
  )
}

export default Artikel