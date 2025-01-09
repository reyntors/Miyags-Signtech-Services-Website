import React, { useState, useRef, useEffect } from 'react';
import './bot.css';
import 'font-awesome/css/font-awesome.min.css'; 
import ChatBotImg from '../../assets/botChatImg.jpg';

const WIT_AI_TOKEN = 'S4ENF7EAKTNQRR2IJ3W54W5YRWRRPDHD';

async function getWitResponse(message) {
    try {
        const response = await fetch(`https://api.wit.ai/message?v=20220101&q=${encodeURIComponent(message)}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${WIT_AI_TOKEN}`,
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Wit.ai response:', error);
        return null;
    }
}

function getTimeBasedGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
        return 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
        return 'Good Afternoon';
    } else if (currentHour >= 17 && currentHour < 21) {
        return 'Good Evening';
    } else {
        return 'Good Night';
    }
}

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [isMinimized, setIsMinimized] = useState(true);
    const messagesEndRef = useRef(null);
    
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);  // Trigger this effect when messages change


    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (userInput.toLowerCase() === 'exit') {
            setMessages((prevMessages) => [...prevMessages, { text: 'Goodbye!', sender: 'bot' }]);
            return;
        }

        const newMessages = [...messages, { text: userInput, sender: 'user' }];
        setMessages(newMessages);

        setUserInput('');
        setIsTyping(true);

        const witResponse = await getWitResponse(userInput);

        setTimeout(() => {
            setIsTyping(false);

            if (witResponse) {
                const intent = witResponse.intents?.[0]?.name;

                let botResponse = '';
                if (intent === 'get_location' || intent === 'get_address') {
                    botResponse = 'Lot#7 Jordan Street, Riverview Village, Bacaca, Davao City, Davao del Sur';
                } else if (intent === 'greet') {
                    const greeting = getTimeBasedGreeting();
                    botResponse = `Hello, ${greeting}! How can I assist you today?`;
                } else if (intent === 'get_contactNumber') {
                    botResponse = 'You can contact us at Tel No. (221)-0918 or Phone No. +63 917 717 0415.';
                } else if (intent === 'thank_you') {
                    botResponse = 'You\'re welcome! Let me know if you need anything else.';
                } else if (intent === 'get_Email') {
                    botResponse = 'Email Us at:  sales@miyagssigntech.com';
                } else {
                    botResponse = 'No response from your words.';
                }

                setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
            }
        }, 1500); // Simulate typing delay
    };

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className="chatbot-container">
            <div className={`chat-box ${isMinimized ? 'minimized' : ''}`}>
                {isMinimized ? (
                    <div className="chat-icon" onClick={toggleMinimize}>
                        <i className="fa fa-comment"></i>
                    </div>
                ) : (
                    <>
                        <div className="chat-header">
                            <h2>Miyags Chat Assistant 
                                 <span className="online-status">
                                    <i className="fa fa-circle"></i> Online
                                </span></h2>
                            <button className="minimize-btn" onClick={toggleMinimize}>
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <div className="messages">
                            {messages.map((message, index) => (
                                <div key={index} className={`message ${message.sender}`}>
                                    {message.sender === 'bot' && (
                                        <div className="bot-icon-wrapper">
                                            <img
                                                src={ChatBotImg}
                                                alt="Bot Icon"
                                                className="bot-icon"
                                            />
                                        </div>
                                    )}
                                    <div className="message-text">
                                        <span>{message.text}</span>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                
                                <div className="message bot typing">
                                     <img
                                                src={ChatBotImg}
                                                alt="Bot Icon"
                                                className="bot-icon"
                                            />
                                            <p id='typing'>Typing. . .</p>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        <form onSubmit={handleSubmit} className="input-form">
                            <input
                                type="text"
                                value={userInput}
                                onChange={handleInputChange}
                                placeholder="Type your message..."
                                required
                            />
                            <button type="submit">Send</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Chatbot;
