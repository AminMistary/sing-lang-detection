// Application Configuration
const APP_CONFIG = {
    CAMERA: {
        WIDTH: 640,
        HEIGHT: 480,
        FACING_MODE: 'user',
        FRAME_RATE: 30
    },
    DETECTION: {
        INTERVAL_MS: 33, // ~30 FPS
        MIN_CONFIDENCE: 0.85, // Higher confidence required
        GESTURE_TIMEOUT: 4000, // ms
        BUFFER_SIZE: 15, // Number of frames for stability check
        STABILITY_THRESHOLD: 0.9, // 90% consistency required
        MAX_DISTANCE_THRESHOLD: 10.0 // Max allowed distance from class centroid (tunable)
    },
    MODEL: {
        HIDDEN_UNITS_1: 128,
        HIDDEN_UNITS_2: 64,
        DROPOUT_RATE: 0.2,
        LEARNING_RATE: 0.001,
        EPOCHS: 50,
        BATCH_SIZE: 32,
        TRAIN_SPLIT: 0.8
    },
    RECORDING: {
        AUTO_SAVE_DELAY: 5, // seconds
        MIN_SAMPLES_AUTO: 50,
        MIN_SAMPLES_MANUAL: 20
    }
};
