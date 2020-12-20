import React, { Component, Fragment } from 'react';

export default class LazyImage extends Component {
    constructor(props) {
        super(props);
        this.state = { intersected: false };
        this.observer = null;
    }

    componentDidMount() {
        this.observer = new IntersectionObserver(entries => {
            const image = entries[0];
            if (image.isIntersecting) {
                this.setState({ intersected: true });
                this.observer.disconnect();
            }
        });

        this.observer.observe(this.imgTag);
    }

    componentWillUnmount() {
        this.observer.disconnect();
    }

    render() {        
        const { src, alt, ...props } = this.props;        
        return (
            <Fragment>
                <img
                    src={this.state.intersected ? src : ''}
                    alt={alt || ''}
                    ref={elem => (this.imgTag = elem)}
                    {...props}
                />
                {
                    this.state.intersected && this.imgTag !== undefined ? <p className="text-white text-xs">{this.props.name}</p> : null
                }
            </Fragment>
        );
    }
}
