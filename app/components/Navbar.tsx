"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Astrophotography", href: "/astrophotography", current: false },
  { name: "Nature", href: "/nature", current: false },
  { name: "Animals", href: "/animals", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <Disclosure className="bg-very-light-brown" as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-md p-2 
                                            text-cyan-blue hover:bg-light-cyan-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-auto flex-shrink-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-1 items-center">
                  <Link href="/">
                    <h1
                      className="subpixel-antialiased font-bold text-base sm:text-3xl 
                                 text-cyan-blue hover:bg-light-cyan-blue hover:text-white rounded-md px-3 py-2 pl-0 sm:pl-40 md:pl-0"
                    >
                      Brandon McKimmons
                    </h1>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block ml-2 sm:ml-6">
                <div className="flex space-x-2">
                  {navigation.map((item) => {
                    const isActive = item.href === pathname;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          isActive
                            ? "bg-cyan-blue text-white"
                            : "text-indigo-400 hover:bg-light-cyan-blue hover:text-white",
                          "rounded-md px-2 py-2 text-sm font-medium"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.name === "Home" ? (
                          <HomeIcon className="h-5 w-5" aria-hidden="true" />
                        ) : item.name === "Astrophotography" ? (
                          <p
                            className="h-5 w-full text-center"
                            aria-hidden="true"
                          >
                            Astrophotography
                          </p>
                        ) : item.name === "Nature" ? (
                          <p
                            className="h-5 w-full text-center"
                            aria-hidden="true"
                          >
                            Nature
                          </p>
                        ) : item.name === "Animals" ? (
                          <p
                            className="h-5 w-full text-center"
                            aria-hidden="true"
                          >
                            Animals
                          </p>
                        ) : item.name === "Blog" ? (
                          <p
                            className="h-5 w-full text-center"
                            aria-hidden="true"
                          >
                            Blog
                          </p>
                        ) : item.name === "About" ? (
                          <p
                            className="h-5 w-full text-center"
                            aria-hidden="true"
                          >
                            About
                          </p>
                        ) : (
                          item.name
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden w-full h-auto">
            <div className="space-y-1 px-20 pb-3 pt-2 w-full h-auto">
              {navigation.map((item) => {
                const isActive = item.href === pathname;
                return (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      isActive
                        ? "bg-cyan-blue text-white"
                        : "text-cyan-blue hover:bg-light-cyan-blue hover:text-white",
                      "flex justify-center rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name === "Home" ? (
                      <HomeIcon className="h-5 w-5" aria-hidden="true" />
                    ) : item.name === "Astrophotography" ? (
                      <p className="h-5 w-full text-center" aria-hidden="true">
                        Astrophotography
                      </p>
                    ) : item.name === "Nature" ? (
                      <p className="h-5 w-full text-center" aria-hidden="true">
                        Nature
                      </p>
                    ) : item.name === "Animals" ? (
                      <p className="h-5 w-full text-center" aria-hidden="true">
                        Animals
                      </p>
                    ) : item.name === "Blog" ? (
                      <p className="h-5 w-full text-center" aria-hidden="true">
                        Blog
                      </p>
                    ) : item.name === "About" ? (
                      <p className="h-5 w-full text-center" aria-hidden="true">
                        About
                      </p>
                    ) : (
                      item.name
                    )}
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
