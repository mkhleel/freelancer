import Head from "next/head"
import Layout from "../../components/layout"
import { Carousel } from "flowbite-react";
import axios from "../../lib/axios";


export default function Skill({skill}) {

  return (
    <>
      <Head>
        <title>{skill.title}</title>
      </Head>

      <Layout hero={false}>
          <div className="mx-auto max-w-4xl my-4">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-e" dir="ltr">
                <Carousel 
                    leftControl=" "
                    rightControl=" "
                >
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                    />
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    />
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    alt="..."
                    />
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    alt="..."
                    />
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    alt="..."
                    />
                </Carousel>
            </div>



            <div className="md:flex md:justify-between m-8">

                <div className="md:grow prose leading-5 my-2">
                    <h4>{skill.title}</h4>
                    <h5 className="font-bold md:text-sm">
                        تفاصيل الخدمة
                         <span className="text-xs text-gray-400 mr-2">(سيتم تصميم نموذج واحد عن كل من )</span>
                    </h5> 
                    <div className="prose">
                        {skill.body}
                    </div>
                    <h5 className="font-bold md:text-sm">
                        موعد التسليم
                         <span className="text-xs text-gray-400 mr-2">(سيتم تسليم العمل لمدة أقصاها )</span>
                    </h5> 
                    <p className=" text-sm">14 يوم</p>
                </div>
                <div className="">
                    <button className=" bg-default w-full rounded-full py-3 px-20 text-white text-xs">شراء الآن $500</button>
                </div>

            </div>



          </div>
      </Layout>
    </>
  )
}


export async function getStaticPaths() {
  const response = await axios.get('/api/skills');

  return {
      fallback: false,
      paths: response.data.data.map(skill => ({
          params: {id: skill.id.toString()}
      }))
  };
}

export async function getStaticProps({params}) {
  const response = await axios.get(`/api/skills/${params.id}`);

  return {
      props: {
          skill: response.data.data
      },
      revalidate: 10800
  }
}
