// 스타일 초기화
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global/globalStyle'; 
import theme from './global/theme';




import FontContainer from './pages/docs/font/FontContainer';








// import CountContainer from './pages/docs/count/CountContainer';
// import AnimalsContainer from './docs/context/expert/AnimalsContainer';
// import ParentContainer from './docs/context/normal/ParentContainer';
// import CharContainer from './docs/context/basic/CharContainer';
// import Styled05 from './pages/docs/_component/Styled05';
// import Styled03 from './pages/docs/_component/Styled03';
// import Styled04 from './pages/docs/_component/Styled04';
// import Styled02 from './pages/docs/_component/Styled02';
// import Styled01 from './pages/docs/_component/Styled01';
// import ProductContainer from './docs/life-cycle/function/memoization/ProductContainer';
// import SideEffectMount from './docs/life-cycle/function/SideEffectMount';
// import InfiniteLoop from './docs/life-cycle/class/InfiniteLoop';
// import SideEffect from './docs/life-cycle/function/SideEffect';
// import LifeCycleContainer from './docs/life-cycle/class/LifeCycleContainer';
// import Foodcontainer from './docs/ref/expert/Foodcontainer';
// import Checkbox from './docs/ref/expert/Checkbox';
// import CheckInput from './docs/ref/CheckInput';
// import Check from './docs/ref/Check';
// import Name from './docs/ref/Name';
// import UserContainer from './docs/map/expert/UserContainer';
// import FoodContainer from './docs/map/basic/FoodContainer';
// import Colors from './docs/state/basic/Colors';
// import Name from './docs/state/basic/Name';
// import Sound from './docs/state/basic/Sound';
// import Count from './docs/state/basic/Count';
// import Container from './docs/props/Container';
// import Jsx02 from './docs/components/Jsx02';
// import Jsx01, {Jsx02, Jsx03 } from './docs/components/Jsx01';
// import FoodContainer from './docs/map/basic/FoodContainer';
// import Colors from './docs/state/basic/Colors';

function App() {
  return (
   <>
    {/* theme.js 공통적용 */}
    <ThemeProvider theme={theme}>
      {/* 스타일 초기화 */}
      <GlobalStyle />
      

      <FontContainer />

    </ThemeProvider>

   </>
  );
}

export default App;
