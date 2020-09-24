import React, { useEffect } from "react";
import './Events.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Event(props) {
    useEffect(() => {
        AOS.init();
    })
    const img = "eimg " + props.fit;
    return (
        <div className="events" data-aos="zoom-out-up" data-aos-offset="-20">
            <div className="eimgdesc">
                <img className={img} src={props.img} alt={props.name} />
                <div className="img-overlay">
                    <div className="edesc">{props.desc}</div>
                </div>
            </div>
            <div className="ename">{props.name}</div>
        </div>
    );
}

function Events() {
    return (
        <div className="d-flex event-container">
            <Event img="./assets/Logos/esummit.png" fit="fit" name="E-summit" desc="Masquerading as a single event, it is a fusion of visionary activities and insightful sessions that open the realm of networking and broaden the horizon of business in your mind. Nurture your entrepreneurial heart by plunging into our flagship event." />
            <Event img="./assets/Logos/hackertech.png" fit="fit" name="HackerTech" desc="A great mind worries less about the problem, and more about the solution. Hackertech is a 36-hour national tech business marathon that provides a plethora of opportunities for your genius and creative mind to showcase it’s true potential. Let the entrepreneur in you run and beat the ticking clock to Define, Devise and Develop." />
            <Event img="./assets/Logos/startupvit.png" fit="fit" name="Start-up VIT" desc="Brace yourselves to present your ideas to a professional panel. Start-up VIT, the tech business plan competition paves a way for deserving and ingenious startup ideas to get incubated under VIT-TBI and brings with it incubation grants, product development, testing and trial and a surge of other advisory support to the most innovative startup ideas." />
            <Event img="./assets/Logos/future.png" fit="fit" name="Futurep₹eneurs" desc="Students may come and go every year, but the spirit of entrepreneurship that flows amongst them never dies. With Futurepreneurs, put yourself in the shoes of a CEO and conquer the challenges ahead of you. Take a glance at what it’s like to be a part of a startup and dive into the world of business with our annual, wildly popular graVITas event." />
            <Event img="./assets/Logos/b2b.png" fit="fit" name="Back 2 Business " desc="Discover that a brand is much more than a logo, that a tagline is much more than just words. Witness the surge of expertise and entrepreneurial insight as some of the esteemed speakers voice your vision and open the doors to the world of business." />
            <Event img="./assets/Logos/bnb.png" fit="fit" name="Business and Beyond" desc="The secret to getting ahead is getting started. The earlier you learn about establishing your startup, the more likely of you becoming an entrepreneur. Business and beyond is a series of interactive sessions that help you know of the essential topics you need to get started with your entrepreneurial journey." />
            <Event img="./assets/Logos/udaan.png" fit="fit" name="Udaan" desc="Udaan is a business ecosystem simulation where partakers get to learn about the intricacies behind businesses, which are beyond obvious. Students get to devise business plans which are financially sustainable while being efficient with processes involving legalities, compliance and managing CXOs to facilitate company's scalability." />
            <Event img="./assets/Logos/scribble.png" fit="fit" name="E-Cell Scribbles" desc="The driving passion of an entrepreneur cannot be learnt, but you can definitely learn everything else there is to business and economic trends. E-Cell Scribbles is our very own Medium publication that provides thorough insights on various domains by our club members. Develop a firm grasp of the basics by discovering the many facets of being in the business line." />
            <Event img="./assets/Logos/alumni_talk.png" fit="fit" name="Alumni Talk" desc="There's no better teacher than experience and no better preacher than the experienced. Expand the horizons of your knowledge and learn the best ways to deal with obstacles from people who have already been in your shoes in the past." />
        </div>
    );
}

export default Events;
