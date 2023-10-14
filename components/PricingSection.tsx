'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: '12 Hour Care',
    id: '12 Hour Care',
    href: '#',
    price: '$28',
    description: 'The essentials to provide your best work for clients.',
    features: [
      'Meal Preparation',
      'Light House Cleaning',
      'Assistance with running errands',
      'Medication Remainders',
      'Toileting Assistance',
      'Showering Assistance',
    ],
    mostPopular: false,
  },
  {
    name: '24 Hour Care',
    id: '24 Hour Care',
    href: '#',
    price: '$27',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      'Meal Preparation',
      'Light House Cleaning',
      'Assistance with running errands',
      'Medication Remainders',
      'Toileting Assistance',
      'Showering Assistance',
    ],
    mostPopular: true,
  },
  {
    name: 'Custom',
    id: 'Custom',
    href: '#',
    price: 'Custom',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Meal Preparation',
      'Light House Cleaning',
      'Assistance with running errands',
      'Medication Remainders',
      'Toileting Assistance',
      'Showering Assistance',
    ],
    mostPopular: false,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function PricingSection() {
  // const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className='bg-blue-700 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-base font-semibold leading-7 text-gray-200'>
            Pricing
          </h2>
          <h3 className='font-display mt-2 text-4xl font-bold tracking-normal text-white sm:text-5xl'>
            Pricing plans catered to your home care needs
          </h3>
        </div>
        <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300'>
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className='mt-16 flex justify-center'>
          {/* <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className='grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white'
          >
            <RadioGroup.Label className='sr-only'>
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? 'bg-indigo-500' : '',
                    'cursor-pointer rounded-full px-2.5 py-1'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup> */}
        </div>
        <div className='isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'bg-white/5 ring-2 ring-blue-500'
                  : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className='flex items-center justify-between gap-x-4'>
                <h3
                  id={tier.id}
                  className='text-lg font-semibold leading-8 text-white'
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className='rounded-full bg-blue-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white'>
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className='mt-4 text-sm leading-6 text-gray-300'>
                {tier.description}
              </p>
              <p className='mt-6 flex items-baseline gap-x-1'>
                <span className='text-4xl font-bold tracking-tight text-white'>
                  {tier.price}
                </span>
                <span className='text-sm font-semibold leading-6 text-gray-300'>
                  {tier.price === 'Custom' ? '' : '/ hour'}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-blue-500 text-white shadow-sm hover:bg-blue-400 focus-visible:outline-blue-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition'
                )}
              >
                {tier.price === 'Custom' ? 'Contact Us' : 'Schedule Service'}
              </a>
              <ul
                role='list'
                className='mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10'
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className='flex gap-x-3'
                  >
                    <CheckIcon
                      className='h-6 w-5 flex-none text-white'
                      aria-hidden='true'
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
