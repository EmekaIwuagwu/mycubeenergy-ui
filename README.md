# MYCUBEENERGY

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Setup](#setup)
2. [Contributing](#-contributing)
   - [Contribution Guidelines](#contribution-guidelines)
   - [Commit Cheat Sheet](#_commit-cheat-sheet)

## Getting Started

### Prerequisites

To run this project, you need the following installed:
- [Node 18.19](https://nodejs.org/) or later
- [NPM](https://www.npmjs.com/)

### Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/TRIPLE-ADE/mycubeenergy.git
    ```
   
2. **Install project dependencies:**
    ```bash
    cd mycubeenergy
    npm install
    ```

3. **Run the development server:**
    ```bash
    npm run dev
    # or
    pnpm dev
    # or
    yarn dev
    # or
    bun dev
    ```

4. **Open your browser to view the result:**
    - [http://localhost:5173/](http://localhost:5173/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### Contribution Guidelines

1. **Clone the repository:**
    ```bash
    git clone https://github.com/TRIPLE-ADE/mycubeenergy.git
    ```

2. **Fetch the latest `main` branch from the remote repository (since it's not the default branch):**
    ```bash
    git fetch origin main
    ```

3. **Create a new branch from the `main` branch:**
    ```bash
    git checkout -b Feat/{feature-name} origin/main
    ```

4. **Ensure your branch is up to date with the latest `main` branch:**
    ```bash
    git pull origin main
    ```

5. **Make your changes, then add them:**
    ```bash
    git add .
    ```

6. **Commit your changes with a descriptive message:**
    ```bash
    git commit -m "your commit message"
    ```

7. **Ensure there are no conflicts:**
    ```bash
    git pull origin main
    ```

8. **Push your changes to the new branch:**
    ```bash
    git push -u origin Feat/{feature-name}
    ```

9. **Fetch the latest changes from the `main` branch to stay updated:**
    ```bash
    git fetch origin main
    ```

10. **Rebase your branch with the latest `main` branch:**
    ```bash
    git rebase origin/main
    ```

11. **Create a pull request to the `main`:**
    - Provide a detailed description of your pull request and reference any relevant issues.


### _Commit Cheat Sheet_

| Type     | Description                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------- |
| feat     | A new feature you're adding                                                                                              |
| fix      | A bug fix                                                                                                   |
| docs     | Documentation only changes                                                                                  |
| style    | Features and updates relating to styling                                                                   |
| refactor | Code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Code change that improves performance                                                                     |
| test     | Adding missing tests or correcting existing tests                                                           |
| build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Other changes that don't modify source or test files                                                    |
| revert   | Reverts a previous commit                                                                                   |

#### Sample Commit Messages
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.