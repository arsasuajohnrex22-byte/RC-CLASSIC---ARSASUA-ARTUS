VINTAGE MOTO WEBSITE WITH FIREBASE
===================================

SETUP INSTRUCTIONS:
-------------------

1. FIREBASE SETUP:
   - Go to https://console.firebase.google.com/
   - Create a new project named "vintage-moto-website"
   - Enable Firestore Database (start in test mode)
   - Register a web app in your Firebase project
   - Copy the Firebase configuration
   - Paste it into firebase-config.js

2. CREATE PROJECT FOLDER:
   - Copy all files to your web server or hosting service
   - Files needed:
     index.html
     style.css
     main.js
     firebase-config.js
     upload-data.html
     test_api.html

3. SETUP COLLECTIONS IN FIRESTORE:
   - Go to Firebase Console → Firestore Database
   - Create collections with these names:
     - categories
     - gallery
     - resources
     - gear
     - events

4. UPLOAD SAMPLE DATA:
   - Open upload-data.html in your browser
   - Click "Show Sample" buttons to see sample data
   - Click "Upload" buttons to add data to Firebase
   - Or use "Upload All Data" to add everything at once

5. TEST YOUR SETUP:
   - Open test_api.html in your browser
   - Click "Check Firebase" to verify connection
   - Test each endpoint to ensure data is loaded

6. ACCESS YOUR WEBSITE:
   - Open index.html in your browser
   - The website will automatically use Firebase data
   - If Firebase is not configured, it will use fallback data

7. FILE STRUCTURE:
   vintage-moto/
   ├── index.html                 # Main website
   ├── style.css                  # Styles
   ├── main.js                    # JavaScript with Firebase integration
   ├── firebase-config.js         # Firebase configuration
   ├── upload-data.html           # Data upload tool
   ├── test_api.html              # API testing page
   └── README.txt                 # This file

8. FEATURES:
   - Real-time data from Firebase Firestore
   - Automatic fallback if Firebase is not available
   - Easy data upload interface
   - Test page to verify all endpoints
   - Responsive design for all devices

9. TROUBLESHOOTING:
   - If website shows fallback data only: Check Firebase configuration
   - If upload fails: Make sure Firestore is in test mode
   - If images don't load: Check internet connection
   - If Firebase not working: Verify API keys in firebase-config.js

10. CUSTOMIZATION:
    - Edit firebase-config.js with your Firebase project credentials
    - Modify main.js to add more data collections
    - Customize CSS in style.css
    - Add more sample data via upload-data.html

CONTACT:
--------
For issues or questions, check the test page first.
All data is stored in Firebase Firestore.

ENJOY YOUR VINTAGE MOTORCYCLE WEBSITE!