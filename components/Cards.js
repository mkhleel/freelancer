import { StarIcon } from "@heroicons/react/20/solid"


const Cards = () => {
  const people = [
    {
      title: 'محمد أحمد',
      section: 'لوجو',
      imageUrl:
        'https://images.unsplash.com/photo-1671602710982-0459d6b6b607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      sales: 12,
      price: 120,
      rate: 3.8,
    },
    {
      title: 'عبدالرحمن على',
      section: 'تصميم مواقع',
      imageUrl:
        'https://images.unsplash.com/photo-1671602710982-0459d6b6b607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      sales: 12,
      price: 120,
      rate: 3.8,
    },
    {
      title: 'محمد أحمد',
      section: 'لوجو',
      imageUrl:
        'https://images.unsplash.com/photo-1671602710982-0459d6b6b607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      sales: 12,
      price: 120,
      rate: 3.8,
    },

    {
      title: 'طارق مغازى',
      section: 'كتابة وأبحاث',
      imageUrl:
        'https://images.unsplash.com/photo-1671602710982-0459d6b6b607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      sales: 12,
      price: 120,
      rate: 3.8,
    },
    {
      title: 'فرناردو ادوارد',
      section: 'محاماه',
      imageUrl:
        'https://images.unsplash.com/photo-1671602710982-0459d6b6b607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      sales: 12,
      price: 120,
      rate: 3.8,
    },
    {
      title: 'طارق مغازى',
      section: 'كتابة وأبحاث',
      imageUrl:
        'https://images.unsplash.com/photo-1671602710982-0459d6b6b607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      sales: 12,
      price: 120,
      rate: 3.8,
    },
  ]
  
  return (
    <div className="">
      <div className=" m-3 md:m-5">
        <div className="space-y-12">
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-4"
          >
            {people.map((person) => (
              <li key={person.title}>
                <a href="#" className="space-y-1">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="object-cover shadow-lg rounded-t-lg hover:grayscale" src={person.imageUrl} alt="" />
                  </div>

                  <div className="flex justify-between">
                    <div class="group items-center">
                        <div class="text-sm text-md font-bold flex">
                          <img class="shrink-0 h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1669489277853-f80067be8d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                          <div class="text-md font-extrabold text-slate-500 group-hover:text-slate-300 pt-2 pr-2">
                            {person.title}
                          </div>
                        </div>
                        <div class=" text-xs text-slate-500 pr-11 -mt-1">
                          {person.section}
                        </div>
                        <div class=" text-sm pr-11 mt-1">
                          {person.sales} مبيعات
                        </div>
                    </div>

                    <div class="group text-left space-y-4 mt-1">
                        <div class="flex text-md bg-slate-900 text-white px-2 rounded-md">
                          <div className="">{person.rate}</div>
                          <StarIcon 
                            className="h-5 pt-1 mr-1"/>
                        </div>
                        <div class="text-lg font-extrabold">
                          {person.price} $
                        </div> 
                    </div>

                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
  
export default Cards
  