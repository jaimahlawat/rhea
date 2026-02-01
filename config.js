const CONFIG = {
    valentineName: "Rhea",

    pageTitle: "To My Beautiful Wife 💍",

    floatingEmojis: {
        hearts: ['❤️', '💍', '✨', '👩‍❤️‍👨', '🥂'],  // Added rings and couple emojis
        bears: ['🧸', '🏡']                       // Added a home icon for your life together
    },

    questions: {
        first: {
            text: "Are you still glad you said 'I do'?",                                    
            yesBtn: "Every single day",                                             
            noBtn: "Ask me after coffee",                                               
            secretAnswer: "You're stuck with me forever, Mrs.! ❤️"           
        },
        second: {
            text: "How much do you love your husband today?",                          
            startText: "More than yesterday!",                                   
            nextBtn: "Keep counting! ❤️"                                         
        },
        third: {
            text: "Will you be my forever Valentine on Feb 14th, 2026? 🌹", 
            yesBtn: "Always yours!",                                             
            noBtn: "Still Yes (but in red)"                                                 
        }
    },

    loveMessages: {
        extreme: "Building a life with you is my greatest adventure! 🏠💝✨",  
        high: "My heart still skips a beat when you walk in! 💓",              
        normal: "To the moon and back! 🥰"                           
    },

    celebration: {
        title: "I’m the luckiest husband in the world! 🥂✨💍",
        message: "You're my better half. I've got a special date night and a lifetime of kisses waiting for you!",
        emojis: "🥂💍🌹✨❤️🏡👩‍❤️‍👨"  
    },

    colors: {
        backgroundStart: "#2c3e50",      // Elegant Midnight Blue
        backgroundEnd: "#fd746c",        // Transitioning to a warm Sunset Orange
        buttonBackground: "#e74c3c",     // Deep Passionate Red
        buttonHover: "#ff5252",          
        textColor: "#ffffff"             
    },

    animations: {
        floatDuration: "14s",           
        floatDistance: "40px",          
        bounceSpeed: "0.6s",            
        heartExplosionSize: 1.6         
    },

    music: {
        enabled: true,                     
        autoplay: true,                    
        musicUrl: "https://res.cloudinary.com/dz6h8izpa/video/upload/v1769954514/Olivia-Dean---Man-I-Need-Bazeafrika.com_jza3xz.mp3", 
        startText: "🎵 Our Song",        
        stopText: "🔇 Mute",         
        volume: 0.5                        
    }
};

window.VALENTINE_CONFIG = CONFIG;
