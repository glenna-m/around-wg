import React from 'react';
  
// creates a forward rotating spinner
export const Loading = () => {
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
            <p> Loading . . . </p>
        </div>
    );
}
