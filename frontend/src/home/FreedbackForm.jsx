import React, { useState, useEffect } from 'react';
import img1 from './users/user1.jpg';
import img2 from './users/user2.jpg';
import img3 from './users/user3.jpg'; // Import additional user images
import img4 from './users/user4.jpg';


const FeedbackCard = () => {
  const [userData, setUserData] = useState([
    { src: img1, message: "Swaroopwadhini NGO has been a beacon of hope for underprivileged students seeking education.  Attending their guest lectures was an enriching experience", name: "Ajay Raykar" },
    { src: img2, message: "As a volunteer at Swaroopwadhini, I've witnessed firsthand the positive impact they have on the community. Their dedication to providing free education is commendable.", name: "Savata Salunkhe" },
    { src: img3, message: "I've had the opportunity to participate in their events and interact with the students they serve. The organization's commitment to fostering a supportive learning environment is evident, making it a fulfilling experience for both volunteers and beneficiaries.", name: "Pranav Kupate" },
    { src: img4, message: "Swaroopwadhini's impact extends beyond education; it empowers students to dream big and pursue their aspirations. I appreciate the user-centric approach they take in designing their programs", name: "Akshay Thokare" },
    // { src: img5, message: "Your support means the world to us. Thank you for being an amazing part of our community.", name: "User 5" },
    // { src: img6, message: "We appreciate your feedback and are committed to making improvements based on your suggestions. Thank you!", name: "User 6" },
    // { src: img7, message: "Thank you for your continued support and valuable feedback. We couldn't do it without you!", name: "User 7" },
    // { src: img8, message: "Your feedback inspires us to keep pushing forward and delivering the best experience possible. Thank you!", name: "User 8" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % userData.length);
    }, 10000); // Change feedback every 10 seconds

    return () => clearInterval(interval);
  }, [userData.length]);

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % userData.length);
  };

  const prevFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + userData.length) % userData.length);
  };

  const { src: userImage, message: feedbackMessage, name: userName } = userData[currentIndex];

  return (
    <div className='mb-10 relative overflow-hidden' id="feedback">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-y-6 z-0"></div>
      <div className="relative z-10 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-6 flex items-center justify-center">
          <div className="h-40 md:h-56 lg:h-64 w-40 md:w-56 lg:w-64 rounded-full overflow-hidden">
            <img className="h-full w-full object-cover" src={userImage} alt="User" />
          </div>
          <div className="ml-4">
            <p className="text-lg lg:text-xl font-semibold text-white">{userName}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <div className="max-w-md mx-auto bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-2">
              <p className="text-gray-800 text-base lg:text-lg">{feedbackMessage}</p>
            </div>
            <div className="py-2 px-4">
              <p className="text-gray-600 text-sm">Thanks for your support!</p>
              <p className="text-gray-600 text-sm">We appreciate your feedback.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div onClick={prevFeedback} className="mx-2 text-gray-200 hover:text-gray-400">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div onClick={nextFeedback} className="mx-2 text-gray-200 hover:text-gray-400">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
