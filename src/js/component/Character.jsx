import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Character = ({id, image, name, species, status}) => {

    
    // const {image, name, species, status} = character
    
    return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 my-3">
            <div  className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{species}</p>
                    <p className="card-text">{status}</p>
                    <Link to={`/character/${id}`} className="btn btn-primary">
                        Ver mas
                    </Link>
                </div>
            </div>
        </div>
    );

}

Character.propTypes = {
    character: PropTypes.object
}

export default Character;