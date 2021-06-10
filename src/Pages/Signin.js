import React from 'react';
import { Container, Grid, Row, Col, Panel, Button, Icon } from 'rsuite';

const Signin = () => {
  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} sm={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h3>Welcome to IChat</h3>
                <p>Indian chat platform</p>
              </div>

              <div className="mt-3">
                <Button block color="blue">
                  <Icon icon="facebook" />
                  Continue with Facebook
                </Button>
                <Button block color="red">
                  <Icon icon="google" /> Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Signin;
