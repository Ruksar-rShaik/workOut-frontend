//import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './about.css';

function About() {
    
   

    return (
        <div className="about-page">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h1 className="text-white font-weight-bold m-4">About Us</h1> <br/>
                        <p className="text-white font-weight-bold m-2">
                        Our Workout Tracker App is designed to help you achieve your fitness goals. 
                        With an intuitive platform that makes it easy to track your workouts and calories burned, 
                        you can stay motivated and on track. Our app offers a comprehensive list of workouts, including Gym, Walking, Swimming, Zumba, and more, each associated with their per-minute calorie burn. This allows you to choose the right exercise routine to meet your daily targets and stay on top of your progress.
                        </p><br/>
                        <p className="text-white font-weight-bold m-2">
                        In addition to tracking your workouts, our app offers a range of features to help you stay engaged and motivated. You can track your workout sessions, review your progress, and even compete with others on the leaderboard. By setting daily targets, you'll receive workout suggestions based on your desired calorie burn, making it easier to achieve your goals. Whether you're hitting the gym or going for a walk, 
                        our app has got you covered. Join us today and start tracking your way to a healthier lifestyle!
                            
                        </p><br/>
                        <a class="btn btn-primary btn-xl" href="/start">Home</a>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;