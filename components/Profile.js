
import { Menu } from "@headlessui/react"
import { Bars3Icon } from "@heroicons/react/20/solid"



const Profile = () => {
    return (
        <div className="pl-3 pt-1">
          <Menu as="div" className="relative inline-block">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-mdpy-1 font-bold text-slate-800">
                <Bars3Icon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-body rounded-md shadow-lg">
              <div className="px-1 py-1">
                <Menu.Item>
                    <button className="group flex w-full items-center rounded-md p-3 font-bold text-sm transition duration-300 hover:bg-header">
                      حسابى
                    </button>
                </Menu.Item>
                <Menu.Item>
                    <button className="group flex w-full items-center rounded-md p-3 font-bold text-sm transition duration-300 hover:bg-header">
                      الطلبات
                    </button>
                </Menu.Item>
                <Menu.Item>
                    <button className="group flex w-full items-center rounded-md p-3 font-bold text-sm transition duration-300 hover:bg-header">
                      خدماتى
                    </button>
                </Menu.Item>
                <Menu.Item>
                    <button className="group flex w-full items-center rounded-md p-3 font-bold text-sm transition duration-300 hover:bg-header">
                      الرصيد
                    </button>
                </Menu.Item>
                <Menu.Item>
                    <button className="group flex w-full items-center rounded-md p-3 font-bold text-sm transition duration-300 hover:bg-header">
                      الإشعارات
                    </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        </div>
      )
    
}


export default Profile