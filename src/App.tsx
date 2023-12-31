import './App.css';
import { Container, Dropdown, Sticky, Menu } from 'semantic-ui-react'
import {  useState } from 'react'

const languageOptions = [
  { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
  { key: 'Danish', text: 'Danish', value: 'Danish' },
  { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Greek', text: 'Greek', value: 'Greek' },
  { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
  { key: 'Italian', text: 'Italian', value: 'Italian' },
  { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
  { key: 'Korean', text: 'Korean', value: 'Korean' },
  { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
  { key: 'Persian', text: 'Persian', value: 'Persian' },
  { key: 'Polish', text: 'Polish', value: 'Polish' },
  { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
  { key: 'Russian', text: 'Russian', value: 'Russian' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
  { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
  { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
]

function App() {

  const [language, setLanguage] = useState('');
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
              <Dropdown
                  button
                  className='icon'
                  floating
                  labeled
                  icon='world'
                  options={languageOptions}
                  search
                  text='Select Language'
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
