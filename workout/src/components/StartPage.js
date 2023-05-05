import React from "react";
import "../css/styles.css";

function CreativeTheme() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                {/* <div class="container px-4 px-lg-5"> */}
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="navbar-brand" href="#page-top">Tech Quiz</a> */}
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link" href="/signUp">SignUp</a></li>
                        <li class="nav-item"><a class="nav-link" href="/signIn">SignIn</a></li>
                        <li class="nav-item"><a class="nav-link" href="/about">About</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    </ul>
                </div>
                {/* </div> */}
            </nav>
            <header class="masthead">
                <div class="container px-4 px-lg-5 h-100">
                    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div class="col-lg-8 align-self-end">
                            <h1 class="text-white font-weight-bold">Track Your activity</h1>
                            <hr class="divider" />
                        </div>
                        <div class="col-lg-8 align-self-baseline">
                            <p class="text-white-75 mb-5">Welcome to our Workout Tracker App, the ultimate solution to help you stay on top of your fitness goals. </p>
                            <a style={{display:'inline-block', backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', textAlign: 'center', textDecoration: 'none', borderRadius: '5px', fontSize: '16px', marginRight: '10px'}} href="/signUp">Sign Up</a> &nbsp;&nbsp;
      <a style={{display:'inline-block', backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', textAlign: 'center', textDecoration: 'none', borderRadius: '5px', fontSize: '16px'}} href="/signIn">Sign In</a>
                        </div>
                    </div>
                </div>
            </header>
            {/* <section class="page-section bg-primary" id="about">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h2 class="text-white mt-0">We've got what you need!</h2>
                            <hr class="divider divider-light" />
                            <p class="text-white-75 mb-4">Welcome to our quiz platform - the ultimate destination for all your tech-related quiz needs. We offer a comprehensive solution that allows quiz organizers to create and manage quizzes with ease, and quiz takers to participate in quizzes and track their progress.

Quiz organizers can create a quiz with a deadline and set a time limit for each question. Our platform allows for the creation of quizzes with multiple-choice questions (MCQs) and requires the quiz name, questions with MCQs, and correct answers for each question. Quiz organizers can also create tags for quizzes dynamically, such as node.js, JS, and more.

Quiz takers can register for a quiz and participate in it at their convenience. They will have access to a timer during the quiz and will need to answer all questions before the time runs out. At the end of the quiz, a leaderboard will display the highest-scoring participants.

Our platform also offers a feature for quiz takers to see their past quizzes and track their progress. Quiz organizers can view the quizzes they have organized and monitor their performance.

In the dashboard, all ongoing quizzes will be displayed, allowing quiz takers to easily navigate to the quizzes they want to participate in.

Join our quiz platform today and experience a seamless and enjoyable quiz-taking experience.</p>
                            <a class="btn btn-light btn-xl" href="/">Get Started!</a>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section class="page-section" id="contact">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6 text-center">
                            <h2 class="mt-0">Let's Get In Touch!</h2>
                            <hr class="divider" />
                            <p class="mt-0">Ready to start your next project with us? Send us a message and we will get back to you as soon as possible!</p>
                        </div>
                    </div>
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-lg-4 text-center mb-5 mb-lg-0">
                            <i class="bi-phone fs-2 mb-3 text-muted"></i>
                            <div class="mb-3">Call Us:</div>
                            <div class="text-muted">+1 (555) 123-4567</div>
                        </div>
                        <div class="col-lg-4 text-center mb-5 mb-lg-0">
                            <i class="bi-envelope fs-2 mb-3 text-muted"></i>
                            <div class="mb-3">Email Us:</div>
                            <div class="text-muted"><a href="mailto:vinayak.palve02@gmail.com">vinayak.palve02@gmail.com</a></div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>
            <script src="js/scripts.js"></script>
            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script> */}
        </div>
    )
};

export default CreativeTheme;