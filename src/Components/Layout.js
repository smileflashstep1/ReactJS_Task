import React, { PureComponent, Fragment } from 'react';
import '../assets/App.css';
import FirstList from './FirstList';
import SecondList from './SecondList';
import ThirdList from './ThirdList';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return state
}
class Layout extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: "invisible",
            searchStyle: "invisible",
            searchTerm: '',
        }
    }
    visibilityTrigger = () => {
        this.setState({
            visible: "visible"
        })
    }

    searchStyleTrigger = () => {
        this.setState({
            searchStyle: "visible"
        })
    }

    invisibleTrigger = () => {
        this.setState({
            visible: "invisible",
            searchStyle: "invisible",
            searchTerm:''
        })
    }

    onChangeForSearch = (event) => {
        this.setState({
            searchTerm: event.target.value,
        })
    }
    render() {        
        const data1 = this.props.FirstListReducer.firstList.page["content-items"].content.filter(ite => {
            return ite.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1
        })
        const data2 = this.props.SecondListReducer.secondList.page["content-items"].content.filter(ite => {
            return ite.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1
        })
        const data3 = this.props.ThirdListReducer.thirdList.page["content-items"].content.filter(ite => {
            return ite.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1
        })        
        return (
            <Fragment>
                <div className="container py-4 bg-black flex-3">
                    <div className="flex">
                        <button className="focus:outline-none">
                            <span onClick={this.invisibleTrigger} className="w-auto flex justify-end items-center text-grey hover:text-grey-darkest">
                                <img className={`h-4 pl-2 ${this.state.visible}`} src={require("../Slices/Back.png").default} alt="" />
                            </span>
                        </button>
                        <input onClick={this.visibilityTrigger} className={`w-full text-white bg-transparent h-8 rounded ml-2 ${this.state.searchStyle}`} type="text" onChange={this.onChangeForSearch} value={this.state.searchTerm} placeholder="Type here..." />
                        <button className="focus:outline-none">
                            <span onClick={this.searchStyleTrigger} className="w-auto flex justify-end items-center text-grey p-2 hover:text-grey-darkest">
                                <img className="w-5" src={require("../Slices/search.png").default} alt="" />
                            </span>
                        </button>
                    </div>                    
                </div>
                <div className="flex bg-black space-x-4 p-3">
                    <FirstList data={data1}/>
                    <SecondList data={data2}/>
                    <ThirdList data={data3}/>
                </div>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(Layout)