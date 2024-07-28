# AI Translator 

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Introduction
The AI Translator Application is a powerful and user-friendly tool that leverages the T5 large language model, trained with 223 million parameters, to provide high-quality translations. The backend is built using Flask and the HuggingFace Transformers pipeline, while the frontend is a React application styled with Tailwind CSS and DaisyUI.

## Features
- **High-Quality Translations:** Powered by the T5 large language model.
- **RESTful API:** Easy integration with other applications.
- **Modern Frontend:** Built with React, Tailwind CSS, and DaisyUI for a seamless user experience.
- **Scalable:** Designed to handle multiple requests efficiently.

## Technologies Used
### Backend:
- **Flask**
- **Transformers Pipeline** (HuggingFace)
- **T5 Large Language Model**

### Frontend:
- **React**
- **Tailwind CSS**
- **DaisyUI**

## Installation
### Prerequisites
- Python (tested on 3.12)
- Node.js (tested on 22.5.1)

### Backend Setup
1. Fork the repository.
   
2. Clone the repository:
    ```bash
    git clone https://github.com/your-username/AI_Translator.git
    cd ai-translator/backend
    ```

3. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

4. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

5. Start the Flask server:
    ```bash
    flask run
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the React application:
    ```bash
    npm start
    ```

## Usage
- Open your browser and navigate to `http://localhost:3000` to use the frontend application.
- Use the provided API endpoints for integrating the translation backend into other applications.

## API Endpoints
### Translate Text
- **Endpoint:** `/`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
        "task": "translation_en_to_fr",
        "prompt": "Hello!"
    }
    ```
- **Response:**
    ```json
    {
        "response": "Bonjour!"
    }
    ```

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any enhancements, bug fixes, or new features.

## Demo
![image](https://github.com/user-attachments/assets/cb58d2bd-3781-4238-8282-ab28c77fe5b6)
![image](https://github.com/user-attachments/assets/6f713a64-76c7-4d42-afd7-bcee80d82ba3)
![image](https://github.com/user-attachments/assets/f5da89cf-d36a-4e2c-9f5e-dccd14e9b439)


