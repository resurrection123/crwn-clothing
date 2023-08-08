import { Routes, Route } from 'react-router-dom'
import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component'
import Authentication from './components/routes/authentication/authentication.component'
import Shop from './components/routes/shop/shop.component';
import Checkout from './components/routes/checkout/checkout.component';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';

const App = () => {

  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(checkUserSession());
  }, [dispacth]);



  return (
    <Routes>
      <Route path='/' element={<Navigation />}>

        <Route index element={<Home />} />
        <Route path='sign-in' element={<Authentication />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>

    </Routes >
  )
}

export default App;
