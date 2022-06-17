import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    /*return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );*/
    const { tokens } = useTheme();
  return (
    <Card variation="elevated">
      <Flex direction="row" alignItems="flex-start">
        <Image src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80"
          alt="Grey chair" width="8rem"/>
        <Flex direction="column" gap={tokens.space.xs}>
          <Flex direction="row">
            <Badge variation="success">New</Badge>
          </Flex>
          <Heading level={3}>
            Product title
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque risus in sem dapibus, nec vestibulum metus mattis. Mauris dignissim maximus tellus, in feugiat nibh rhoncus a.
          </Text>
          <Text
            fontSize={tokens.fontSizes.large}
            color={tokens.colors.font.secondary}>
            $199.99
          </Text>
          <Flex direction='row'>
            <StepperField
              label="Quantity"
              min={0}
              max={10}
              step={1}
              labelHidden
            />
            <Button variation="primary">Add to cart</Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  )
    
    
    
  }
}

export default withAuthenticator(App);
