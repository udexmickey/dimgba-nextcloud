```markdown
# Country Data App

This web application displays information about different countries, including their names, continents, whether they have states, country codes, and international names. Users can filter the data by continent and whether the country has states. Additionally, they can sort the table by name in ascending or descending order.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/udexmickey/dimgba-nextcloud
```

2. Navigate to the project directory:

```bash
cd dimgba-nextcloud
```

3. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm start
```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Features

- Display a table with country information.
- Filter countries by continent and whether they have states.
- Sort countries by name in ascending or descending order.

## Screenshots

![Screenshot 1](./Screenshot 2023-11-02 at 17.27.22.png)
![Screenshot 2](./Screenshot 2023-11-02 at 17.19.28.png)

## Technologies Used

- React
- Material-UI
- TypeScript

## Folder Structure

```
src/
|-- components/
|   |-- Table.tsx
|   |-- FilterComponent.tsx
|-- utils/
|   |-- types/
|       |-- Country.type.ts
|       |-- table.type.ts
|-- App.tsx
|-- countryData.json
|-- index.tsx
|-- ...
```

## License

This project is licensed under the [MIT License](LICENSE).
```

In this `README.md` file, I've provided sections for installation, usage, features, screenshots, technologies used, folder structure, and license. You can customize it further based on your specific application. Additionally, you can add more sections or details as needed. Remember to replace placeholders like `your-username` and `dimgba-nextcloud` with your actual repository information.