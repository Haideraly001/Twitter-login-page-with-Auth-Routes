import React from "react";
// import "@/styles/loader.module.css";
import "./loaders.css"

const BouncingDotsLoader = ({ message }) => {
  return (
    <>
      <div className="loader_container">
        <div className="dots_container">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="dot"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: "0.6s",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const Loader = () => {
  const messages = [
    "We're working hard to get you the best quote",
    "Crunching the numbers for your perfect coverage",
    "Almost there! Finalizing your personalized quote",
    "Searching for the most competitive rates for you",
  ];
  const [messageIndex, setMessageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader_demo">
      <BouncingDotsLoader message={messages[messageIndex]} />
    </div>
  );
};

export default Loader;