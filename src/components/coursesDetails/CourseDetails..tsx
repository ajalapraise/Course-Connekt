import { LayoutProps } from "../courseLayout/Layout";

import js1 from "../../assets/Imgs/js/js2.jpg";
import jira1 from '../../assets/Imgs/jira/jira2.jpg'
import ui1 from '../../assets/Imgs/uiux/ui2.png'
import ai1 from '../../assets/Imgs/ai/ai2.jpg'
import dm1 from '../../assets/Imgs/dm/dm2.png'
import ds1 from '../../assets/Imgs/ds/ds2.jpg'
import rct1 from '../../assets/Imgs/react/rct2.png'
import ml1 from '../../assets/Imgs/ml/ml2.jpeg'

export const courseList: LayoutProps[] = [
    {
        id: 1,
        img: js1,
        courseName: 'Basics of Javascript',
        courseInst: 'John Smith',
        courseDetails: (
            <div className="detail-cont">
                <h2>Course Overview</h2>

                <p className="intro">
                    Welcome to the 'Basics of JavaScript' course! JavaScript is a fundamental programming language used for building interactive websites and web applications. In this course, we will cover the essentials of JavaScript and its practical applications.
                </p>

                <div className="sections">
                    <div className="section">
                        <h3>Introduction to JavaScript</h3>
                        <ul>
                            <li>What is JavaScript?</li>
                            <li>History and evolution of JavaScript</li>
                            <li>Setting up the development environment</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Variables and Data Types</h3>
                        <ul>
                            <li>Variables and constants</li>
                            <li>Data types: strings, numbers, booleans, etc.</li>
                            <li>Working with arrays and objects</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Control Flow and Loops</h3>
                        <ul>
                            <li>If-else statements</li>
                            <li>Switch statements</li>
                            <li>For loops</li>
                            <li>While loops</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Functions</h3>
                        <ul>
                            <li>Declaring and calling functions</li>
                            <li>Parameters and return values</li>
                            <li>Anonymous functions and arrow functions</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Working with the DOM</h3>
                        <ul>
                            <li>Introduction to the Document Object Model (DOM)</li>
                            <li>Selecting and manipulating elements</li>
                            <li>Handling events</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Introduction to ES6+</h3>
                        <ul>
                            <li>Let, const, and block scoping</li>
                            <li>Arrow functions and template literals</li>
                            <li>ES6 modules</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Asynchronous JavaScript</h3>
                        <ul>
                            <li>Introduction to callbacks</li>
                            <li>Promises and async/await</li>
                            <li>Fetching data from APIs</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Introduction to Web Development</h3>
                        <ul>
                            <li>Working with HTML and CSS</li>
                            <li>Creating interactive web pages</li>
                        </ul>
                    </div>
                </div>
                <p className="conclusion">
                    By the end of this course, you will have a solid understanding of JavaScript's core concepts and be ready to build your own web applications, add interactivity to websites, and even explore more advanced frameworks and libraries.

                    Get ready for an exciting journey into the world of JavaScript! Let's dive in and start exploring the fascinating possibilities it offers. Happy coding! 🚀
                </p>
            </div>
        ),
        students: '500',
        description: 'Ever wanted to make websites interactive, code fun mobile apps, or create simple games? JavaScript lets you do all of that!. By the end of this course you’ll know the basics of using JavaScript to make an interactive website.',
    },

    {
        id: 2,
        img: jira1,
        courseName: 'Mastering Jira: Agile Project Management and Issue Tracking',
        courseInst: 'David Lee',
        courseDetails: (
            <div className="detail-cont">
                <h2>Course Overview</h2>

                <p className="intro">
                    Welcome to the 'Mastering Jira: Agile Project Management and Issue Tracking' course!<br></br>

                    In this comprehensive course, you will dive into the world of Jira, a powerful tool used by teams to plan, track, and manage their projects with agility and efficiency.
                </p>
                <div className="sections">

                    <div className="section">
                        <h3>Introduction to Jira</h3>
                        <ul>
                            <li>Understanding Jira and its key features</li>
                            <li>Installing and setting up Jira for your project</li>
                            <li>Navigating the Jira user interface</li>
                            <li>Creating and managing Jira projects</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Working with Agile Methodology</h3>
                        <ul>
                            <li>Introduction to Agile project management</li>
                            <li>Agile frameworks: Scrum and Kanban</li>
                            <li>Implementing Agile practices in Jira</li>
                            <li>Creating Agile boards and backlogs</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Managing Issues in Jira</h3>
                        <ul>
                            <li>Creating different types of issues</li>
                            <li>Assigning, prioritizing, and transitioning issues</li>
                            <li>Linking and tracking dependencies between issues</li>
                            <li>Using Jira workflows for issue management</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Advanced Issue Searching and Reporting</h3>
                        <ul>
                            <li>Building custom JQL (Jira Query Language) queries</li>
                            <li>Creating and saving custom filters</li>
                            <li>Generating reports and dashboards in Jira</li>
                            <li>Using Jira gadgets for data visualization</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Integrating Development Tools</h3>
                        <ul>
                            <li>Connecting Jira with version control systems (e.g., Git)</li>
                            <li>Using Jira with Continuous Integration/Continuous Deployment (CI/CD) pipelines</li>
                            <li>Automation with Jira using plugins and APIs</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Managing Project Permissions and Security</h3>
                        <ul>
                            <li>Configuring user roles and permissions</li>
                            <li>Securing sensitive data in Jira</li>
                            <li>Implementing best practices for project security</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Scaling Jira for Enterprise Projects</h3>
                        <ul>
                            <li>Understanding Jira Data Center and its benefits</li>
                            <li>Load balancing and clustering for high availability</li>
                            <li>Performance tuning and optimization strategies</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Best Practices for Effective Jira Usage</h3>
                        <ul>
                            <li>Optimizing team collaboration with Jira</li>
                            <li>Managing large-scale projects efficiently</li>
                            <li>Handling common challenges and troubleshooting</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Wrap-up and Final Project</h3>
                        <ul>
                            <li>Reviewing key concepts and takeaways</li>
                            <li>Working on a practical project using Jira</li>
                            <li>Presenting and sharing project outcomes</li>
                        </ul>
                    </div>
                </div>
                <p className="conclusion">
                    By the end of this course, you will have the skills and knowledge to confidently use Jira as a central tool for your team's project management and issue tracking needs. Get ready to take your project management to the next level with 'Mastering Jira'!
                </p>
            </div>
        ),
        students: '100',
        description: "'Mastering Jira: Agile Project Management and Issue Tracking' - Learn to efficiently manage projects and track issues using Jira's powerful Agile tools, enhancing collaboration and productivity in your team.",
    },

    {
        id: 3,
        img: ui1,
        courseName: 'Introduction to UI/UX Design: From Beginner to Proficient',
        courseInst: 'Karen Brown',
        courseDetails: (
            <div className="detail-cont">
                <h2>Course Overview</h2>

                <p className="intro">
                    Welcome to the 'Introduction to UI/UX Design: From Beginner to Proficient' course! If you've ever wondered how user-friendly and visually appealing digital products are created, this course is the perfect starting point for you.

                    In this course, we will dive deep into the world of User Interface (UI) and User Experience (UX) design, where you'll learn the fundamental principles and techniques that professional designers use to craft exceptional digital experiences.
                </p>


                <div className="sections">
                    <div className="section">
                        <h3>Module 1: Understanding User Interface (UI) Design</h3>
                        <ul>
                            <li>Introduction to UI Design</li>
                            <li>Principles of Visual Design</li>
                            <li>Color Theory and Typography</li>
                            <li>Layout and Composition</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 2: Introduction to User Experience (UX) Design</h3>
                        <ul>
                            <li>Understanding User Experience</li>
                            <li>User Research and Personas</li>
                            <li>Information Architecture</li>
                            <li>Wireframing and Prototyping</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 3: UI/UX Design Tools</h3>
                        <ul>
                            <li>Introduction to Design Software (e.g., Adobe XD, Sketch)</li>
                            <li>Working with Design Assets</li>
                            <li>Creating Interactive Prototypes</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 4: Designing for Different Platforms</h3>
                        <ul>
                            <li>Responsive Design for Web and Mobile</li>
                            <li>Designing for Desktop Applications</li>
                            <li>Mobile App Design Guidelines</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 5: Usability Testing and Feedback</h3>
                        <ul>
                            <li>Conducting Usability Tests</li>
                            <li>Collecting and Analyzing User Feedback</li>
                            <li>Iterative Design Process</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 6: Building a UI/UX Portfolio</h3>
                        <ul>
                            <li>Creating a Compelling Portfolio</li>
                            <li>Showcasing Projects and Case Studies</li>
                            <li>Preparing for Job Interviews</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 7: Advanced UI/UX Concepts</h3>
                        <ul>
                            <li>Motion and Interaction Design</li>
                            <li>Designing for Accessibility</li>
                            <li>Design Systems and Style Guides</li>
                        </ul>
                    </div>
                </div>
                <p className="conclusion">
                    By the end of this course, you'll have a comprehensive understanding of UI/UX design principles and the practical skills to create user-friendly and aesthetically pleasing digital products. Whether you're a beginner aspiring to enter the world of design or a seasoned professional looking to enhance your skills, this course will set you on the path to becoming proficient in UI/UX design.
                </p>
            </div>
        ),
        students: '250',
        description: 'Become a skilled UI/UX designer from beginner to proficient level with our comprehensive course. Learn design principles, wireframing, prototyping, and user testing to create captivating user experiences.',
    },

    {
        id: 4,
        img: ai1,
        courseName: 'Introduction to Artificial Intelligence',
        courseInst: 'Andrew Clark',
        courseDetails: (
            <div className="detail-cont">
                <h2>Course Overview</h2>

                <p className="intro">
                    Welcome to the 'Introduction to Artificial Intelligence' course! In this course, we will explore the fascinating field of AI and its real-world applications.
                </p>
                <div className="sections">
                    <div className="section">
                        <h3>Module 1: What is Artificial Intelligence?</h3>
                        <ul>
                            <li>Defining AI and its importance in today's world</li>
                            <li>Historical developments and key milestones in AI</li>
                            <li>Types of AI: Narrow AI vs. General AI</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 2: Machine Learning Fundamentals</h3>
                        <ul>
                            <li>Understanding the basics of machine learning</li>
                            <li>Supervised, unsupervised, and reinforcement learning</li>
                            <li>Training data and model evaluation</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 3: Natural Language Processing (NLP)</h3>
                        <ul>
                            <li>Processing and understanding human language</li>
                            <li>Text processing techniques</li>
                            <li>Building NLP applications</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 4: Computer Vision and Image Recognition</h3>
                        <ul>
                            <li>Using AI to interpret visual data</li>
                            <li>Image recognition algorithms</li>
                            <li>Applications of computer vision</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 5: Robotics and AI</h3>
                        <ul>
                            <li>Integrating AI with robotics</li>
                            <li>AI-driven autonomous systems</li>
                            <li>Challenges and future prospects</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 6: Ethical Considerations in AI</h3>
                        <ul>
                            <li>Addressing ethical challenges in AI development</li>
                            <li>Fairness, transparency, and accountability</li>
                            <li>AI's impact on society and the workforce</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 7: AI in Industry and Research</h3>
                        <ul>
                            <li>Real-world AI applications in various industries</li>
                            <li>Cutting-edge AI research and breakthroughs</li>
                            <li>AI's potential for driving innovation</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 8: Building Simple AI Projects</h3>
                        <ul>
                            <li>Practical hands-on projects using popular AI libraries</li>
                            <li>Implementing machine learning algorithms</li>
                            <li>Creating AI-driven applications</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 9: Future of AI and Beyond</h3>
                        <ul>
                            <li>Trends and emerging technologies in AI</li>
                            <li>The future of AI research and development</li>
                            <li>AI's role in shaping the world</li>
                        </ul>
                    </div>
                </div>

                <p className="conclusion">
                    By the end of this course, you will have a solid understanding of artificial intelligence, its underlying principles, and how it is revolutionizing industries worldwide. You will also have the skills to create basic AI applications and be aware of the ethical considerations that come with this transformative technology.
                </p>
            </div>
        ),
        students: '60',
        description: "'Introduction to Artificial Intelligence' is an engaging course that delves into the captivating realm of AI and its practical implementations. Discover the fundamentals and real-world applications of AI, paving the way for innovation and problem-solving in diverse industries.",
    },

    {
        id: 5,
        img: dm1,
        courseName: 'Digital Marketing Strategies',
        courseInst: 'Laura Martinez',
        courseDetails: (
            <div className="detail-cont">
                <h2>Course Overview</h2>
                <p className="intro">
                    This course provides a comprehensive introduction to digital marketing strategies
                    and explores various techniques to create successful online campaigns.
                </p>

                <div className="sections">
                    <div className="section">
                        <h3>Module 1: Understanding Digital Marketing</h3>
                        <ul>
                            <li>Introduction to digital marketing</li>
                            <li>The importance of digital channels</li>
                            <li>Comparison with traditional marketing</li>
                            <li>Key digital marketing concepts</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 2: Building a Digital Marketing Plan</h3>
                        <ul>
                            <li>Defining marketing goals and objectives</li>
                            <li>Identifying target audience and buyer personas</li>
                            <li>Conducting market research and competitor analysis</li>
                            <li>Choosing the right digital marketing channels</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 3: Content Marketing and SEO</h3>
                        <ul>
                            <li>Creating engaging and valuable content</li>
                            <li>Understanding search engine optimization (SEO)</li>
                            <li>Optimizing content for search engines</li>
                            <li>Link building and backlink strategies</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 4: Social Media Marketing</h3>
                        <ul>
                            <li>Creating a social media strategy</li>
                            <li>Using different social media platforms effectively</li>
                            <li>Engaging with the audience and building a community</li>
                            <li>Measuring social media ROI</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 5: Email Marketing and Lead Generation</h3>
                        <ul>
                            <li>Building an email list and lead nurturing</li>
                            <li>Designing effective email campaigns</li>
                            <li>A/B testing and optimizing email performance</li>
                            <li>Understanding email deliverability and spam filters</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 6: Pay-Per-Click (PPC) Advertising</h3>
                        <ul>
                            <li>Introduction to PPC advertising</li>
                            <li>Creating Google Ads and Facebook Ads campaigns</li>
                            <li>Keyword research and targeting</li>
                            <li>Monitoring and optimizing PPC campaigns</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 7: Analytics and Performance Tracking</h3>
                        <ul>
                            <li>Using Google Analytics to measure website performance</li>
                            <li>Interpreting key digital marketing metrics</li>
                            <li>Conversion tracking and goal setting</li>
                            <li>Generating insightful marketing reports</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 8: Mobile Marketing</h3>
                        <ul>
                            <li>Understanding mobile user behavior</li>
                            <li>Creating mobile-friendly content and ads</li>
                            <li>Mobile app marketing strategies</li>
                            <li>Mobile analytics and optimization</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 9: Creating a Digital Marketing Campaign</h3>
                        <ul>
                            <li>Bringing all elements together into a cohesive campaign</li>
                            <li>Setting campaign objectives and KPIs</li>
                            <li>Executing the campaign and monitoring progress</li>
                            <li>Evaluating the campaign's success and lessons learned</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 10: Future Trends in Digital Marketing</h3>
                        <ul>
                            <li>Exploring emerging trends and technologies</li>
                            <li>Preparing for the future of digital marketing</li>
                            <li>Staying ahead of the competition</li>
                            <li>Continuous learning and growth in the digital marketing field</li>
                        </ul>
                    </div>
                </div>


                <p className="conclusion">
                    By the end of this course, you will have a solid understanding of digital marketing strategies and the practical skills to create successful online campaigns. Whether you're a beginner aspiring to enter the world of digital marketing or a seasoned professional looking to enhance your skills, this course will set you on the path to becoming proficient in digital marketing.
                </p>
            </div>
        ),
        students: '150',
        description: "'Digital Marketing Strategies' is a concise course that explores effective online marketing techniques, covering social media, SEO, content marketing, and more. Master the art of reaching and engaging audiences to drive business success.",
    },

    {
        id: 6,
        img: ds1,
        courseName: 'Python for Data Science',
        courseInst: 'Jane Doe',
        courseDetails: (
            <div className="detail-cont">
                <h2>Course Overview</h2>

                <p className="intro">
                    Welcome to the 'Python for Data Science' course! In this course, we will dive into the powerful world of data science using Python and explore its wide range of applications in real-world scenarios
                </p>

                <div className="sections">
                    <div className="section">
                        <h3>Module 1: Python Basics</h3>
                        <ul>
                            <li>Variables, Data Types, and Operators</li>
                            <li>Conditional Statements and Loops</li>
                            <li>Functions and Modules</li>
                            <li>File Handling in Python</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 2: NumPy and Pandas</h3>
                        <ul>
                            <li>Introduction to NumPy for Numerical Computing</li>
                            <li>Array Operations and Broadcasting</li>
                            <li>Introduction to Pandas for Data Manipulation</li>
                            <li>Data Indexing and Selection</li>
                            <li>Data Cleaning and Preprocessing</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 3: Data Visualization with Matplotlib and Seaborn</h3>
                        <ul>
                            <li>Creating Basic Plots with Matplotlib</li>
                            <li>Customizing Plots and Adding Annotations</li>
                            <li>Introduction to Seaborn for Statistical Data Visualization</li>
                            <li>Creating Various Types of Plots with Seaborn</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 4: Data Analysis with Scikit-learn</h3>
                        <ul>
                            <li>Introduction to Scikit-learn for Machine Learning</li>
                            <li>Supervised and Unsupervised Learning Algorithms</li>
                            <li>Model Training, Evaluation, and Selection</li>
                            <li>Handling Imbalanced Datasets</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Module 5: Data Science Projects</h3>
                        <ul>
                            <li>Exploratory Data Analysis (EDA)</li>
                            <li>Building Predictive Models</li>
                            <li>Clustering and Dimensionality Reduction</li>
                            <li>Handling Real-world Data for Insights</li>
                        </ul>
                    </div>
                </div>

                <p className="conclusion">
                    Throughout the course, you will work on hands-on projects and assignments that will help you solidify your understanding of Python for data science. By the end of this course, you will be equipped with the essential skills and knowledge to embark on your journey as a data scientist using Python. Get ready to unlock the potential of data and make data-driven decisions with confidence!
                </p>
            </div>
        ),
        students: '100',
        description: "'Python for Data Science' is an introductory course focusing on leveraging Python's power for data analysis and visualization, enabling learners to gain valuable insights from datasets effectively.",
    },

    {
        id: 7,
        img: rct1,
        courseName: 'React - The Complete Guide 2023 (incl. React Router & Redux)',
        courseInst: 'Emily Adams',
        courseDetails: (
            <div className="detail-cont">
                <h2>Course Overview</h2>

                <p className="intro">
                    Welcome to the 'React - The Complete Guide 2023 (incl. React Router & Redux)' course! In this comprehensive course, we will dive into the exciting world of React and cover advanced topics like React Router and Redux.
                </p>

                <div className="sections">
                    <div className="section">
                        <h3>Introduction to React</h3>
                        <ul>
                            <li>What is React?</li>
                            <li>Why use React?</li>
                            <li>Setting up the development environment</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Getting Started with React</h3>
                        <ul>
                            <li>Creating a new React project</li>
                            <li>Understanding the basic React components</li>
                            <li>Handling state and props</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>React Components & Lifecycle</h3>
                        <ul>
                            <li>Class Components</li>
                            <li>Functional Components</li>
                            <li>Component Lifecycle methods</li>
                            <li>React Hooks</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Styling in React</h3>
                        <ul>
                            <li>CSS Modules</li>
                            <li>Styled Components</li>
                            <li>Using CSS frameworks with React</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>React Router</h3>
                        <ul>
                            <li>Setting up routing in a React application</li>
                            <li>Configuring nested routes</li>
                            <li>Passing route parameters</li>
                            <li>Handling redirects and guards</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>State Management with Redux</h3>
                        <ul>
                            <li>Introduction to Redux</li>
                            <li>Redux store, actions, and reducers</li>
                            <li>Combining React and Redux</li>
                            <li>Asynchronous actions with Redux Thunk</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Advanced React Concepts</h3>
                        <ul>
                            <li>Higher-Order Components (HOCs)</li>
                            <li>Render Props</li>
                            <li>Context API</li>
                            <li>Error Boundaries</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Building Real-World Projects</h3>
                        <ul>
                            <li>Building a Todo App</li>
                            <li>Creating a Blogging Platform</li>
                            <li>Building an E-commerce Store</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Performance Optimization</h3>
                        <ul>
                            <li>React.memo and PureComponent</li>
                            <li>Code Splitting</li>
                            <li>Lazy Loading</li>
                            <li>React Profiler</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Testing React Applications</h3>
                        <ul>
                            <li>Unit testing with Jest and React Testing Library</li>
                            <li>Snapshot testing</li>
                            <li>Integration testing</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Deploying React Apps</h3>
                        <ul>
                            <li>Optimizing for production</li>
                            <li>Deploying to hosting platforms</li>
                            <li>Continuous integration and deployment</li>
                        </ul>
                    </div>
                </div>

                <p className="conclusion">
                    By the end of this course, you will have a solid understanding of React and its associated libraries, React Router, and Redux. You'll be equipped with the skills to build powerful and scalable React applications and explore the latest trends and best practices in the React ecosystem.
                </p>
            </div>
        ),
        students: '500',
        description: "Master React and its essential tools in 'The Complete Guide 2023.' Learn React Router for seamless navigation and Redux for state management. Your one-stop course for advanced web development with React.",
    },

    {
        id: 8,
        img: ml1,
        courseName: 'Introduction to Machine Learning',
        courseInst: 'Michael Johnson',
        courseDetails: (
            <div className="detail-cont">
                <h2>Course Overview</h2>

                <p className="intro">
                    Welcome to the 'Introduction to Machine Learning' course! This exciting course will take you on a journey through the world of machine learning and its real-world applications.
                </p>

                <div className="sections">
                    <div className="section">
                        <h3>Foundations of Machine Learning</h3>
                        <ul>
                            <li>Data Preprocessing and Exploration</li>
                            <li>Feature Engineering</li>
                            <li>Model Evaluation Metrics</li>
                            <li>Cross-Validation</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Supervised Learning</h3>
                        <ul>
                            <li>Linear Regression</li>
                            <li>Logistic Regression</li>
                            <li>Decision Trees and Random Forests</li>
                            <li>Support Vector Machines (SVM)</li>
                            <li>Naive Bayes Classifier</li>
                            <li>K-Nearest Neighbors (KNN)</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Unsupervised Learning</h3>
                        <ul>
                            <li>K-Means Clustering</li>
                            <li>Hierarchical Clustering</li>
                            <li>Dimensionality Reduction: Principal Component Analysis (PCA)</li>
                            <li>Dimensionality Reduction: t-Distributed Stochastic Neighbor Embedding (t-SNE)</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Introduction to Neural Networks</h3>
                        <ul>
                            <li>Neurons and Activation Functions</li>
                            <li>Feedforward Neural Networks</li>
                            <li>Backpropagation</li>
                            <li>Gradient Descent</li>
                            <li>Training Neural Networks</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Deep Learning and Convolutional Neural Networks (CNN)</h3>
                        <ul>
                            <li>Introduction to Deep Learning</li>
                            <li>Convolutional Neural Networks (CNN)</li>
                            <li>Image Classification</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Recurrent Neural Networks (RNN) and Natural Language Processing (NLP)</h3>
                        <ul>
                            <li>Recurrent Neural Networks (RNN)</li>
                            <li>Natural Language Processing (NLP) Basics</li>
                            <li>Text Classification</li>
                            <li>Sequence-to-Sequence Models</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>Model Deployment and Future of Machine Learning</h3>
                        <ul>
                            <li>Model Deployment in Production</li>
                            <li>Machine Learning Ethics</li>
                            <li>Recent Advances and Future Trends</li>
                        </ul>
                    </div>
                </div>

                <p className="conclusion">
                    By the end of this course, you will have a solid understanding of machine learning and its applications in various industries. You will also have the skills to build and deploy machine learning models and be aware of the ethical considerations that come with this transformative technology.
                </p>
            </div>
        ),
        students: '20',
        description: "Discover the foundations of Machine Learning and its real- world applications in this introductory course.Explore algorithms and unlock the potential of data - driven decision - making.",
    },

];