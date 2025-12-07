# Global Trend Assignment

A Node.js server that fetches users and posts data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/). The server offers API endpoints to import, list, search, and view data with in-memory caching and proper error handling. No database required.

## Features

- **Fetch Data:** Retrieve users and posts from JSONPlaceholder.
- **API Endpoints:**  
  - Import data  
  - List all items  
  - Search/filter data  
  - Get details by ID
- **Caching:** All fetched data is stored in memory for fast access.
- **Robust Error Handling:** Handles network failures, malformed responses, and missing data gracefully.
- **Clean Project Structure:** Organized using `routes/`, `services/`, and `utils/`.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd <project-folder>
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the server:**
   ```sh
   npm start
   ```
   The server will run at [http://localhost:3000](http://localhost:3000)

## API Endpoints

| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| GET    | `/import`           | Import data from API      |
| GET    | `/users`            | List all users            |
| GET    | `/posts`            | List all posts            |
| GET    | `/users/:id`        | Get user by ID            |
| GET    | `/posts/:id`        | Get post by ID            |
| GET    | `/search?query=...` | Search/filter data        |

> **Note:** Update the endpoints list above based on your implementation details.

## Folder Structure

```
routes/     # API endpoints definitions
services/   # Handles business logic & API calls
utils/      # Utility/helper functions
```

## Error Handling

- Handles network issues (e.g., JSONPlaceholder is down)
- Deals with malformed JSON responses
- Returns descriptive error messages for API consumers

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

## License

[MIT](LICENSE)

---

**Made with ❤️ for the Global Trend Assignment**
