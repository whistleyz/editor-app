import React from 'react';
import styles from './index.less';
import { GeistProvider, CssBaseline, Button, Page } from '@geist-ui/react'
import Editor from './Editor'

const Layout: React.FunctionComponent = ({ children }) => (
  <Page size="small">
    <Page.Header>
      <h2>头部</h2>
    </Page.Header>
    <Page.Content>
      { children }
    </Page.Content>
    <Page.Footer>
      <h2>尾部</h2>
    </Page.Footer>
  </Page>
)

const AppComponent = () => {
  return (
    <Layout>
      <Editor />
      <Button>dakai</Button>
    </Layout>
  );
}

export default () => (
  <GeistProvider>
    <CssBaseline />
    <AppComponent />
  </GeistProvider>
)
