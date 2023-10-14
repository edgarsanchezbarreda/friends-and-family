import Image from 'next/image';
import eldercare from '../images/raychan-yk7F8bdD0eU-unsplash.jpg';

export default function Hero() {
  return (
    <>
      <div className='relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 pt-14'>
        <div
          className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-gray-50 shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:-mr-80 lg:-mr-96'
          aria-hidden='true'
        />
        <div className='mx-auto max-w-7xl px-6 py-4 sm:py-40 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
            <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto font-display'>
              Personal Care For The Ones You Love Most
            </h1>
            <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
              <p className='text-lg leading-8 text-gray-600'>
                Our caregivers offer unwavering support to ensure that your
                loved one receives the comfort they need and deserve. With a
                focus on professionalism and dependability, we provide
                high-quality personal care services to the greater Los Angeles
                and Orange County areas.
              </p>
              <div className='mt-10 flex items-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition'
                >
                  Find Care
                </a>
                <a
                  href='#'
                  className='group text-sm rounded-md font-semibold px-6 py-4 leading-6 text-gray-900  hover:bg-gray-200 transition '
                >
                  Explore Our Services{' '}
                  <span
                    className=''
                    aria-hidden='true'
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
            <Image
              priority
              src={eldercare}
              alt='Image of elder with care giver'
              className='mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'
            />
          </div>
        </div>
      </div>
    </>
  );
}
