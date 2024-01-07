'use client';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, CameraIcon, FaceSmileIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Photos', href: '/photos', current: false },
  // Add more links as needed
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <Disclosure as="nav" className="bg-purple-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 pr-8 items-center">
                  <Link href="/">
                      <FaceSmileIcon className="text-2xl sm:text-xl font-semibold text-white px-3 py-2 rounded hover:bg-gray-700" />
                  </Link>
                </div>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                const isActive = item.href === pathname;
                return (
                      <Link key={item.name} href={item.href} className={classNames(
                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                          {item.name === 'Home' ? <HomeIcon className="h-5 w-5" aria-hidden="true" /> : 
                           item.name === 'Photos' ? <CameraIcon className="h-5 w-5" aria-hidden="true" /> : 
                           item.name}
                      </Link>
                      );
                    })}
                  </div>
                </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = item.href === pathname;
                return (
                <Disclosure.Button key={item.name} as="a" href={item.href} className={classNames(
                  isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'flex justify-center rounded-md px-3 py-2 text-base font-medium max-w-xs mx-auto'
                )}
                aria-current={isActive ? 'page' : undefined}>
                    {item.name === 'Home' ? <HomeIcon className="h-5 w-5" aria-hidden="true" /> : 
                     item.name === 'Photos' ? <CameraIcon className="h-5 w-5" aria-hidden="true" /> : 
                     item.name}
                </Disclosure.Button>
              );
            })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;