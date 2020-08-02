import React from "react";
import './Events.css';

function Event(props) {
    return (
        <div className="events">
            <div className="eimgdesc">
                <img className="eimg" src="./assets/images/discuss.jpg" alt={props.name} />
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
        <div className="d-flex">
            <Event name="Entrepreneurship Awareness Camp" desc="The camp is ideal for students willing to learn all about entrepreneurship and , in need for all round development in the field of business management, ideation thought process and the fundamentals of finance and economy in the present start-up world." />
            <Event name="Udaan" desc="Udaan is a simulation of the business ecosystem, where the speaker introduces the students to the intricacies of business that lie beyond ideation. The students shall be encouraged to propose their own business model based on the given theme and submit the Business Model Canvas that perfectly sum up their plans. " />
            <Event name="HackerTech" desc="HackerTech is a 36 hours Technical Hackathon that provides the participants an opportunity to solve real-life problems that surface up in the entrepreneurship scenario. With numerous start-ups flourishing in India, this event seeks to nurture the growing spirit of entrepreneurship within the young minds. " />
            <Event name="E-summit" desc="E-Summit is the annual business fest organised by E-Cell, VIT in association with VIT Technology Business Incubator which shall open the doors to the world of entrepreneurship. With the motto to spread awareness about entrepreneurship, E-Summit also promises to provide plenty of opportunities to the students to work on their skills and breathe life into the entrepreneur within them. " />
            <Event name="Business and Beyond" desc="These are weekly sessions that are targeted primarily at freshmen. Membership Drive opens opportunities for them to interact with the core-committee members and to understand the start-up friendly atmosphere, VIT provides. Such sessions will cover a surfeit of topics ranging from Marketing techniques to Blockchain and Social Entrepreneurship. " />
            <Event name="Start-up VIT" desc="Start-Up VIT is a business plan competition where participants face the limitations that budding entrepreneurs usually come across and are judged by testing their sense of business viability and technical feasibility through a product/design that they come up with which is based on various problem statements. " />
        </div>
    );
}

export default Events;