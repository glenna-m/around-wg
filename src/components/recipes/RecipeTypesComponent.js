import React from "react";
import { Card, CardImg, CardTitle, Jumbotron } from "reactstrap";

import { Loading } from '../LoadingComponent';
import { baseUrl } from "../../shared/baseUrl";

import "./RecipeTypesComponent.scss";

function RecipeTypes(props) {

  if (props.isLoading) {
    return(
      <Loading />
    );
  }

  if (props.errMess) {
    return(
      <h4>{props.errMess}</h4>
    );
  }

  const recipeTypes = props.recipeTypes.map(recipeType => {
    return (
       <div key={recipeType.id} className="col-6 col-sm-3 mt-3 mb-3">
         <Card key={recipeType.id} className="recipe-type-card">
           <CardImg
             src={baseUrl + recipeType.image}
             alt={recipeType.name}
             className="recipe-type-card-img"
           />
           <CardTitle className="mt-2 recipe-type-card-title">
             {recipeType.name}
           </CardTitle>
         </Card>
       </div>
     );
   });

   return (
     <React.Fragment>
       <Jumbotron>
         <div className="container">
           <div className="row-header">
             <div className="col-12 navbar-brand app-garden-header">
               WG Fresh Recipes
             </div>
           </div>

           <div className="row">
             <div className="col-12 app-garden-subheader">
               Recipes shared by home cooks, inspired by the garden, and shaped
               by the many cuisines of our multi-cultural town.{" "}
             </div>
           </div>
         </div>
       </Jumbotron>

       <div id="recipeTypes" className="container">
         <div className="row justify-content-center">{recipeTypes}</div>
       </div>
     </React.Fragment>
   );
}

export default RecipeTypes;
