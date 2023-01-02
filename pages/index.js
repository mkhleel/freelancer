import Head from "next/head"
import Layout from "../components/layout"
import { StarIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import axios from '../lib/axios'


export default function Home({skills, categories}) {


  return (
    <>
      <Head>
        <title>App Name</title>
        <meta name="description" content="App Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout categories={categories}>
        <div className="">
        <div className=" m-3 md:m-5">
          <div className="space-y-12">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-4"
            >
              {skills.map((skill) => (
                <li key={skill.id}>
                  <Link href={"/skills/" + skill.id} className="space-y-1">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover shadow-lg rounded-t-lg hover:grayscale" src="https://images.unsplash.com/photo-1671602710982-0459d6b6b607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                    </div>

                    <div className="flex justify-between">
                      <div className="group items-center">
                          <div className="text-sm text-md font-bold flex">
                            <img className="shrink-0 h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1669489277853-f80067be8d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <div className="text-md font-extrabold text-slate-500 group-hover:text-slate-300 pt-2 pr-2">
                              {skill.title}
                            </div>
                          </div>
                          <div className=" text-xs text-slate-500 pr-11 -mt-1">
                            {skill.title}
                          </div>
                          <div className=" text-sm pr-11 mt-1">
                            12 مبيعات
                          </div>
                      </div>

                      <div className="group text-left space-y-4 mt-1">
                          <div className="flex text-md bg-slate-900 text-white px-2 rounded-md">
                            <div className="">2</div>
                            <StarIcon 
                              className="h-5 pt-1 mr-1"/>
                          </div>
                          <div className="text-lg font-extrabold">
                            120 $
                          </div> 
                      </div>

                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </Layout>
    </>
  )
}


{/* <Image
src="https://images.unsplash.com/photo-1671523435843-e3cd426c24e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
  alt="Picture of the author"
  width="{500}"
  height={500}
/> */}

export async function getStaticProps() {
  const response = await axios.get('/api/skills');
  const response2 = await axios.get('/api/categories');

  return {
      props: {
          skills: response.data.data,
          categories: response2.data.data
      },
  }
}
