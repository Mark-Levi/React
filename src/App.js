import './App.css';
import Header from './Header/Header';
import Test from './Test';

const headerData = {
  site_name: 'my text site name',
  nav: [
    { link: 'nav1', text: 'my link' },
    { link: 'nav2', text: 'my link 2' },
    { link: 'nav3', text: 'my link 3' },
  ],
};
function App() {
  return (
    <>
      <Header data={headerData} />
      <Test />
    </>
  );
}

export default App;
