# Members Only
A message board that allows anonymous posting: members can view the author’s identity, while non-members can only read the story and wonder who wrote it.

## Overview

This is an anonymous message board where users can share posts without revealing their identity to the public. Registered members can see the author of each post, while non-members can only view the content, leaving the author anonymous.

## Features

* Sign up and log in
* Create anonymous posts
* Read posts as a member or public visitor
* Edit or delete your own posts
* Basic user roles (member, admin)

## Tech Stack

* Pug (template engine)
* Express
* PostgreSQL

## Getting Started

### Prerequisites

* Node.js
* Package manager (npm)
* Database (PostgreSQL)

### Installation

```bash
# clone the repository
git clone https://github.com/LydosSky/members-only.git
cd members-only

# install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env

DATABASE_USER=<fill>
DATABASE_PASSWORD=<fill>
DATABASE_HOST=<fill>
DATABASE_PORT=<fiil>
DATABASE_DB=<fiil>

NODE_ENV=<fiil>

```

### Run Locally

```bash
npm start
```

The application will be available at `http://localhost:3000` (or configured port).

## Usage

Once the app is running, users can sign up, log in, and start posting anonymous messages.
