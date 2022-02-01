const firebaseConfig = {
  apiKey: "AIzaSyA_KaVlSvgQ-jjuQxK2d6EybcpB5YoeHsQ",
  authDomain: "sdmhub-a9bf5.firebaseapp.com",
  projectId: "sdmhub-a9bf5",
  storageBucket: "sdmhub-a9bf5.appspot.com",
  messagingSenderId: "981438393454",
  appId: "1:981438393454:web:a8c576363c13b38da58a7f",
  measurementId: "G-L52T2GN831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
