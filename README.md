# Weather Dashboard

A simple weather dashboard application built with React and TailwindCSS. The app fetches real-time weather data from the OpenWeatherMap API and displays it in a user-friendly interface.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- Search for current weather information by city name.
- Displays temperature, weather conditions, humidity, and wind speed.
- Responsive design using TailwindCSS.
- Glassmorphic UI effects for an enhanced visual experience.

## Demo

You can check out the live demo of the Weather Dashboard [here](https://narayanan-27.github.io/Weather-Dashboard/).

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/narayanan-27/weather-dashboard.git
    cd weather-dashboard
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api):**
   - Create a `.env` file in the root of the project.
   - Add your API key to the `.env` file:
     ```
     REACT_APP_API_KEY=your_api_key_here
     ```

4. **Start the development server:**
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Usage

1. **Open the application:**
   Once the development server is running, open your browser and navigate to `http://localhost:3000`.

2. **Search for weather information:**
   Enter the name of the city in the search bar and click the "Search" button.

3. **View weather data:**
   The current weather information for the specified city will be displayed, including temperature, weather description, humidity, and wind speed.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **TailwindCSS:** A utility-first CSS framework for rapid UI development.
- **Axios:** Promise-based HTTP client for making API requests.
- **OpenWeatherMap API:** API for fetching real-time weather data.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
