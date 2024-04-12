window.addEventListener("scroll", () => {
    let position = window.scrollY;
    // console.log(window.scrollY);

    if (position >= 120) {
        document.getElementById("nav").style.backgroundColor =
            "rgba(245, 245, 245, 0.9)";
        document.getElementById("nav").style.boxShadow = "0px 0px 5px #eee";
    } else {
        document.getElementById("nav").style.backgroundColor = "transparent";
        document.getElementById("nav").style.boxShadow = "none";
    }

    if (position < 650) {
        scrollToSection(0);
    } else if (position >= 650 && position < 1000) {
        scrollToSection(1);
    } else if (position >= 1000 && position <= 1644) {
        scrollToSection(2);
    } else if (position >= 1644 && position <= 2615) {
        scrollToSection(3);
    } else if (position >= 2615) {
        scrollToSection(4);
    }
});

const scrollToSection = (n) => {
    for (let i = 0; i < 5; i++) {
        if (i == n) {
            document.getElementsByClassName("nav-link")[i].className =
                "nav-link selected-nav-link-container";
            document.getElementsByClassName("nav-link-ele")[i].className =
                "selected-nav-link nav-link-ele";
            continue;
        }
        document.getElementsByClassName("nav-link-ele")[i].className =
            " nav-link-ele";
        document.getElementsByClassName("nav-link")[i].className = "nav-link";
    }
};

const clickScroll = (n) => {
    if (n == 0) {
        window.scrollTo(0, 0);
    } else if (n == 1) {
        window.scrollTo(0, 650);
    } else if (n == 2) {
        window.scrollTo(0, 1000);
    } else if (n == 3) {
        window.scrollTo(0, 1644);
    } else if (n == 4) {
        window.scrollTo(0, 2615);
    }
    scrollToSection(n);
};

const openModel = (n) => {
    document.getElementById("model").style.display = "flex";
    document.getElementById("model").style.opacity = "1";
    document.getElementById("model-child").style.opacity = "1";
    document.getElementById("model-child").style.scale = "1";
    if (n == 1) {
        document.getElementById("product-title").innerHTML =
            "Management System";
        document.getElementById("model-products").innerHTML = `

    <div class="product-model-child">
        <img
            src="./assets/images/visionariesai-14.jpeg"
            alt="img"
            class="model-img"
            id="product-img-2"
        />
        <div class="model-product-detailes">
            <h1
                class="title main-product-title"
                id="product-title-2"
            >
            Visionaries AI Software
            </h1>
            <p id="product-detailes-2">
            Enhance security and efficiency with user-based login, integrated payment gateways, and advanced face recognition attendance. Step into the future of secure, streamlined operations with our smart management solutions. User-based login adds a personal touch, while integrated payment gateways simplify finances. The cutting-edge face recognition attendance system ensures convenience and safety, empowering your organization in the digital age.
            </p>
        </div>
    </div>

    <div class="product-model-child">
        <img
            src="./assets/images/visionariesai-1.jpeg"
            alt="img"
            class="model-img"
            id="product-img-1"
        />
        <div class="model-product-detailes">
            <h1
                class="title main-product-title"
                id="product-title-1"
            >
            School/College Management Software
            </h1>
            <p id="product-detailes-1">
            Our smart management solutions streamline operations, optimize resources, and enhance efficiency. With us, you can effortlessly surpass your goals and adapt to changing business landscapes. Embrace technology for a competitive edge in the digital age, partnering with us to infuse excellence into every aspect of your operations.
            </p>
        </div>
    </div>
    <div class="product-model-child">
        <img
            src="./assets/images/visionariesai-2.jpeg"
            alt="img"
            class="model-img"
            id="product-img-2"
        />
        <div class="model-product-detailes">
            <h1
                class="title main-product-title"
                id="product-title-2"
            >
            Restaurant Management Software
            </h1>
            <p id="product-detailes-2">
            Restaurant Management Software is a comprehensive solution that automates various aspects of restaurant operations. From order processing and inventory management to table reservations and billing, this full-stack application enhances efficiency and customer service. It provides restaurateurs with real-time insights, streamlining workflows and improving overall dining experiences.
            </p>
        </div>
    </div>

    <div class="product-model-child">
        <img
            src="./assets/images/visionariesai-9.jpeg"
            alt="img"
            class="model-img"
            id="product-img-2"
        />
        <div class="model-product-detailes">
            <h1
                class="title main-product-title"
                id="product-title-2"
            >
            Patients Observations Software
            </h1>
            <p id="product-detailes-2">
            The Patient Observation System utilizes AI to monitor vital signs and detect abnormal activities in real-time. This full-stack application generates instant alerts for healthcare providers, facilitating timely interventions. Additionally, it automates report generation, streamlining medical documentation for improved patient care and overall healthcare management.
            </p>
        </div>
    </div>
   

    
    
    `;
    } else if (n == 2) {
        document.getElementById("product-title").innerHTML =
            "Hospital Management";

        document.getElementById("model-products").innerHTML = `

        <div class="product-model-child">
            <img
                src="./assets/images/visionariesai-4.png"
                alt="img"
                class="model-img"
                id="product-img-2"
            />
            <div class="model-product-detailes">
                <h1
                    class="title main-product-title"
                    id="product-title-2"
                >
                Patients Observation System
                </h1>
                <p id="product-detailes-2">
                The Patient Observation System utilizes AI to monitor vital signs and detect abnormal activities in real-time. This full-stack application generates instant alerts for healthcare providers, facilitating timely interventions. Additionally, it automates report generation, streamlining medical documentation for improved patient care and overall healthcare management.
                </p>
            </div>
        </div>
        
            <div class="product-model-child">
                <img
                    src="./assets/images/visionariesai-3.jpeg"
                    alt="img"
                    class="model-img"
                    id="product-img-1"
                />
                <div class="model-product-detailes">
                    <h1
                        class="title main-product-title"
                        id="product-title-1"
                    >
                    Tooth Vitality Testing System
                    </h1>
                    <p id="product-detailes-1">
                    The Tooth Vitality Testing project integrates a universal pulse oximeter probe into dental care, employing IoT technology. This Fullstack application monitors tooth vitality through real-time data collection, providing dentists with instant insights. The system enhances diagnostic precision, enabling timely intervention for improved oral health outcomes.
                    </p>
                </div>
            </div>

            <div class="product-model-child">
        <img
            src="./assets/images/visionariesai-10.jpeg"
            alt="img"
            class="model-img"
            id="product-img-2"
        />
        <div class="model-product-detailes">
            <h1
                class="title main-product-title"
                id="product-title-2"
            >
            Fire Detection System
            </h1>
            <p id="product-detailes-2">
            The Fire Detection System is an advanced safety solution employing sensors and AI algorithms. It continuously monitors for signs of fire, providing real-time alerts. This full-stack application enhances response times, aiding in rapid evacuation and minimizing property damage. It's a critical technology for proactive fire prevention and safety management.
            </p>
        </div>
    </div>
    <div class="product-model-child">
    <img
        src="./assets/images/visionariesai-13.png"
        alt="img"
        class="model-img"
        id="product-img-2"
    />
    <div class="model-product-detailes">
        <h1
            class="title main-product-title"
            id="product-title-2"
        >
        Anonymous Detection Software
        </h1>
        <p id="product-detailes-2">
        The Anonymous Detection Software employs advanced algorithms to analyze user behavior and identify potential threats or suspicious activities while maintaining user privacy. This full-stack application enhances security by providing real-time alerts and comprehensive reports for proactive intervention, ensuring a secure and trustworthy digital environment.
        </p>
    </div>
</div>
           
        
            
            
            `;
    } else if (n == 3) {
        document.getElementById("product-title").innerHTML =
            "AI Management System";

        document.getElementById("model-products").innerHTML = `
    <div class="product-model-child">
        <img
            src="./assets/images/visionariesai-8.jpeg"
            alt="img"
            class="model-img"
            id="product-img-1"
        />
        <div class="model-product-detailes">
            <h1
                class="title main-product-title"
                id="product-title-1"
            >
            Student Activity Monitor System
            </h1>
            <p id="product-detailes-1">
            The Student Activities Recognition system employs AI to analyze student behavior, generating comprehensive reports. Utilizing machine learning, it identifies abnormal activities and promptly alerts relevant authorities. This full-stack application enhances campus security, ensuring a proactive response to potential issues while maintaining a focus on student well-being and safety.
            </p>
        </div>
    </div>
    <div class="product-model-child">
        <img
            src="./assets/images/visionariesai-9.jpeg"
            alt="img"
            class="model-img"
            id="product-img-2"
        />
        <div class="model-product-detailes">
            <h1
                class="title main-product-title"
                id="product-title-2"
            >
            Patients Observation System
            </h1>
            <p id="product-detailes-2">
            The Patient Observation System utilizes AI to monitor vital signs and detect abnormal activities in real-time. This full-stack application generates instant alerts for healthcare providers, facilitating timely interventions. Additionally, it automates report generation, streamlining medical documentation for improved patient care and overall healthcare management.
            </p>
        </div>
    </div>
    
    <div class="product-model-child">
        <img
            src="./assets/images/visionariesai-10.jpeg"
            alt="img"
            class="model-img"
            id="product-img-2"
        />
        <div class="model-product-detailes">
            <h1
                class="title main-product-title"
                id="product-title-2"
            >
            Fire Detection System
            </h1>
            <p id="product-detailes-2">
            The Fire Detection System is an advanced safety solution employing sensors and AI algorithms. It continuously monitors for signs of fire, providing real-time alerts. This full-stack application enhances response times, aiding in rapid evacuation and minimizing property damage. It's a critical technology for proactive fire prevention and safety management.
            </p>
        </div>
    </div>

    <div class="product-model-child">
        <img
            src="./assets/images/visionariesai-11.png"
            alt="img"
            class="model-img"
            id="product-img-2"
        />
        <div class="model-product-detailes">
            <h1
                class="title main-product-title"
                id="product-title-2"
            >
            Student Performance and Payments Forecasting System
            </h1>
            <p id="product-detailes-2">
            The Student Performance and Payments Forecasting System utilizes data analytics and machine learning to predict academic performance and financial outcomes. This full-stack application analyzes student data, trends, and payment histories, offering educational institutions insights for proactive decision-making, resource allocation, and financial planning, ultimately enhancing overall operational efficiency.
            </p>
        </div>
    </div>

    <div class="product-model-child">
        <img
            src="./assets/images/visionariesai-12.png"
            alt="img"
            class="model-img"
            id="product-img-2"
        />
        <div class="model-product-detailes">
            <h1
                class="title main-product-title"
                id="product-title-2"
            >
            Exams Cheating Detection Software
            </h1>
            <p id="product-detailes-2">
            The Exams Cheating Detection Software employs AI algorithms to monitor and detect suspicious behavior during exams. This full-stack application analyzes real-time data, including eye movements and keyboard activity, to identify potential cheating. It enhances academic integrity by providing educators with timely alerts and comprehensive cheating reports for investigation.
            </p>
        </div>
    </div>

    <div class="product-model-child">
        <img
            src="./assets/images/visionariesai-13.png"
            alt="img"
            class="model-img"
            id="product-img-2"
        />
        <div class="model-product-detailes">
            <h1
                class="title main-product-title"
                id="product-title-2"
            >
            Anonymous Detection Software
            </h1>
            <p id="product-detailes-2">
            The Anonymous Detection Software employs advanced algorithms to analyze user behavior and identify potential threats or suspicious activities while maintaining user privacy. This full-stack application enhances security by providing real-time alerts and comprehensive reports for proactive intervention, ensuring a secure and trustworthy digital environment.
            </p>
        </div>
    </div>
    
    `;
    } else if (n == 4) {
        document.getElementById("product-title").innerHTML =
            "Internet of Things";

        document.getElementById("model-products").innerHTML = `
    <div class="product-model-child">
        <img
            src="./assets/images/visionariesai-5.jpeg"
            alt="img"
            class="model-img"
            id="product-img-1"
        />
        <div class="model-product-detailes">
            <h1
                class="title main-product-title"
                id="product-title-1"
            >
            Face Recognition Attendance System
            </h1>
            <p id="product-detailes-1">
            The Face Recognition Attendance System employs cutting-edge facial recognition technology to streamline attendance tracking. This full-stack application eliminates the need for manual processes, enhancing efficiency. It ensures accurate and secure attendance records by uniquely identifying individuals, providing a seamless and reliable solution for various industries and organizations.
            </p>
        </div>
    </div>
    <div class="product-model-child">
        <img
            src="./assets/images/visionariesai-7.jpeg"
            alt="img"
            class="model-img"
            id="product-img-2"
        />
        <div class="model-product-detailes">
            <h1
                class="title main-product-title"
                id="product-title-2"
            >
            CCTV Surveillance Systems
            </h1>
            <p id="product-detailes-2">
            CCTV Surveillance Systems integrate advanced camera technology and software to monitor and analyze real-time video feeds. This comprehensive security solution enhances safety by detecting and alerting to unusual activities. Widely used in public spaces, businesses, and homes, it provides effective surveillance, deterrence, and incident documentation for improved security.
            </p>
        </div>
    </div>
    

    <div class="product-model-child">
                <img
                    src="./assets/images/visionariesai-3.jpeg"
                    alt="img"
                    class="model-img"
                    id="product-img-1"
                />
                <div class="model-product-detailes">
                    <h1
                        class="title main-product-title"
                        id="product-title-1"
                    >
                    Tooth Vitality Testing With a Developed Universal Pulse Oximeter Probe
                    </h1>
                    <p id="product-detailes-1">
                    The Tooth Vitality Testing project integrates a universal pulse oximeter probe into dental care, employing IoT technology. This Fullstack application monitors tooth vitality through real-time data collection, providing dentists with instant insights. The system enhances diagnostic precision, enabling timely intervention for improved oral health outcomes.
                    </p>
                </div>
            </div>
    
    `;
    }
};

const closeModel = () => {
    document.getElementById("model").style.display = "none";
    document.getElementById("model").style.opacity = "0";
    document.getElementById("model-child").style.opacity = "0";
};

const serviceID = "service_tvtk2xr";
const templateID = "template_joe8237";

const sendMail = (e) => {
    e.preventDefault();
    document.getElementById("form-btn").innerHTML = "Loading...";
    console.log("Sending");
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        alternateMobile: document.getElementById("alternate-mobile").value,
        organizationName: document.getElementById("organization-name").value,
        subject: document.getElementById("subject").value,
    };

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("alternate-mobile").value = "";
            document.getElementById("organization-name").value = "";
            document.getElementById("subject").value = "";
            console.log(res);
            document.getElementById("form-btn").innerHTML = "Submit";
            alert("Mail sent successfully!!!");
        })
        .catch((err) => {
            console.log(err);
            document.getElementById("form-btn").innerHTML = "Submit";
            alert("Something went wrong, please try again");
        });
};

const form = document.getElementById("form");
form.addEventListener("submit", sendMail);
