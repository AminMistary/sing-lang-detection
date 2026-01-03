# 🤟 AI Sign Language Recognition System

<div align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" alt="Status">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version">
  <br>
  <img src="https://img.shields.io/badge/TensorFlow.js-4.0.0-orange" alt="TensorFlow.js">
  <img src="https://img.shields.io/badge/MediaPipe-Hands-red" alt="MediaPipe">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow" alt="JavaScript">
</div>

## ✨ Features

<div style="display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0;">
  <span style="background: linear-gradient(45deg, #667eea, #764ba2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px;">🎯 Real-time Gesture Recognition</span>
  <span style="background: linear-gradient(45deg, #f093fb, #f5576c); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px;">📝 Editable Text Output</span>
  <span style="background: linear-gradient(45deg, #43e97b, #38f9d7); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px;">🔊 Text-to-Speech</span>
  <span style="background: linear-gradient(45deg, #fa709a, #fee140); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px;">🎨 Custom Gesture Creation</span>
  <span style="background: linear-gradient(45deg, #a8edea, #fed6e3); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px;">📊 Live Performance Metrics</span>
</div>

## 🚀 Quick Start

### Prerequisites
- Modern web browser with camera access
- Internet connection for CDN resources

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sign-language-recognition.git
   cd sign-language-recognition
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your web browser
   open index.html
   ```

3. **Grant camera permissions** when prompted

## 🎯 How to Use

### 1. Start Detection
- Click "Start Detection" to begin camera feed
- Position your hand in the camera view

### 2. Create Custom Gestures
- Click "Add New Gesture"
- Enter a gesture name
- Click "Record This Gesture"
- Perform the gesture for 3-5 seconds
- Click "Save Gesture"

### 3. Train the Model
- Add at least 2 gestures with multiple samples
- Click "Train Model"
- Watch the real-time training progress animation
- Model is ready when training completes

### 4. Recognize Gestures
- Perform trained gestures
- Text appears in the editable textarea
- Edit text directly if needed
- Use "Speak Text" for audio output

## 🏗️ Architecture

```
├── index.html          # Main application interface
├── styles.css          # Styling and animations
├── js/
│   ├── main.js         # Application logic and coordination
│   ├── camera.js       # Camera management
│   ├── handDetection.js # MediaPipe hand tracking
│   ├── gestureRecognition.js # ML gesture recognition
│   └── textToSpeech.js # Speech synthesis
└── README.md           # This file
```

## 🔧 Technical Details

### Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **AI/ML**: TensorFlow.js, MediaPipe Hands
- **Gesture Recognition**: Fingerpose library
- **Real-time Processing**: WebRTC, Canvas API

### Key Components

#### Hand Detection
- Uses MediaPipe Hands for accurate hand landmark detection
- Processes 21 hand keypoints in real-time
- Optimized for web browser performance

#### Gesture Recognition
- Custom ML model trained on user-defined gestures
- Real-time classification with confidence scores
- Supports unlimited custom gestures

#### Training Animation
- Dynamic progress bar with shimmer effect
- Real-time epoch and accuracy updates
- Loading spinner for visual feedback

#### Editable Textarea
- Contenteditable textarea for user interaction
- Maintains detected text while allowing edits
- Auto-scroll and formatting preservation

## 🎨 Animations & UI

### Training Progress Animation
```css
.progress-fill::after {
    content: '';
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}
```

### Loading Spinner
```css
.loading-spinner {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

## 📊 Performance Metrics

- **Real-time FPS**: Displayed in status bar
- **Gesture Confidence**: Percentage accuracy for each recognition
- **Training Progress**: Epoch-by-epoch accuracy tracking
- **Sample Collection**: Live counter during gesture recording

## 🔒 Privacy & Security

- All processing happens locally in the browser
- No data is sent to external servers
- Camera feed is not recorded or stored
- Gesture data is stored in browser local storage only

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [MediaPipe](https://mediapipe.dev/) for hand tracking
- [TensorFlow.js](https://www.tensorflow.org/js) for machine learning
- [Fingerpose](https://github.com/andypotato/fingerpose) for gesture recognition

## 📞 Support

If you have any questions or issues:
- Open an issue on GitHub
- Check the browser console for error messages
- Ensure camera permissions are granted

---

<div align="center">
  <p><strong>Made with ❤️ for accessibility and innovation</strong></p>
  <p>
    <a href="#features">Features</a> •
    <a href="#quick-start">Quick Start</a> •
    <a href="#how-to-use">How to Use</a> •
    <a href="#contributing">Contributing</a>
  </p>
</div>

<!-- Animated footer -->
<div align="center" style="margin-top: 40px;">
  <div style="display: inline-block; animation: bounce 2s infinite;">
    <h2 style="color: #667eea;">🚀 Ready to Sign?</h2>
  </div>
</div>

<style>@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}
.bounce {
  display: inline-block;
  animation: bounce 2s infinite;
}
</style>
