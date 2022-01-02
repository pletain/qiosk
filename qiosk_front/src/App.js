import React from 'react';
import CartContainer from './store/containers/CartContainer';
import MenuContainer from './store/containers/MenuContainer';

const App = () => {

  return (
    <div align="center">
      <div>
        <section float="left">
        <MenuContainer />
        </section>
        <hr/>
        <aside float="right">
          <CartContainer />
        </aside>
      </div>
    </div>
  )
}
export default App;