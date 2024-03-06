
type Projects_desc = {
    _id: Number,
    Projects: String,
    Date: String,
    Skills: String,
    Description: String,
    Key_Feature: String,
    Technology_used: String,
    Conclusion: String
}

let project_desc : Projects_desc[] = [

  {
    _id: 10,
    Projects: "News App(Rocket News)",
    Date: "(07/2021 -  07/2021)",
    Skills: "Flutter : Rest Api",
    Description: "The News App is a mobile application developed using the Flutter framework, designed to provide users with the latest news articles from various sources. The app utilizes a REST API to fetch news data and presents it in an intuitive and user-friendly interface.",
    Key_Feature: "User Authentication and Profile Management: The app allows users to create accounts, log in, and personalize their news preferences. User authentication ensures a personalized news experience and enables features like bookmarking and saved articles.\n\nNews Categories and Sources: The app offers a wide range of news categories, including politics, sports, technology, entertainment, and more. Users can select their preferred categories and customize their news feed accordingly. The app supports multiple news sources, providing users with diverse news content.\n\nNews Feed and Article Display: The app fetches news articles from the REST API and displays them in a scrollable news feed. Each article is presented with a headline, summary, publication date, and relevant images. Users can tap on an article to view the full content within the app.",
    Technology_used: "Flutter: An open-source UI framework for building cross-platform mobile applications, offering a fast and visually appealing user interface.\n\nREST API: Integration with a reliable and up-to-date REST API that provides news articles from various sources. The API should offer endpoints for fetching news by category, source, search queries, and other relevant parameters.",
    Conclusion: "Implementing push notifications to deliver breaking news or personalized news alerts to users.\nIncorporating a \"Trending\" or \"Popular\" section to showcase articles gaining significant attention or engagement.\nProviding options for users to customize their news feed further, such as filtering by location, language, or specific news sources.\nBy developing the News App using Flutter and integrating a REST API for news retrieval, users can stay informed and up-to-date with the latest news articles. The app's user-friendly interface, customization options, and offline support make it a convenient and engaging platform for accessing news content tailored to individual preferences."
  },
  {
    _id: 8,
    Projects: "Crop pest detection using YOLOv5 Android APP",
    Date: "(03/2022 -  05/2022)",
    Skills: "Flutter : Deep Learning",
    Description: "The Pest Detection App is a mobile application developed using the Flutter framework, designed to identify and classify various pests in an efficient and accurate manner. The app utilizes the YOLOv5 model, a state-of-the-art object detection algorithm, to detect and classify pests belonging to 20 different classes.",
    Key_Feature: "Image Capture and Selection: The app allows users to capture images of plants or pests using the device's camera or select existing images from the gallery. The selected image serves as input for the pest detection process.\n\nPest Detection and Classification: The app employs the YOLOv5 model, which has been trained on a large dataset containing images of pests from 20 different classes. The model accurately identifies and classifies pests present in the given image. The app provides real-time detection and classification results.\n\nPest Information and Details: The app provides detailed information about the identified pests. This includes the common name, scientific name, characteristics, potential damage caused by the pest, and recommended control measures. Users can gain insights and knowledge about the pests they encounter.\n\nUser Interaction and Feedback: Users can interact with the app by providing feedback on the accuracy of pest detection. This feedback can help improve the model's performance over time and enhance the overall accuracy of pest identification.\n\nUser-Friendly Interface: The app features an intuitive and user-friendly interface, making it easy for users of all backgrounds to capture images, receive pest detection results, and access pest information.\n\nOffline Support: The app provides offline support, allowing users to perform pest detection even without an internet connection. The YOLOv5 model and relevant data are stored locally on the device, ensuring seamless usage in various environments.",
    Technology_used: "Flutter: An open-source UI framework by Google for building cross-platform applications, enabling the development of a visually appealing and responsive user interface.\nYOLOv5 Model: A deep learning-based object detection model known for its high accuracy and real-time performance. The model can be implemented using popular deep learning libraries such as TensorFlow or PyTorch.",
    Conclusion: "The app can include additional features such as a pest control recommendation system, where users receive personalized suggestions for managing and controlling the detected pests.\nIntegration with external databases or APIs can provide additional resources and information on pest control methods and treatments.\nIncorporating a user community feature, where users can share pest-related information and experiences, can enhance engagement and provide a platform for knowledge sharing.\nBy developing the Pest Detection App using Flutter and the YOLOv5 model, users will have a powerful tool to identify and learn about various pests. Whether it's for farmers, gardeners, or anyone interested in plant health, this app will help detect and manage pests effectively, promoting healthy plant growth and minimizing damage caused by pests."
  },
  {
    _id: 6,
    Projects: "Skin Cancer Detection using App",
    Date: "(10/2022 -  11/2022)",
    Skills: "Flutter : Deep Learning",
    Description: "The Skin Cancer Detection Application project aims to develop a mobile application using Flutter for the frontend and a deep neural network for the backend to accurately detect various types of skin cancer. The application will utilize machine learning techniques to analyze skin images and classify them into ten different classes of skin cancer.",
    Key_Feature: "User Authentication: The application will provide a user registration and login system to ensure secure access to the skin cancer detection functionality. Users will be able to create an account, log in, and securely authenticate themselves.\n\nImage Capture: Users will have the ability to capture images of their skin lesions using the device's camera. The application will provide a user-friendly interface to capture high-quality images that will be used for skin cancer detection.\n\nImage Analysis and Classification: The captured skin images will be analyzed by a deep neural network model trained on a dataset of various skin cancer images. The model will classify the skin images into ten different classes of skin cancer, such as melanoma, basal cell carcinoma, squamous cell carcinoma, etc.\n\nReal-time Results: The application will provide real-time results of the skin cancer detection process. Users will receive immediate feedback on the likelihood of their skin lesion being cancerous based on the classification results obtained from the deep neural network.\n\nRisk Assessment: Along with the classification results, the application can provide a risk assessment score or probability indicating the likelihood of the skin lesion being malignant. This can help users understand the severity of their condition and take appropriate actions.\n\nEducational Resources: The application can include educational resources such as informative articles, images, and videos to raise awareness about skin cancer, its symptoms, prevention measures, and treatment options.\n\nSave and Track Results: Users will have the option to save their skin images, classification results, and risk assessment scores for future reference. This allows users to track changes in their skin lesions over time and consult with medical professionals if necessary.\n\nIntegration with Backend APIs: The application can integrate with backend APIs or external services to fetch additional information, such as nearby dermatologists, clinics, or hospitals specializing in skin cancer treatment.",
    Technology_used: "Flutter: A cross-platform framework for building mobile applications, which will be used for the frontend development.\nDeep Neural Network: A machine learning technique that will be used to train a model capable of classifying skin cancer images into ten different classes.\nPython: The programming language commonly used for deep learning and building machine learning models.",
    Conclusion: "The application should have an intuitive and user-friendly interface, allowing users to easily navigate and interact with the features.\nProper error handling and validation should be implemented to provide accurate and reliable skin cancer detection results.\nThe deep neural network model should be trained on a diverse and reliable dataset to ensure accurate classification results.\nThe application can include features such as image cropping, image enhancement, and automatic skin lesion measurement to enhance the user experience and accuracy of detection.\nBy developing the Skin Cancer Detection Application using Flutter and a deep neural network, users will have a powerful tool at their fingertips to aid in the early detection and identification of various types of skin cancer. This can potentially help users seek timely medical attention, leading to better treatment outcomes and improved overall health."
  },
  {
    _id: 11,
    Projects: "IPl score Predict App",
    Date: "(04/2021 -  05/2021)",
    Skills: "Java : CNN",
    Description: "The IPL Score Predictor Mobile App is a mobile application developed using Java, designed to predict scores of Indian Premier League (IPL) cricket matches. The app utilizes a Convolutional Neural Network (CNN) model to analyze various match-related factors and provide a predicted score for a given match.",
    Key_Feature: "User Interface and Match Selection: The app features an intuitive user interface where users can select upcoming IPL matches from a schedule or choose a specific match they are interested in predicting the score for.\n\nData Collection and Preprocessing: The app collects relevant match-related data such as team lineups, past performance, venue details, and other factors that can influence the score prediction. The collected data is preprocessed to prepare it for input into the CNN model.\n\nConvolutional Neural Network (CNN) Model: The app employs a CNN model specifically trained on a dataset of historical IPL match data. The model learns patterns and correlations between match-related factors and final scores. It utilizes this knowledge to predict the score for a given match based on the input data.\n\nReal-time Score Prediction: The app provides real-time score prediction, meaning that users can obtain score predictions for upcoming IPL matches as they become available. This feature enables fans and enthusiasts to engage in score discussions and make informed predictions before the match begins.\n\nScore Comparison and Analysis: The app compares the predicted score with the actual score of the match once it concludes. This comparison allows users to evaluate the accuracy of the prediction and understand the performance of the CNN model.\n\nUser Interaction and Feedback: Users can provide feedback on the predicted scores, rate the accuracy of the predictions, and contribute to improving the model's performance over time. User feedback helps refine the model and enhance the accuracy of future score predictions.\n\nUser-Friendly Interface and Notifications: The app features a user-friendly interface that provides an interactive and engaging experience. Users can receive notifications for upcoming matches, predicted scores, and match results to stay up to date with the IPL season.",
    Technology_used: "Java: A widely-used programming language for developing Android applications, providing flexibility, reliability, and performance.\nConvolutional Neural Network (CNN): A deep learning model known for its effectiveness in image and pattern recognition tasks. The CNN model is trained on historical IPL match data to predict scores.",
    Conclusion: "Integration with live score APIs or cricket-related data sources to provide real-time match updates and statistics.\nImplementing a leaderboard or competition feature, allowing users to compare their score predictions with other app users.\nProviding insights and analysis based on historical match data to enhance user understanding of the prediction process.\nBy developing the IPL Score Predictor Mobile App using Java and a CNN model, users can engage in predicting IPL match scores and compare their predictions with the actual outcomes. The app provides an interactive platform for cricket enthusiasts, promoting engagement and discussion around IPL matches while leveraging the power of machine learning for accurate score predictions."
  },
  {
    _id: 5,
    Projects: "Chat Application",
    Date: "(01/2023 - 02/2023)",
    Skills: "React.js : Firebase",
    Description: "The Chat Application project aims to develop a real-time messaging application using React.js for the frontend and Firebase for the backend. This application will allow users to communicate with each other through text messages in real-time.",
    Key_Feature: "User Authentication: The application will provide a user registration and login system using Firebase Authentication. Users will be able to create an account, log in, and securely authenticate themselves.\n\nReal-time Messaging: Users will be able to send and receive messages in real-time. The application will utilize Firebase's real-time database and WebSocket connections to enable instant messaging between users.\n\nUser Contacts and Friend Requests: Users will have the ability to add other users as contacts or send friend requests. The application will manage the contact list and friend requests using Firebase's database and storage capabilities.\n\nGroup Chats: Users can create and participate in group chats. The application will allow users to create groups, invite others to join, and send messages within the group. Firebase's real-time database will be utilized to manage group chat messages.\n\nMessage Notifications: Users will receive notifications for new messages, friend requests, and group invitations. Firebase Cloud Messaging (FCM) or similar push notification services can be integrated to deliver notifications across devices.\n\nMessage Search: Users will be able to search for specific messages or conversations. The application will provide a search functionality that allows users to find messages based on keywords or specific criteria.\n\nUser Profile Management: Users will have the ability to edit their profile information, including their display name, profile picture, and status. The application will utilize Firebase's user management features to store and retrieve user profile data.\n\nOffline Support: The application will provide offline support, allowing users to view their previous messages and perform basic actions even when they are not connected to the internet. Firebase's offline data capabilities will be utilized to achieve this functionality.",
    Technology_used: "React.js: A JavaScript library for building user interfaces, which will be used for the frontend development.\nFirebase: A cloud-based platform that provides various backend services, including authentication, real-time database, cloud storage, and cloud messaging.",
    Conclusion: "The application's UI/UX should be intuitive and user-friendly, ensuring a seamless chatting experience.\nProper error handling and validation should be implemented to provide a robust and secure application.\nThe application can be enhanced with additional features such as message encryption, message reactions, file sharing, or multimedia support, depending on project requirements and scope.\nBy developing the Chat Application using React.js and Firebase connectivity, users will have a modern and efficient messaging platform that facilitates real-time communication with friends, colleagues, or community members."
  },
  {
    _id: 7,
    Projects: "Fish Species detection using Android App",
    Date: "(08/2022 -  09/2022)",
    Skills: "Flutter : Deep Learning",
    Description: "The Fish Species Detection App is a mobile application developed using Flutter framework, which aims to accurately identify and classify different species of fish. The app utilizes a deep neural network model to perform the classification task, enabling users to identify fish species quickly and easily.",
    Key_Feature: "Image Capture and Selection: The app allows users to capture a photo of a fish using their device's camera or select an existing image from the gallery. The selected image serves as input for the fish species detection process.\n\nFish Species Classification: The app employs a pre-trained deep neural network model specifically designed for fish species classification. This model is trained on a dataset containing images of various fish species, allowing it to accurately predict the species of a given fish image. The deep neural network can detect and classify up to 10 different classes of fish species.\n\nReal-time Classification: The app provides real-time classification, meaning that as soon as a user captures or selects an image, the deep neural network model processes it and provides a prediction promptly. Users receive instant feedback on the identified fish species.\n\nSpecies Information and Details: The app provides detailed information about the identified fish species. This includes common name, scientific name, habitat, size, diet, and other relevant details. Users can gain knowledge about the fish species they encounter or are interested in.\n\nUser Interaction and Feedback: Users can provide feedback on the accuracy of the species identification. This feedback can be used to continuously improve the model's performance and enhance the overall accuracy of the fish species detection.\n\nUser-Friendly Interface: The app features an intuitive and user-friendly interface, making it easy for users of all ages and backgrounds to capture fish images, receive species predictions, and explore fish species information.\n\nOffline Support: The app provides offline support, allowing users to use the species detection functionality even when an internet connection is not available. The trained model and relevant data are stored locally on the device, ensuring uninterrupted usage.",
    Technology_used: "Flutter: An open-source UI framework by Google for building cross-platform applications, enabling the development of a seamless and visually appealing user interface.\nDeep Neural Network: A machine learning technique used for image classification tasks. The model will be trained using popular deep learning libraries such as TensorFlow or PyTorch.",
    Conclusion: "The app's performance and accuracy can be enhanced by fine-tuning the pre-trained model or by training a custom model using a larger dataset specific to the 10 classes of fish species.\nThe user interface can include additional features such as a history of previously identified fish species, a search function for species information, or the ability to share species identification results with others.\nBy developing the Fish Species Detection App using Flutter and a deep neural network, users will have a handy tool for identifying and learning about different fish species. Whether it's for fishing enthusiasts, marine researchers, or nature lovers, this app will facilitate species identification and promote awareness of aquatic biodiversity."
  },
  {
    _id: 9,
    Projects: "E-Commerce App using Neural Networks",
    Date: "(11/2021 -  01/2022)",
    Skills: "Flutter : AI",
    Description: "The E-commerce App with Camera-Based Item Search is a mobile application developed using the Flutter framework. This app aims to provide users with a convenient way to search for products by using the device's camera. It utilizes a Convolutional Neural Network (CNN) model for image recognition and retrieval, enabling users to find items by capturing images.",
    Key_Feature: "User Authentication and Profile Management: The app allows users to create an account, log in, and manage their profiles. User authentication ensures secure access to personalized features and order history.\n\nProduct Catalog and Listings: The app features a comprehensive product catalog with various categories and listings. Users can browse and explore a wide range of products available for purchase.\n\nCamera-Based Item Search: The app integrates the device's camera functionality to enable item search by capturing images. The CNN model analyzes the captured image and retrieves similar or identical products from the catalog.\n\nImage Recognition and Retrieval: The CNN model implemented in the app performs image recognition and retrieval using deep learning techniques. It identifies key features of the captured image and matches them with product images in the database.\n\nSearch Results and Recommendations: The app displays search results based on the captured image, showing similar or related products. Additionally, personalized recommendations can be provided to users based on their browsing and purchase history.\n\nProduct Details and Reviews: Users can view detailed product descriptions, specifications, pricing, and customer reviews. This information helps users make informed purchasing decisions.\n\nShopping Cart and Checkout: Users can add desired products to their shopping cart, review their cart, and proceed to checkout. The app provides a seamless and secure payment process for a convenient shopping experience.\n\nOrder History and Tracking: The app maintains a record of users' order history, allowing them to track the status of their purchases and access previous transactions.",
    Technology_used: "Flutter: An open-source UI framework for building cross-platform mobile applications, enabling a consistent and visually appealing user interface.\nConvolutional Neural Network (CNN): A deep learning model specifically designed for image recognition and classification tasks. The CNN model will be trained on a dataset of product images for accurate item search.",
    Conclusion: "Integration with a backend server or e-commerce platform to manage product inventory, user accounts, and order processing.\nImplementation of image caching to improve search performance and reduce latency for subsequent searches.\nIntegration of user feedback mechanisms such as product ratings and reviews to enhance the overall shopping experience.\nBy developing the E-commerce App with Camera-Based Item Search using Flutter and a CNN model, users will have a unique and efficient way to search for products using their device's camera. This innovative feature simplifies the shopping experience and enables users to quickly find desired items, leading to increased user engagement and customer satisfaction."
  }

];

  //handlers

  export const getProjectsDesc = () => project_desc;

  export const addProjectDesc = (_project_desc:Projects_desc) => {
    project_desc.push(_project_desc);
  }
  
  export const deleteProjectDesc = (_id:Number) => {
    project_desc = project_desc.filter((project_desc) => project_desc._id !== _id );
  }

  export const updateProjectDesc = ( _id: Number,
    title: String,
    date: String,
    skill: String,
    desc: String,
    feature: String,
    tech: String,
    concl: String) => {

    const Value = project_desc.find((value) => value._id !== _id );
    if(Value){
        Value.Projects = title;
        Value.Date = date;
        Value.Skills = skill;
        Value.Description = desc;
        Value.Key_Feature = feature;
        Value.Technology_used = tech ;
        Value.Conclusion = concl;
    }else{
        throw new Error("NO Project Description FOUND");
    }
  }

  export const getById = (_id:Number) => {
    return project_desc.find((value) => value._id === _id);
  }