import React from 'react';
import { ReviewPreview } from './review-preview';
import { ReactComponent as BottomRightSVG } from '../assets/img/bg-pattern-home-5.svg';
import { ReactComponent as UpperLeftSVG } from '../assets/img/bg-pattern-home-4-about-3.svg';
import kadyPic from '../assets/img/avatar-kady.jpg';
import aiyshaPic from '../assets/img/avatar-aiysha.jpg';
import arthurPic from '../assets/img/avatar-arthur.jpg';

export class MainComponent extends React.Component {
    render() {
        const data = [
            {
                name: 'Kady Baker',
                title: 'Product Manager at Bookmark',
                avatar: kadyPic,
                review: ' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
            },
            {
                name: 'Aiysha Reese',
                title: 'Founder of Manage',
                avatar: aiyshaPic,
                review: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
            },
            {
                name: 'Arthur Clarke',
                title: 'Co-founder of MyPhysio',
                avatar: arthurPic,
                review: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
            },
        ];
        return (
            <section className='main-component'>
                <container>
                    <UpperLeftSVG />
                    <BottomRightSVG />
                    {/* <MyNavBar logo={} title="HP" navlinks={'home','products','about'} isMobile/> */}
                    <div className='container'>
                        <div className='header'>
                            <p>
                                Delivering real results for top
                                <br />
                                companies. Some of our <span>success stories.</span>
                            </p>
                        </div>
                        <div className='reviews'>
                            {data.map(({ name, title, avatar, review }, idx) => (
                                <ReviewPreview key={idx} name={name} title={title} avatar={avatar}>
                                    {review}
                                </ReviewPreview>
                            ))}
                        </div>
                    </div>
                </container>
            </section>
        );
    }
}
