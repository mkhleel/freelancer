import { Label, Textarea } from "flowbite-react";
import Breadcrumb from "../components/Breadcrumb";
import Layout from "../components/layout";

export default function Chat({ initialPropsCounter }) {
  return (
<Layout hero={false} >
    <div className="flex mt-8 ">
        <div className="hidden md:flex">
            <div className="h-full overflow-y-auto px-2">
                <div className="cursor-pointer transform hover:scale-95 duration-300 transition-transform bg-white hover:bg-header mb-4 rounded-lg p-4 flex shadow-md">
                    <div className="w-12 h-12 relative">
                        <img className="w-12 h-12 rounded-full mx-auto" src="https://source.unsplash.com/L2cxSuKWbpo/600x600" alt="chat-user"  />
                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                    </div>
                    <div className=" px-2">
                        <div className="truncate w-32"><span className="text-gray-800">تصميم هوية بصرية كاملة</span></div>
                        <div className="text-gray-600 ">$200</div>
                    </div>
                    <div className="text-left">
                        <div className="text-xs leading-6 text-center inline-block">
                            قيد التنفيذ
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col grow pr-3 bg-white shadow-xl p-6">
            <h2 className="text-xl py-1 mb-8 border-b-2 border-gray-200">التواصل مع <b>بدر</b></h2>
            <div className="max-h-screen overflow-y-auto">
                <div className="mb-2 flex flex-row-reverse">
                    <div className="">
                        <div className="w-12 h-12 relative">
                            <img className="w-12 h-12 rounded-full mx-auto" src="https://source.unsplash.com/L2cxSuKWbpo/600x600" alt="chat-user"  />
                            <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                            <span>مرحبا محمد، هل لديك رؤية معينة فى تصميم الشعار ؟</span>
                        </div>
                        <div className="pl-4"><small className="text-gray-500">15 April</small></div>
                    </div>
                </div>
                <div className="mb-2 flex text-right">
                    <div className="px-2">
                        <div className="bg-blue-600 rounded-full p-2 px-6 text-white">
                            <span>صحيح أستاذ بدر <br /> بسوى سكيتش وبرسلك </span>
                        </div>
                        <div className="pr-4 text-left"><small className="text-gray-500">15 April</small></div>
                    </div>
                </div>
            </div>
            <div className=" pt-4 pb-10">
                <div className="write bg-white shadow rounded-lg">
                    <div className="">
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                            أكتب رسالتك
                        </label>
                        <div className="mt-1">
                            <textarea
                            rows={4}
                            name="comment"
                            id="comment"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Layout>
 

    )
}