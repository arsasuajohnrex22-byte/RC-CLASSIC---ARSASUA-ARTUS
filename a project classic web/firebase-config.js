// firebase-config.js
// Replace with YOUR Firebase configuration from Firebase Console

// First, check if firebase is already loaded
if (typeof firebase === 'undefined') {
    console.error("Firebase SDK not loaded. Make sure firebase scripts are included.");
} else {
    const firebaseConfig = {
        apiKey: "AIzaSyAAqdPB-9D5oQT8E4AfvGdSMr4liLsGLqo",
        authDomain: "vintage-moto-website.firebaseapp.com",
        projectId: "vintage-moto-website",
        storageBucket: "vintage-moto-website.firebasestorage.app",
        messagingSenderId: "705053558288",
        appId: "1:705053558288:web:45c24317c7e9954472ec95"
    };

    // Initialize Firebase
    try {
        // Check if already initialized
        if (!firebase.apps.length) {
            const app = firebase.initializeApp(firebaseConfig);
            console.log("✅ Firebase app initialized!");
        } else {
            console.log("✅ Firebase app already initialized!");
        }
        
        // Get Firestore and Auth instances
        const db = firebase.firestore();
        const auth = firebase.auth();
        
        // Make available globally
        window.firebaseDB = db;
        window.firebaseAuth = auth;
        
        console.log("✅ Firebase services initialized successfully!");
        
        // Check for logged in user
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("✅ User is logged in:", user.email);
                // Store user info in localStorage for easy access
                localStorage.setItem('vintagemoto_user', JSON.stringify({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }));
            } else {
                console.log("ℹ️ No user logged in");
                localStorage.removeItem('vintagemoto_user');
            }
        });
        
    } catch (error) {
        console.error("❌ Firebase initialization error:", error);
        console.log("⚠️ Website will use fallback data");
    }
}