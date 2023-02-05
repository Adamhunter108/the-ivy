import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function LandingModal(props) {
  const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"> */}
              <Dialog.Panel className="relative flex-shrink-0 transform overflow-hidden rounded-xl bg-white pt-5 pb-5 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                
                <div className="absolute top-0 right-0 pt-4 pr-2 lg:pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-neon-pink hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-pink focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                            {/* TODO: GET A REAL X SVG */}
                        <p className="h-6 w-6" aria-hidden="true">X</p>
                  </button>
                </div>

                <div className='pt-7'>
                    <Image 
                        src={props.image}
                        alt='modal image'
                        width="100%" 
                        height="100%" 
                        layout="responsive" 
                        objectFit="contain"
                    />
                </div> 

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
