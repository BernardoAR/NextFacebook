import {
  UsersIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  DesktopComputerIcon,
  CalendarIcon,
  ClockIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline';
import { useSession } from 'next-auth/client';
import SidebarRow from './SidebarRow';
function Sidebar() {
  const [session, loading] = useSession();
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title='Amigos' />
      <SidebarRow Icon={UserGroupIcon} title='Grupos' />
      <SidebarRow Icon={ShoppingBagIcon} title='Marketplace' />
      <SidebarRow Icon={DesktopComputerIcon} title='Watch' />
      <SidebarRow Icon={CalendarIcon} title='Eventos' />
      <SidebarRow Icon={ClockIcon} title='Lembranças' />
      <SidebarRow Icon={ChevronDownIcon} title='Ver Mais' />
    </div>
  );
}

export default Sidebar;
