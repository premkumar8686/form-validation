import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import FormComponent from './FormComponent';
// import MyForm from './MyForm';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from './components/About';

function App() {
  return (
    <>
    {/* <MyForm /> */}
    {/* <FormComponent /> */}
    <section className='container'>
    <Routes>
       <Route exact path='/' element={<Home />} />
       <Route exact path='/about' element={<About />} />
    </Routes>
    </section>
    </>
  );
}

export default App;
