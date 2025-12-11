# **Vafomat**

A lightweight meal-planning application built with modern frontend technologies to help users quickly choose meals, build weekly menus, and manage shopping and meal lists.
Tech Stack
Vite


TypeScript


React


shadcn-ui


Tailwind CSS


### **Data Persistence**

User-generated data is stored locally in the browser using structured Local Storage keys. This strategy ensures:

State is restored across page reloads

No external backend or database is required

Users can build and maintain a personal meal library over time

###### **Important Note:**

All data is stored locally in the browser. If you clear your browser data (including Local Storage), switch to another browser, or use a different device, your saved meals, lists, and settings will not carry over. Each browser and device maintains its own independent data store.


### **Pages and Navigation Structure**

Landing Page — App title, primary CTA, and top-level navigation


Random Meal Page (/valj-matratt) — Auto-generated meal suggestions


Veckomeny — Seven-day randomized weekly menu


Se maträtter — View, add, and delete meals


Handlingslista — Receipt-style shopping list


Lägg till maträtt — Popup module for adding new meals


Information — Application description and usage guidelines


Om oss — Background and service mission


Footer Navigation — Information, Om oss, Contact, etc.


### *Getting Started**

You may run the project locally by cloning the repository and using your preferred IDE or editor.

###### Prerequisite:

 Node.js and npm must be installed. For convenience, you may install them using nvm:
 https://github.com/nvm-sh/nvm#installing-and-updating

 
# **Installation**

### Step 1: Clone the repository.
git clone <GIT_URL>

### Step 2: Navigate to the project directory.
cd <PROJECT_NAME>

### Step 3: Install dependencies.
npm install

### Step 4: Start the development server.
npm run dev
Then open the application in your browser at the URL displayed in the terminal (typically http://localhost:5173).


### **Project Structure**

The project adheres to a standard Vite + React + TypeScript structure:

components/ — Modular UI components built using shadcn-ui and Tailwind CSS


pages/ — Routed screens such as random meal selection, weekly menus, and meal library views


hooks/ — Custom logic including Local Storage handlers


data/ — Static or initial data sources (e.g., seed meal lists)


utils/ — Utility logic such as randomization and formatting helpers


### **Contributing**


Contributions are welcome. Please open an issue or submit a pull request to propose new features, fix bugs, or improve the codebase.


### **License**


The project may be licensed according to the repository owner’s preferred licensing model. Add a formal license file (e.g., LICENSE) if required.





