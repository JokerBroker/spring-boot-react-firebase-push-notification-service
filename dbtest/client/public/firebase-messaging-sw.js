importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyCcEwIVresKxy1QnxgadQQCkVJgc7xzTBY",
  authDomain: "fir-appspring.firebaseapp.com",
  projectId: "fir-appspring",
  storageBucket: "fir-appspring.appspot.com",
  messagingSenderId: "169628979852",
  appId: "1:169628979852:web:3d3a1837beccc4b106e1a9",
  measurementId: "G-FZ0286XMDD"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});