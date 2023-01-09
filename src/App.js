 import './App.css';
import { Navbar, Container, Nav, NavDropdown, Row, Col, Image, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import  { RemoveRecipe } from './components/RemoveRecipe';

import Recipes from './components/Recipes'


function App() {
  return (
    <div className="App">
      <header >
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="http://localhost:3000/api/home">Cocktails</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="http://localhost:3000/api/home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Recipes" id="basic-nav-dropdown">
                  <NavDropdown.Item href="http://localhost:3000/api/Recipes">Zombie</NavDropdown.Item>
                  <NavDropdown.Item href="http://localhost:3000/api/Recipes">
                    Whiskey Sour
                  </NavDropdown.Item>
                  <NavDropdown.Item href="http://localhost:3000/api/Recipes">Pomegranate Mojito</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://www.allrecipes.com/recipes/133/drinks/cocktails/">
                    Link to other cocktails website
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={8}>
              <Image src="https://english.cdn.zeenews.com/sites/default/files/2017/07/28/612742-cocktail.jpg"
                fluid
                rounded
              />

            </Col>
            <Col sm={4}>
              <h1>Welcome to best Cocktails recipe website</h1>
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-secondary text-white my-5 py-4">
              <Card.Body>Try our delicious cocktail recipes for every occasion. If you're looking to impress without the faff, try our easy cocktail recipes. Or, if you don't drink alcohol, we have you covered with our thirst-quenching non-alcoholic drink recipes.</Card.Body>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.baconismagic.ca/wp-content/uploads/2018/10/zombie-cocktail-recipe-1365x2048.jpg" />
                <Card.Body>
                  <Card.Title>Zombie Cocktail</Card.Title>
                  <Card.Text>
                    Blend white and dark rum with lime juice, pineapple juice and a splash of grenadine to make this ghoulish Halloween cocktail. Garnish with cherries and mint
                  </Card.Text>
                  <Button variant="primary" href="http://localhost:3000/api/Recipes">Go Recipe</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.cdkitchen.com/recipes/images/pinterest/13/whiskey-sour-103335.jpg" />
                <Card.Body>
                  <Card.Title>Whiskey Sour</Card.Title>
                  <Card.Text>
                    Dust off that cocktail shaker and mix yourself – or your dinner party guests – a classic whiskey sour. You can make it without egg white, but it won't be as silky
                  </Card.Text>
                  <Button variant="primary" href="http://localhost:3000/api/Recipes">Go Recipe</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/d2/22/fd/d222fdbde3b16bfb9b6d630c021f7b77.jpg" />
                <Card.Body>
                  <Card.Title>Pomegranate Mojito Mocktail</Card.Title>
                  <Card.Text>
                    Non-alcoholic cocktails can still be packed with plenty of cheer. This spin on the mint-and-lime classic contains delicious pomegranate seeds and juice
                  </Card.Text>
                  <Button variant="primary" href="http://localhost:3000/api/Recipes">Go Recipe</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer class="py-5 my-5 bg-dark">

      </footer>
    </div>
  );
}

export default App;
