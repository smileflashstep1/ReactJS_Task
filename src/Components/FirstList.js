import React from 'react';
import '../assets/App.css';
import { connect } from 'react-redux';
import Section from './Section';

const mapStateToProps = state => {
    return {
        firstList: state.FirstListReducer.firstList.page
    }
}

const FirstList = (props) => {
    return (
        <div id="no-scroll1" className="flex-col overflow-y-auto h-screen">
            {
                props.data.map((iterator, index) => (                        
                    <Section key={index} img={iterator['poster-image']} name={iterator.name}/>
                ))
            }
        </div>
    )
}

export default connect(mapStateToProps)(React.memo(FirstList))