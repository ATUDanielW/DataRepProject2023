import React from "react";
import { Container } from "react-bootstrap";

export class Recipes extends React.Component {
    render() {
        return this.props.Recipes.map(
            (Recipe) => {
                return <RemoveRecipe Recipe={Recipe} key={Recipe._id} Reload={this.props.Reload}></RemoveRecipe>
            }
        );
    }
     

}

const Recipes = () => {
    return (
      <div>
        <h1>this is page for recipes!</h1>
      </div>
    );
  };
    
  export default Recipes;