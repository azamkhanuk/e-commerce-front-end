import React from 'react';
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
  Flag
} from 'semantic-ui-react';

const Footer = () => (
  <div>
    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Links' />
            <List link inverted>
              <List.Item as='a'>About Us</List.Item>
              <List.Item as='a'>History</List.Item>
              <List.Item as='a'>Help</List.Item>
              <List.Item as='a'>Newsletter</List.Item>
              <List.Item as='a'>
                <Flag name='uk' />
                United Kingdom
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={12}>
            <Header inverted as='h4' content='FAISANDÉ' />
            <p>Buy the most exclusive trainers on the planet today!</p>
          </Grid.Column>
        </Grid>

        <Divider />
        <div>
          <i className='fas fa-chess-king' />
        </div>
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
);

export default Footer;
