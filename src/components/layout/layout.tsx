import Footer from './footer';
import Header from './header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex justify-center w-full h-dvh'>
      <div className='flex flex-col w-full border border-primary max-w-96 '>
        <Header />
        <main className='flex-1 p-4 overflow-y-auto'>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
