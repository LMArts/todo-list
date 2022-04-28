import { ThemeProvider } from 'styled-components';
import {theme} from './Global/theme';
import { Main } from './Views/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main/>
    </ThemeProvider>
  );
}

export default App;
