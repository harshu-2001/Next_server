
type Projects = {
    _id: Number,
    Projects: String,
    Project_links: String,
    Project_description:String
}

let project : Projects[] = [
  { _id: 4,
    Projects: "Pixel Prfect",
    Project_links: "na",
    Project_description: "All-in-one photo editor and gallery app.: Enhance your images, apply filters, organize your gallery, and unleash your creativity."
  },
  {
    _id: 5,
    Projects: "Chat Application",
    Project_links: "https://wagtail-15396.web.app/login",
    Project_description: "React.js frontend with Firebase backend.: Engage in real-time conversations, send messages, and connect with others through this seamless and interactive web application."
  },
  {
    _id: 3,
    Projects: "Flapster",
    Project_links: "na",
    Project_description: "Kotlin-built game app, reminiscent of Flappy Bird.: Test your skills, navigate obstacles, and compete for high scores."
  },
  {
    _id: 9,
    Projects: "E-Commerce App using Neural Networks",
    Project_links: "na",
    Project_description: "Flutter-based app utilizing Neural Networks.: Browse and search products effortlessly by using the camera or search bar, making online shopping a visual and convenient experience."
  },
  {
    _id: 1,
    Projects: "Script Writer",
    Project_links: "na",
    Project_description: "AI-powered YouTube script writer. : Generates engaging, customized scripts tailored to your style, saving you time and enhancing your content."
  },
  {
    _id: 11,
    Projects: "IPl score Predict App",
    Project_links: "na",
    Project_description: "Java-based application that predicts cricket scores in the IPL. :Utilizing advanced algorithms, it provides accurate forecasts, keeping fans updated and entertained throughout the matches."
  },
  {
    _id: 6,
    Projects: "Skin Cancer Detection using App",
    Project_links: "na",
    Project_description: "Flutter-based app utilizing image analysis to detect 6 types of skin cancer.: Empowering users to identify potential risks and seek timely medical attention for better skin health."
  },
  {
    _id: 7,
    Projects: "Fish Species detection using Android App",
    Project_links: "na",
    Project_description: "Flutter-powered app that identifies 10 types of fish species using image recognition. :Explore the underwater world and enhance your knowledge of aquatic life with ease."
  },
  {
    _id: 2,
    Projects: "PortFolio",
    Project_links: "na",
    Project_description: "Flutter-based app with MongoDB integration.: Create a dynamic and personalized portfolio, showcasing my skills and achievements.: Stand out and leave a lasting impression."
  },
  {
    _id: 8,
    Projects: "Crop pest detection using YOLOv5 Android APP ",
    Project_links: "na",
    Project_description: "Flutter app utilizing YOLOv5 model for live detection of 20 types of pests.: Get instant identification and effective remedies to safeguard your crops and maximize yield."
  },
  {
    _id: 10,
    Projects: "News App(Rocket News)",
    Project_links: "na",
    Project_description: " Flutter-based app utilizing REST API to fetch the latest news. Stay informed with a user-friendly interface, personalized news categories, and timely updates, all in one convenient application."
  }];

  //handlers

  export const getProjects = () => project;

  export const addProjects = (_project:Projects) => {
    project.push(_project);
  }
  
  export const deleteProject = (_id:Number) => {
    project = project.filter((project) => project._id !== _id );
  }

  export const updateProject = ( _id: Number,
    title: String,
    link: String,
    desc:String) => {

    const Value = project.find((value) => value._id !== _id );
    if(Value){
        Value.Projects = title;
        Value.Project_description = desc;
        Value.Project_links = link;
    }else{
        throw new Error("NO PROJECT FOUND");
    }
  }

  export const getById = (_id:Number) => {
    return project.find((value) => value._id === _id);
  }