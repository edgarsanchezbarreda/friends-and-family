import {
  HomeModernIcon,
  ClockIcon,
  HeartIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Assisted Daily Living',
    description:
      'Assisted daily living becomes easier with the unwavering support of Friends and Family caregivers, who ensure that your loved ones receive the comfort they deserve. Our commitment to professionalism and dependability is reflected in the provision of exceptional personal care services that meet the highest quality standards.',
    icon: HomeModernIcon,
  },
  {
    name: 'Personal Care & Companionship',
    description:
      'Friends and Family Home Care prioritizes developing a customized care strategy that fosters both comfort and wellness for each individual. Our services are designed to cater to the specific requirements of every client, guaranteeing that they receive appropriate care when they need it most.',
    icon: UsersIcon,
  },
  {
    name: `Dementia & Alzheimer's Care`,
    description: `When it comes to caring for those with Dementia and Alzheimer's, our caregivers are dedicated to providing unparalleled support to ensure that your loved one is given the utmost comfort and attention they deserve. With an unwavering focus on professionalism and dependability, we take pride in the highest-quality personal care.`,
    icon: HeartIcon,
  },
  {
    name: 'Round-The-Clock Services',
    description:
      'To ensure clients receive uninterrupted care throughout the night, Friends and Family provides a 24-hour plan. This comprehensive service is delivered by two dedicated caregivers who take turns every 12 hours, guaranteeing that assistance is always available.',
    icon: ClockIcon,
  },
];

export default function ServicesSection() {
  return (
    <div className='bg-blue-700'>
      <div className='mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:max-w-7xl lg:px-8 lg:py-40'>
        <h2 className='text-4xl font-bold tracking-tight text-white'>
          Our Services
        </h2>
        <p className='mt-6 mb-20 max-w-3xl text-lg leading-8 text-blue-100'>
          Our caregivers offer unwavering support to ensure that your loved one
          receives the comfort they need and deserve. With a focus on
          professionalism and dependability, we provide high-quality personal
          care services.
        </p>
        <hr />
        <div className='mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16'>
          {features.map((feature) => (
            <a
              href=''
              className='flex flex-col justify-between rounded-md p-4 hover:bg-blue-600 transition'
              key={feature.name}
            >
              <div>
                <div>
                  <span className='flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-10'>
                    <feature.icon
                      className='h-8 w-8 text-white'
                      aria-hidden='true'
                    />
                  </span>
                </div>
                <div className='mt-6'>
                  <h3 className='text-lg font-semibold leading-8 text-white'>
                    {feature.name}
                  </h3>
                  <p className='mt-2 text-base leading-7 text-blue-100'>
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className='mt-6 text-white'>
                <p className='text-sm font-semibold leading-6'>
                  Learn more <span aria-hidden='true'>→</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
