import React from 'react';
import { Link } from 'react-router-dom';
import { BottomComponent } from '../cmps/bottom-component';
import { MainComponent } from '../cmps/component';
import { UpperComponent } from '../cmps/upper-component';
// import CardImg from '../assets/svg/card-back.svg';

export class HomePage extends React.Component {
    state = {};

    render() {
        return (
            <section className='home-page'>
                <UpperComponent/>
                <MainComponent />
                <BottomComponent/>
            </section>
        );
    }
}
