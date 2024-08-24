import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1 .png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from 'react-on-screen';  // Import TrackVisibility if not already

const Projects = () => {
    const projects = [
        {
            title: "Photographer Booking Website",
            description: "Book a photographer as of your need",
            imgUrl: projImg1,
        },
        {
            title: "Restaurant Website ",
            description: "Book or Order your Favourite Dishes",
            imgUrl: projImg2,
        },
        {
            title: "Hospital Management System",
            description: "Designed to manage the resources of the hospital",
            imgUrl: projImg3,
        },
    ];

    return (
        <>
            <section className='project' id='projects'>
                <Container>
                    <Row>
                        <Col>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <h2>Projects</h2>
                                        <p></p>
                                    </div>}
                            </TrackVisibility>
                            <Tab.Container id="project-tabs" defaultActiveKey="first">
                                
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                    <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img className='background-image-right' src={colorSharp2} alt="Background" />
            </section>
        </>
    );
}

export default Projects;
