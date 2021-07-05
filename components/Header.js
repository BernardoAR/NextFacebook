import Image from 'next/image';
import { FlagIcon, HomeIcon, PlayIcon, SearchIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      {/* Esquerda */}
      <div className='flex items-center'>
        <Image src='https://links.papareact.com/5me' width={40} height={40} layout='fixed' />
        <div className='flex ml-2 items-center rounded-full bg-gray-200 p-2'>
          <SearchIcon className='h-6 text-gray-600' />
          <input
            className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'
            type='text'
            placeholder='Pesquisar no Facebook'
          />
        </div>
      </div>
      {/* Centro */}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Direita */}
    </div>
  );
}

export default Header;