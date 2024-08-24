import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e5cfb66e-fe78-4be8-87b5-388e38655ece");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <section className='contact' id='connect'>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <img src={contactImg} alt='Contact Us' />
                        </Col>
                        <Col md={6}>
                            <h2>Get In Touch</h2>
                            <form onSubmit={onSubmit}>
                                <Row>
                                    <Col sm={6} className="px-1">
                                        <input type="text" name="name" placeholder="Your Name" required />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="email" name="email" placeholder="Your Email" required />
                                    </Col>
                                    
                                    <Col sm={12} className="px-1">
                                        <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
                                    </Col>
                                    <Col sm={12} className="px-1">
                                        <button type="submit">Submit</button>
                                    </Col>
                                    
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Contact;
