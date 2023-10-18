import { useEffect, useState, useCallback } from 'react'
import { Button,  Input, Grid, Message, Icon  } from 'semantic-ui-react'
import UsersList from './UsersList'

export default function SearchComponent() {

    // 1. Should get the users to filter from https://dummyjson.com/users
  // 2. Users should be listed by the UsersList component
 
  
  return (
    <>
      <Input>
          <input />
          <Button type='submit'>Search</Button>
      </Input>
      <br/>
      <Grid columns={2}>   
        <Grid.Column>  
          <UsersList></UsersList>
        </Grid.Column>
        <Grid.Column>
        
          <Message icon>
            <Icon name='circle notched' loading />
            <Message.Content>
              Select a user
            </Message.Content>
          </Message>
        </Grid.Column>
      </Grid>
    </>
  )
}
