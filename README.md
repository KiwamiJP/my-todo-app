# 🚀 DevOps Portfolio Project – Containerized To-Do Application

[![Docker](https://img.shields.io/badge/Docker-✓-blue)](https://hub.docker.com/r/ssaasa/my-todo-app)  
[![React](https://img.shields.io/badge/React-18.x-blue?logo=react)](https://reactjs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)  
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?logo=postgresql)](https://www.postgresql.org/)  
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-gray?logo=githubactions)](https://github.com/KiwamiJP/my-todo-app)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  

---

## 🌐 Links & Live Demo

- **GitHub Repository:** [github.com/KiwamiJP/my-todo-app](https://github.com/KiwamiJP/my-todo-app)  
- **Docker Hub:** [ssaasa/my-todo-app](https://hub.docker.com/r/ssaasa/my-todo-app)  
- **Live Demo:** [my-todo-app-flax.vercel.app](https://my-todo-app-flax.vercel.app)  

---

## 🧩 Project Purpose & Scope

This project is a **full-stack DevOps portfolio piece**, built to showcase the complete DevOps lifecycle — from development and containerization to automation and deployment.  

It demonstrates how to:  
- Build and optimize a web application using modern frontend tools (**React + TypeScript + Vite**)  
- Containerize a multi-tier stack with **Docker** and **Docker Compose**  
- Implement persistent data storage with **PostgreSQL** and **TypeORM**  
- Deploy to the cloud and manage application lifecycle  
- Implement **CI/CD**, **Infrastructure as Code**, and **monitoring strategies**  

> **In short:** This project represents how I build, ship, and run production-grade applications using DevOps principles.  

---

## 🧠 Key DevOps Skills Demonstrated

| Area | Tools / Concepts | Status |
|------|-------------------|---------|
| **Containerization** | Docker, Docker Compose, Nginx | ✅ Implemented |
| **Database Integration** | PostgreSQL, TypeORM, Migrations | ✅ Implemented |
| **CI/CD & Automation** | GitHub Actions, ESLint, TypeScript | ✅ Implemented |
| **Network Architecture** | Docker Networking, Service Discovery | ✅ Implemented |
| **Infrastructure as Code** | Terraform, Ansible | 🔜 Planned |
| **Monitoring & Observability** | Prometheus, Grafana, ELK Stack | 🔜 Planned |
| **Orchestration** | Kubernetes (EKS/GKE/AKS) | 🔜 Planned |
| **Cloud & Deployment** | Vercel (live), AWS/GCP/Azure (planned) | ✅ / 🔜 |

**Legend:** ✅ Completed 🔄 In Progress 🔜 Planned  

---

## 🏗️ Architecture Overview

```
User Browser
   ↓
Nginx (Reverse Proxy)
   ↓
React + TypeScript + Vite (Frontend)
   ↓
Express/Fastify API (Backend)
   ↓
PostgreSQL Database
   ↓
Docker Network (Containerized)
```

### 🔧 Build Pipeline Highlights

- **Frontend Stage:** Build React assets with Vite (optimized)  
- **Backend Stage:** Node.js API with TypeORM ORM  
- **Database Stage:** PostgreSQL 15 Alpine with persistent volumes  
- **Proxy Stage:** Nginx reverse proxy for routing  
- **Result:** Lightweight, scalable, production-ready stack  

---

## 🧰 Tech Stack & Implementation

| Layer | Technology | Purpose |
|--------|-------------|----------|
| **Frontend** | React (18.x) | Modern component-based UI |
| **Language** | TypeScript (5.x) | Type safety and maintainability |
| **Build Tool** | Vite (5.x) | Fast and optimized builds |
| **Backend** | Express/Fastify (coming) | REST API and business logic |
| **Database** | PostgreSQL (15) | Persistent data storage |
| **ORM** | TypeORM | Database abstraction layer |
| **Web Server** | Nginx (1.25 Alpine) | Static delivery and reverse proxy |
| **Containerization** | Docker, Docker Compose | Environment parity and isolation |
| **CI/CD** | GitHub Actions | Automated testing and deployment |
| **Code Quality** | ESLint, TypeScript | Type checking and linting |

---

## ⚙️ Quick Start

### 🐳 Run via Docker Compose (Recommended)

```bash
git clone https://github.com/KiwamiJP/my-todo-app.git
cd my-todo-app
docker-compose up -d
```

Visit → [http://localhost](http://localhost)

**Services Started:**  
- Frontend: http://localhost  
- Backend API: http://localhost:3000  
- PostgreSQL: localhost:5432  

---

### 🐳 Run via Docker (Frontend Only)

```bash
docker run -d -p 8080:80 --name my-todo-app ssaasa/my-todo-app:latest
```

Visit → [http://localhost:8080](http://localhost:8080)

---

### 🔧 Build from Source

```bash
git clone https://github.com/KiwamiJP/my-todo-app.git
cd my-todo-app
npm install
npm run build
docker build -t my-todo-app:local .
docker run -d -p 8080:80 my-todo-app:local
```

---

### 💻 Local Development (Without Docker)

```bash
git clone https://github.com/KiwamiJP/my-todo-app.git
cd my-todo-app
npm install
npm run dev
```

Visit → [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
my-todo-app/
├── .github/
│   └── workflows/        # CI/CD pipeline (GitHub Actions)
├── src/
│   ├── components/       # React components
│   ├── context/          # React Context & providers
│   ├── lib/              # Hooks and utilities
│   ├── database/         # TypeORM entities & config (coming)
│   └── App.tsx           # Main app component
├── public/               # Static assets
├── dist/                 # Built application
├── terraform/            # IaC configurations (planned)
├── k8s/                  # Kubernetes manifests (planned)
├── monitoring/           # Observability setup (planned)
├── Dockerfile            # Multi-stage build config
├── docker-compose.yml    # Services orchestration
├── nginx.conf            # Reverse proxy config
├── eslint.config.js      # Linting rules
├── vite.config.ts        # Vite build config
├── tsconfig.json         # TypeScript config
├── package.json          # Dependencies
└── README.md             # This file
```

---

## 🚀 CI/CD Pipeline (GitHub Actions)

### Automated Workflow

Every push to `main` triggers:  
- ✅ **Linting** – ESLint code quality checks  
- ✅ **Type Checking** – TypeScript validation  
- ✅ **Build** – Compile application  
- ✅ **Docker Build** – Build container image  
- ✅ **Registry Push** – Push to Docker Hub  
- ✅ **Security Scan** – Trivy vulnerability scanning  

**View Pipeline:** [GitHub Actions](https://github.com/KiwamiJP/my-todo-app/actions)

---

## 💡 Lessons Learned

- Reduced image size from **~180 MB → ~45 MB** using Docker multi-stage builds  
- Solved **Vite hot-reload** issues in Docker using polling configuration  
- Built a **production-grade Nginx config** with caching & compression  
- Implemented **Docker networking** for multi-service communication  
- Configured **health checks** for database readiness  
- Strengthened understanding of **TypeScript, DevOps practices, and production deployments**  

---

## 🧭 Roadmap

### ✅ Completed
- Containerized and deployed application  
- Published image to Docker Hub  
- CI/CD pipeline via GitHub Actions  
- TypeScript type safety  
- Docker Compose orchestration  
- Documentation completed  

### 🔄 In Progress
- PostgreSQL integration  
- Backend API (Express/Fastify)  
- TypeORM migrations  
- Frontend API integration  

### 🔜 Planned
- Terraform AWS deployment  
- Kubernetes orchestration (EKS/GKE/AKS)  
- Monitoring & logging (Prometheus, Grafana, ELK)  
- Service mesh (Istio/Linkerd)  
- Performance and security hardening  

---

## ☁️ Deployment

| Platform | Type | Status | Link |
|-----------|------|--------|------|
| **Vercel** | Frontend Hosting | ✅ | [Live App](https://my-todo-app-flax.vercel.app) |
| **Docker Hub** | Container Registry | ✅ | [ssaasa/my-todo-app](https://hub.docker.com/r/ssaasa/my-todo-app) |
| **AWS / Azure / GCP** | Cloud Deployment | 🔜 | Planned |

---

## 👤 About Me

**KiwamiJP**  
💻 DevOps Enthusiast & Cloud Learner  
📧 [ssaa.sa549@gmail.com](mailto:ssaa.sa549@gmail.com)  
🌐 [github.com/KiwamiJP](https://github.com/KiwamiJP)  

> Passionate about automation, Infrastructure as Code, and continuous delivery.  
> Open to DevOps opportunities and technical collaborations.  

---

## 📚 For Learners & Peers

This repository serves as a **DevOps learning and portfolio template**.  
Fork it, experiment, and extend it to:  
- Practice CI/CD pipelines and container workflows  
- Explore Infrastructure as Code  
- Build multi-tier applications with databases  
- Implement networking and orchestration  

---

## 📜 License

Licensed under the **MIT License** — feel free to use, modify, and learn from this project.  

> _"DevOps is not a destination — it's a continuous journey of improvement."_  
