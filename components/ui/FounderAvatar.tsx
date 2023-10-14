import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from 'next/dist/shared/lib/constants';
import Image from 'next/image';

interface FounderAvatarProps {
  imageSrc: string;
  tag?: string;
  name: string;
  role: string;
}

// DELETE LATER
const defaultImage =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

export const FounderAvatar: React.FC<FounderAvatarProps> = ({
  imageSrc = defaultImage,
  name,
  tag,
  role,
}) => {
  return (
    <div className='block mb-8'>
      <div className='flex items-center'>
        <div className='p-4'>
          <Image
            height={50}
            width={50}
            className='inline-block rounded-full'
            src={imageSrc}
            alt='Founder avatar image'
          />
          {/* <img
            className='inline-block h-9 w-9 rounded-full'
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          /> */}
        </div>
        <div className='ml-3'>
          <p className='text-sm font-bold text-gray-700 '>{tag}</p>
          <p className='text-sm font-medium text-gray-700 '>{name}</p>
          <p className='text-xs font-medium text-gray-500 '>{role}</p>
        </div>
      </div>
    </div>
  );
};
