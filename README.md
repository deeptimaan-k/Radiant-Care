# Radiant Care

Radiant Care is a web application designed to provide a comprehensive platform for managing healthcare services. It aims to streamline the process of patient management, appointment scheduling, and medical records management to enhance the quality of care provided to patients.

## Features

- **User Authentication**: Secure login and registration for users.
- **Patient Management**: Add, update, and delete patient records.
- **Appointment Scheduling**: Users can book, reschedule, or cancel appointments.
- **Medical Records**: Maintain a digital record of patients’ medical history.
- **Admin Dashboard**: Admin users can manage users, view statistics, and oversee all activities within the application.
- **Responsive Design**: Accessible on various devices, including desktops, tablets, and mobile phones.

## Tech Stack

- **Frontend**: React, Redux, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: (Mention your hosting solution, e.g., Heroku, Vercel)

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- Node.js
- MongoDB
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/deeptimaan-k/Radiant-Care.git
Navigate to the project directory:

bash
Copy code
cd Radiant-Care
Install the dependencies:

bash
Copy code
npm install
Set up your environment variables. Create a .env file in the root directory and add the following:

env
Copy code
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
Start the server:

bash
Copy code
npm start
Access the application in your browser at http://localhost:5000.

Usage
Register a new user and log in.
Navigate through the application to manage patients, appointments, and medical records.
Admin users have additional privileges to manage the application settings and view analytics.
Contributing
Contributions are welcome! If you would like to contribute, please follow these steps:

Fork the repository.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.



