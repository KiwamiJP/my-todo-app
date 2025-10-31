# 🚀 DevOps Portfolio Project – Containerized To-Do Application  
[![Docker](https://img.shields.io/badge/Docker-✓-blue)](https://hub.docker.com/r/ssaasa/my-todo-app)  
[![React](https://img.shields.io/badge/React-18.x-blue?logo=react)](https://reactjs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)  
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-gray?logo=githubactions)](https://github.com/KiwamiJP/my-todo-app)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  

---

## 🌐 Links & Live Demo  
- **GitHub Repository**: [github.com/KiwamiJP/my-todo-app](https://github.com/KiwamiJP/my-todo-app)  
- **Docker Hub**: [ssaasa/my-todo-app](https://hub.docker.com/r/ssaasa/my-todo-app)  
- **Live Demo**: [my-todo-app-flax.vercel.app](https://my-todo-app-flax.vercel.app)  

---

## 🧩 Project Purpose & Scope  
This project is a **full-stack DevOps portfolio piece**, built to showcase the complete DevOps lifecycle — from development and containerization to automation and deployment.  

It demonstrates how to:  
- Build and optimize a web application using modern frontend tools (React + TypeScript + Vite)  
- Containerize the entire stack with efficient Docker multi-stage builds  
- Deploy to the cloud and manage application lifecycle  
- Implement CI/CD, Infrastructure as Code, and monitoring strategies  

> **In short:** This project represents how I build, ship, and run production-grade applications using DevOps principles.

---

## 🧠 Key DevOps Skills Demonstrated  
| Area | Tools / Concepts | Current Status |
|------|-------------------|--------------|
| **Containerization** | Docker, Docker Compose, Nginx | ✅ Implemented |
| **CI/CD & Automation** | GitHub Actions (coming soon) | 🔄 In Progress |
| **Infrastructure as Code** | Terraform, Ansible | 🔜 Planned |
| **Monitoring & Observability** | Prometheus, Grafana, ELK Stack | 🔜 Planned |
| **Cloud & Deployment** | Vercel (live), AWS/GCP/Azure (planned) | ✅ / 🔜 |

**Legend:** ✅ Completed 🔄 In Progress 🔜 Planned

---

## 🛠 Architecture Overview  
```
User Browser → Nginx (Reverse Proxy) → React + TypeScript + Vite App
              Containerized via Docker (multi-stage build)
```
### 🔧 Build Pipeline Highlights
- **Stage 1:** Build assets with Node.js (18 Alpine)  
- **Stage 2:** Serve optimized static assets with Nginx (1.25 Alpine)  
- **Result:** Lightweight, performant, and production-ready image (~45 MB)

---

## 🧰 Tech Stack & Implementation  
| Layer | Technology | Purpose |
|--------|-------------|----------|
| **Frontend** | React (18.x) | Modern component-based UI |
| **Language** | TypeScript (5.x) | Type safety and maintainability |
| **Build Tool** | Vite (5.x) | Fast and optimized builds |
| **Web Server** | Nginx (1.25 Alpine) | Static delivery and reverse proxy |
| **Containerization** | Docker, Docker Compose | Environment parity and isolation |
| **CI/CD (Planned)** | GitHub Actions | Pipeline automation |
| **IaC (Planned)** | Terraform | Declarative infrastructure provisioning |

---

## ⚙️ Quick Start (Local / Docker)  

### 🐳 Run via Docker  
```bash
docker run -d -p 8080:80 --name my-todo-app ssaasa/my-todo-app:latest
```
Visit → [http://localhost:8080](http://localhost:8080)

### 🧩 Run via Docker Compose  
```bash
git clone https://github.com/KiwamiJP/my-todo-app.git
cd my-todo-app
docker-compose up -d
```

### 🔧 Build from Source  
```bash
git clone https://github.com/KiwamiJP/my-todo-app.git
cd my-todo-app
docker build -t my-todo-app:local .
docker run -d -p 8080:80 my-todo-app:local
```

---

## 📁 Project Structure  
```
my-todo-app/
├── .github/workflows/     # CI/CD configs (coming soon)
├── src/                   # React source code
├── public/                # Static assets
├── terraform/             # IaC configurations (planned)
├── k8s/                   # Kubernetes manifests (planned)
├── monitoring/            # Observability setup (planned)
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── vite.config.ts
└── README.md
```

---

## 💡 Lessons Learned & Insights  
- Reduced image size from **~180 MB → ~45 MB** using Docker multi-stage builds  
- Resolved **Vite hot-reload issues** in Docker using polling configuration  
- Built a **production-grade Nginx config** with caching and compression  
- Strengthened understanding of **container networking, security, and lifecycle management**  

---

## 🧭 Roadmap & Next Steps  

### ✅ Completed  
- Containerized and deployed application  
- Published image to Docker Hub  
- Created detailed documentation  

### 🔄 In Progress  
- GitHub Actions CI/CD pipeline  
- Terraform AWS deployment  

### 🔜 Planned  
- Kubernetes orchestration (EKS / GKE / AKS)  
- Monitoring and logging (Prometheus, Grafana, ELK)  
- Automated testing and linting  
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
📧 ssaa.sa549@gmail.com  
🌐 [github.com/KiwamiJP](https://github.com/KiwamiJP)  

> Passionate about automation, Infrastructure as Code, and continuous delivery.  
> Open to DevOps opportunities and technical collaborations.

---

## 📚 For Learners & Peers  
This repository serves as a **DevOps learning and portfolio template**.  
Fork it, experiment, and extend it to:  
- Practice CI/CD pipelines and container workflows  
- Explore Infrastructure as Code  
- Build your own DevOps-ready application  

---

## 📜 License  
Licensed under the **MIT License** — feel free to use, modify, and learn from this project.

> _“DevOps is not a destination — it’s a continuous journey of improvement.”_
