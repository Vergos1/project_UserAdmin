## README

## Structure

└── **src/**
├─── **assets/**
│ ├─── ordinary
│ ├─── simple
│ ├─── smart
│ └─── ui
├─── **components/**
│ ├─── ordinary
│ ├─── simple
│ ├─── smart
│ └─── ui
├─── **containers**
├─── **core/**
│ ├─── config
│ ├─── constants
│ ├─── hooks
│ ├─── models
│ ├─── schemes
│ ├─── services
│ ├─── store
│ ├─── theme
│ ├─── types
│ ├─── utils
│ └─── api.ts
├─── **pages**
├─── **routes**
├─── styles
├─── app.tsx
└─── index.tsx

## Component Classification

### Folder structure

└─── **src/**
├─── **components/**
│ ├─── ordinary
│ ├─── simple
│ ├─── smart
│ └─── ui
└─── **containers/**
└─── **pages/**

### Component Groups

- **Smart**
- **Ordinary**
- **Simple**
- **UI Components** (UI)
- **Containers** (Containers)
- **Pages**

The first four groups of components (Smart, Ordinary, Simple and UI) are stored in the `Components` folder.

### Description of groups

#### UI components

Components that replace native UI elements such as: `button`, `input`, `textarea`, `select`, etc.

- **Limitations**:
  - Cannot use local storage.
  - Cannot access global state.

#### Simple components (Simple)

Components that contain no logic and only render the interface.

- **Limitations**:

  - Cannot use local storage.
  - Cannot access global state.
  - Cannot use hooks except for React's built-in hooks (except `useState`).

- **Features**:
  - Can use UI components in their implementation.

#### Ordinary components (Ordinary)

Components that can include simple logic to display information.

- **Limitations**:

  - Cannot use local storage.
  - Cannot access global state.
  - Cannot use hooks other than built-in React hooks (exception is `useState`).

- **Features**:
  - Can use Simple and UI components in their implementation.

#### Smart components (Smart)

Components that can include more complex logic to display data.

- **Limitations**:

  - Can access local storage and global state (without modifying the latter).
  - May use all available hooks except those that interact with the network.

- **Features**:
  - Can use Ordinary, Simple and UI components in their implementation.

### Containers and pages

#### Containers

Containers are components that create the structure used to form pages. Containers can contain components from all of the above groups and interact with services or the network.

#### Pages

Pages are formed from containers and components from the `Components` folder. They, as well as containers, can interact with services and the network as needed.

## Core

The `Core` folder is the “core” of the application, containing everything needed to interact with the server, manage global state, the application theme, etc. This folder contains all the basic elements that provide the operation and structure of the application.

Translated with DeepL.com (free version)

### Core folder structure

- **Config**  
  Contains configuration files of the application. Here you can place data for interaction with the backend and customization of the application.

- **Constants**  
  This contains all constants used in the application, such as error and warning messages.

- **Hooks**  
  This folder contains custom hooks created for the specific needs of the application.

- **Models**  
  This folder holds data models that come from the backend.

- **Schemes**  
  Contains schemas for forms, tables, and other structures needed for the application.

- **Services**  
  Services responsible for interaction with the backend are stored here. Each service is a separate module for sending requests and processing responses.

- **Store**  
  This folder contains schemes of the global store. If MobX is used, this is where the storages are located, and for Redux - actions, redusers, etc.

- **Theme**  
  This folder holds the application themes if the `styled-components` library is used.

- **Types**  
  Contains auxiliary types and module declarations used to type components and data.

- **Utils**  
  Contains auxiliary functions that can be applied to hooks or components.
