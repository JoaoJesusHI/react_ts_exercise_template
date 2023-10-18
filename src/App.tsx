import './App.css';
import { Container, Dropdown, Sticky, Menu } from 'semantic-ui-react'
import SearchComponent from './components/SearchComponent'
import {  useState } from 'react'

const languageOptions = [
  { key: 'English', text: 'English', value: 'English', flag: 'gb eng' }, 
  { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' , flag: 'pt' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish', flag: 'es'  }
]

function App() {

  const [language, setLanguage] = useState('English');
  return (
    <>
    <Sticky>
          <Menu
            attached='top'
            tabular
            style={{ backgroundColor: '#fff', paddingTop: '1em' }}
          >
            
            <Menu.Menu position='right'>
              <Menu.Item>
              <Dropdown style={{'minWidth':'150px'}}
                   placeholder='Select Language'
                   fluid
                   search
                   selection
                   options={languageOptions}
                   value={language}
                   onChange={(e, data : any) => setLanguage(data.value ?? "")}
                />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Sticky>        
      <Container className='container-padding'>
        <SearchComponent></SearchComponent>    
      </Container>  
    </>
  );
}

export default App;
