import React from 'react';
import LazyImage from '../Lazy/LazyImage';

const Section = (props) => {    
    return (
        <div className="w-auto">
            {
                props.img === "posterthatismissing.jpg" ?
                <LazyImage name={props.name} className="h-32 w-44" src={require('../Slices/placeholder_for_missing_posters.png').default} alt=""/> :
                <LazyImage  name={props.name} src={require(`../Slices/${props.img}`).default} alt="" />
            }
            <br/>
        </div>
    )
}

export default React.memo(Section)