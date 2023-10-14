'use client';

import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  HomeModernIcon,
  XMarkIcon,
  ClockIcon,
  UsersIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid';

const services = [
  {
    name: 'Assisted Daily Living',
    description: 'Get a better understanding where your traffic is coming from',
    href: '#',
    icon: HomeModernIcon,
  },
  {
    name: 'Personal Care & Companionship',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: "Dementia & Alzheimer's Care",
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: HeartIcon,
  },
  {
    name: 'Round-The-Clock Services',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: ClockIcon,
  },
];
const callsToAction = [
  // { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Ask about our services', href: '#', icon: PhoneIcon },
  // { name: 'View all services', href: '#', icon: RectangleGroupIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <header className='fixed w-full isolate z-10 bg-white'>
    <header className='relative isolate z-10 bg-transparent drop-shadow-'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 '
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          {/* HERE */}
          <a
            href='/'
            className='-m-1.5 p-1.5'
          >
            <span className='sr-only'>Your Company</span>

            <img
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600'
              alt=''
            />
          </a>
        </div>
        <div className='flex lg:hidden p-2.5 rounded-md hover:bg-gray-100 transition'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon
              className='h-6 w-6'
              aria-hidden='true'
            />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-6'>
          <a
            href='/about'
            className='transition font-semibold leading-6 text-gray-900 px-4 py-2 hover:bg-gray-100 rounded-md'
          >
            About
          </a>
          <Popover>
            <Popover.Button className='flex items-center gap-x-1 px-4 py-2 hover:bg-gray-100 font-semibold leading-6 text-gray-900 rounded-md transition'>
              Services
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 -translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 -translate-y-1'
            >
              <Popover.Panel className='absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5'>
                <div className='mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8'>
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className='group relative rounded-lg p-6  leading-6 hover:bg-gray-100 transition'
                    >
                      <div className='flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-blue-600'
                          aria-hidden='true'
                        />
                      </div>
                      <a
                        href={item.href}
                        className='mt-6 block font-semibold text-gray-900'
                      >
                        {item.name}
                        <span className='absolute inset-0' />
                      </a>
                      <p className='mt-1 text-gray-600'>{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className='bg-gray-100'>
                  <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='grid grid-cols-1 divide-x divide-gray-900/5 border-x border-gray-900/5'>
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='flex items-center justify-center gap-x-2.5 p-3  font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                        >
                          <item.icon
                            className='h-5 w-5 flex-none text-gray-400'
                            aria-hidden='true'
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href='/pricing'
            className='transition font-semibold leading-6 text-gray-900 px-4 py-2 hover:bg-gray-100 rounded-md'
          >
            Pricing
          </a>
          <a
            href='/team'
            className='transition font-semibold leading-6 text-gray-900 px-4 py-2 hover:bg-gray-100 rounded-md'
          >
            Team
          </a>
          <a
            href='/blog'
            className='transition font-semibold leading-6 text-gray-900 px-4 py-2 hover:bg-gray-100 rounded-md'
          >
            Blog
          </a>
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a
            href='/contact'
            className='rounded-md bg-blue-600 px-3 py-2  font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition'
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Nav */}

      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a
              href='#'
              className='-m-1.5 p-1.5  '
            >
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600'
                alt=''
              />
            </a>
            <button
              type='button'
              className='-m-4.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon
                className='h-6 w-6'
                aria-hidden='true'
              />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <a
                  href='/about'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 transition'
                >
                  About
                </a>
                <Disclosure
                  as='div'
                  className='-mx-3'
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 transition'>
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...services].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='flex items-center gap-4 rounded-lg py-2 pl-6 group pr-3  font-semibold leading-7 text-gray-900 hover:bg-gray-100 transition'
                          >
                            <div className='flex  h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white'>
                              <item.icon
                                className='h-6 w-6 text-gray-600 group-hover:text-blue-600'
                                aria-hidden='true'
                              />
                            </div>
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <a
                  href='/pricing'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 transition'
                >
                  Pricing
                </a>
                <a
                  href='/team'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 transition'
                >
                  Team
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='/blog'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 transition'
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
