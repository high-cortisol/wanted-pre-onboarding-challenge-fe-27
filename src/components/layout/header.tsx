import { Switch } from '../ui/switch';

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 border border-b-primary'>
      <h1 className='text-xl font-bold tracking-widest'>튜듀</h1>
      <div className='flex items-center gap-2'>
        <Switch />
        <span>Offline</span>
      </div>
    </header>
  );
};

export default Header;
