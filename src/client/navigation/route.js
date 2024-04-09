
import {useUser} from '../contexts/userContext';

import AppNav from './AppNav';
import Auth from './Auth';

const Route = () => {

  const {signed} = useUser();

  return (
    <>
    {
      signed  
      ? <AppNav />
      : <Auth />
    }
    </>
  )
}

export default Route;