import Image from 'next/image'
import React from 'react'
import background from '../../public/images/banneralexaabout1.png'
import Footer from '../components/Footer'
import NavbarAbout from '../components/NavbarAbout'

const About = () => {
    return (
        <>
        <NavbarAbout />
            <main className=''>
                <div className='absolute -z-10 w-full'>
                    <Image src={background} className='object-cover object-center w-full' alt='bg-image' width={1000} height={1000} />
                    <div>
                        <h1 className='text-5xl font-semibold md:pl-72 md:pt-44'>About Alexa Water</h1>
                        <p className='text-2xl font-medium md:pl-72 md:pt-10 md:pr-52'>Sebagai anugrah tuhan sudah bertahun2 terbentuk hutan bambu alami di kawasan penggunungan manglayang.
                            Hutan memberikan udara atau oksigen yg segar dan juga gemercik tetesan-tetesan air bening yang telah bertahun tahun membawa berkah bagi kehidupan.</p>
                        <p className='text-2xl font-medium md:pl-72 md:pt-10 md:pr-52'>ALEXA telah hadir 10 tahun lebih dalam proses pelestarian dan  pemanfaatan sumber daya air hutan bambu dikawasan pegunungan manglayang.
                            Mulai dr penataan lahan   ,pengolahan penanaman  pohon dan pemeliharaan hutan  sehinga menciptakan area hutan yg terlindungi kelestariannya.</p>
                        <p className='text-2xl font-medium md:pl-72 md:pt-10 md:pr-52'>Kelestarian hutan secara alami akan berfungsi sebagai reservoar atau penampung air bagi kehidupan. Air mengalir dengan jernih dan berkelanjutan tanpa surut dan dapat dimanfaatkan  utk menunjang kehidupan baik iru kebutuhan air bersih, pertanian, perikanan  dan air minum.
                            ALEXA kemudian mengambil peran pemanfaatan air hutan yang diolah menjadi air minum dalam kemasan.</p>
                        <p className='text-2xl font-medium md:pl-72 md:pt-10 md:pr-52'>ALEXA yakin dan berkomitmen mengolah dan memproduksi air minum dalam kemasan dengan kualitas yang sangat tinggi hal ini disebabkan karena sumber air nya sangat alami dan diolah dengan system pengolahan yg modren.
                            Jadi tdak diragukan kami alexa dapat ikut memberi manfaat dan nilai lebih kepada masyarakat dalam peranannya sebagai produsen air minum dalam kemasan yg berawal dari sumber air hutan yg alami</p>
                        <p className='text-2xl font-medium md:pl-72 md:pt-10 md:pr-52'>Setiap hari secara periodik alexa selalu melakukan monitoring dan test kualitas air mulai dr sumbernya dr hutan dan hasil akhir dr pengolahan air minum dalam kemasan dengan mengacu kepada standar sertifikasi  SNI, BP POM dan Halal.
                            Dengan demikian perubahan-perubahan kualitas air dapat diketahui sedini mungkin sehingga dapat melakukan berbagai perbaikan sedini mungkin.</p>
                        <p className='text-2xl font-medium md:pl-72 md:pt-10 md:pr-52'> pemeliharaan hutan menjadi sangat prioritas melalui menjaga keaslian hutan dan penanaman
                            berkelanjutan yg pada akhirnya akan menjaga kualitas air sumber tetap prima. ALEXA telah hadir 10 tahun lebih dengan didukung  sekitar 100 lebih staf berpengalan siap memberikan manfaat
                            air minum dalam kemasan  dengan kualitas sangat tinggi kepada MASYARAKAT</p>
                    </div>
                    <div>
                        <h1 className='text-5xl font-semibold md:pl-72 md:pt-16'>Visi Alexa</h1>
                        <p className='text-2xl font-medium md:pl-72 md:pt-10 pr-[50%]'>Menjadikan , membangun , menciptakan rasa kecintaan masyarakat kepada hutan MELALUI pemanfaatan sumber air hasil hutan menjadi air minum dengan kualitas tinggi bagi masyarakat</p>
                    </div>
                    <div>
                        <h1 className='text-5xl font-semibold md:pl-72 md:pt-16 '>Misi Alexa</h1>
                        <ol className="text-2xl font-medium pt-10 md:pl-72 md:pb-24 list-decimal list-inside">
                            <li>Membangun dan menjaga keasllian kemurnian hutan di area pengggunungan</li>
                            <li>Mengolah air alami dari hutan menjadi air minum dalam kemasan dengan kualitas sangat tinggi</li>
                            <li>Mendiatribusikan air minum dalam kemasan kepada masyarakat.</li>
                        </ol>
                    </div>
            <Footer />
                </div>
            </main>
        </>


    )
}

export default About