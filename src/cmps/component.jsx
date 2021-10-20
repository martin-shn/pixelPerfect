import React from 'react'
import {Review} from './review-preview'
import {ReactComponent as BottomRightSVG} from '../assets/img/bg-pattern-home-5.svg'
import {ReactComponent as UpperLeftSVG} from '../assets/img/bg-pattern-home-4-about-3.svg'

export class MainComponent extends React.Component{

    render(){
        return (
            <section className="main-component">
                <UpperLeftSVG/>
                <BottomRightSVG/>
                <div className="container">
                    <div className="header">
                        <p>Delivering real results for top<br/>companies. Some of our <span>success stories.</span></p>
                    </div>
                    <div className="reviews">
                        <Review name="Kady Baker" title="Product Manager at Bookmark" avatar="avatar-kady.jpg"> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</Review>
                        <Review name="Aiysha Reese" title="Founder of Manage" avatar="avatar-aiysha.jpg"> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</Review>
                        <Review name="Arthur Clarke" title="Co-founder of MyPhysio" avatar="avatar-arthur.jpg"> “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</Review>
                    </div>
                </div>
            </section>
        )
    }
}
