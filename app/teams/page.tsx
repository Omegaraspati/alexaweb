import Image from "next/image";
import { getTeams } from "../../lib/teams";
import NavbarTeams from "../components/NavbarTeams";
import background from '../../public/images/bannerteams1.png'
import Footer from "../components/Footer";

export default async function Teams() {
    const member = await getTeams()
    // console.log(member.results[0].picture.large);
    // console.log(member.results[0].name.first);
    return (
        <div>
            <NavbarTeams />
            <div className='absolute -z-10 w-full px-20 '>
                <Image src={background} className='object-cover object-center w-full shadow-dark-3 ' alt='bg-image' width={1000} height={1000} />
            </div>
            {/* <!-- Container for demo purpose --> */}
            <div className="container pt-96 my-24 mx-auto md:px-6">
                {/* <!-- Section: Design Block --> */}
                <section className="mb-32 pt-96 text-center">
                    <h2 className="mb-12 text-3xl font-bold">
                        TEAMS FROM <u className="text-primary dark:text-primary-400">RANDOM USER</u>
                    </h2>

                    <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
                        {member.results.map((data: any) => {
                            return (
                                <div>
                                    <div className="mb-12">
                                        <Image src={`${data.picture.large}`}
                                            className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 max-width: 100px" alt="" width={100} height={100} />

                                        <p className="mb-2 font-bold">{data.name.first} {data.name.last}</p>
                                        <p className="text-neutral-500 dark:text-neutral-300">{data.location.city}</p>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                   
                </section>
            </div>   
            <Footer/>
        </div>
        
    )
}