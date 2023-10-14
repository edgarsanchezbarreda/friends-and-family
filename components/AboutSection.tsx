import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

import { FounderAvatar } from './ui/FounderAvatar';
import caregiver from '../images/Caregiver.jpeg';
import Image from 'next/image';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
];

export default function AboutSection() {
  return (
    <div className='overflow-hidden bg-gray-100 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:ml-auto lg:pl-4 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <h2 className='text-base font-semibold leading-7 text-blue-600'>
                About Us
              </h2>
              <h3 className='font-display mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Welcome to Friends and Family Home Care
              </h3>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                With Friends and Family Home Care, your well-being and
                satisfaction is our number one priority. Along with the best and
                most supportive customer service we can provide.
              </p>

              <hr className='my-8 bg-gray-200 h-[2px]' />

              <FounderAvatar
                imageSrc='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                name='Carlos Arias'
                role='Founder and CEO, Friends and Family Home Care'
              />
              <FounderAvatar
                imageSrc='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                name='Hilda Arias'
                role='Founder and CEO, Friends and Family Home Care'
              />

              <a
                href='#'
                className='rounded-md bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition'
              >
                Explore More
              </a>

              {/* Previous Feature Section */}
              {/* <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className='relative pl-9'
                  >
                    <dt className='inline font-semibold text-gray-900'>
                      <feature.icon
                        className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
          <div className='flex items-start justify-end lg:order-first'>
            <Image
              src={caregiver}
              // src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
              alt='Product screenshot'
              className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
