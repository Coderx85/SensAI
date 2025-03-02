# SensAI

SensAI is a web application designed to help users generate cover letters, manage their profiles, and prepare for interviews. The application leverages various modern web technologies and libraries to provide a seamless user experience.

## Features

- Cover letter generation
- Profile management
- Interview preparation
- Responsive design
- User authentication with Clerk
- Integration with Prisma for database management

## Installation

1. Clone the repository:

  ```sh
  git clone https://github.com/your-username/sensei.git
  cd sensei
  ```

2. Install dependencies:
  ```sh
  pnpm install
  ```

3. Generate Prisma client:
  ```sh
  pnpm prisma generate
  ```

4. Set up environment variables:

Create a .env file in the root directory and add the necessary environment variables. Refer to the Environment Variables section for more details.

## Usage
Start the development server:

Open your browser and navigate to http://localhost:3000.

## Project Structure
```
.env
.gitignore
.next/
components.json
jsconfig.json
next-env.d.ts
next.config.ts
package.json
pnpm-lock.yaml
postcss.config.mjs
prisma/
public/
README.md
src/
tailwind.config.ts
```

## Environment Variables
The following environment variables are required to run the application:

- **DATABASE_URL**: The database connection URL.
- **NEXT_PUBLIC_CLERK_FRONTEND_API**: Clerk frontend API key.
- **CLERK_API_KEY**: Clerk API key.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.