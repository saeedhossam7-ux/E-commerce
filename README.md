# 🛒 FreshCart — Modern E-Commerce Web Application

**FreshCart** is a responsive, full-featured e-commerce web application built with **Next.js (App Router)** and **TypeScript**. Designed with clean architecture and modern UI/UX practices, it delivers fast browsing, real-time URL-synchronized search, bilingual support with dynamic layout direction, and full theme customization.

> 🔗 **Live Demo:** [https://e-commerce-orpin-nine-95.vercel.app/]

---

## ✨ Key Features

- **Server-First Architecture:** Combines Next.js Server Components and Server Actions for fast data fetching and secure form submissions with interactive Client Components.
- **URL-Synchronized Search:** Real-time product filtering synced with URL query parameters (`?search=...`) for shareable and persistent search states, complete with custom Light/Dark Empty States.
- **Dark & Light Mode:** Polished, accessible color schemes across all pages and components powered by **Tailwind CSS**.
- **Authentication & Schema Validation:** Type-safe Login and Signup flows built with **React Hook Form**, **Zod**, **Axios**, and Next.js Server Actions.
- **Cart & Wishlist Management:** Centralized client state management using **Redux Toolkit** for smooth shopping cart and wishlist interactions.
- **Interactive User Feedback:** Instant toast notifications and confirmation dialogs powered by **React-Toastify** and **SweetAlert**.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework & Language** | Next.js (App Router), TypeScript |
| **Styling & Icons** | Tailwind CSS, Font Awesome |
| **State Management** | Redux Toolkit |
| **Data Fetching** | Axios |
| **Forms & Validation** | React Hook Form, Zod |
| **Alerts & Notifications** | React-Toastify, SweetAlert |

---

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router pages, layouts & routes
├── components/           # Shared UI components (Navbar, Footer, etc.)
├── features/             # Domain-based modules (Products, Auth, Cart, Wishlist)
├── store/                # Redux Toolkit store & slices
├── types/                # Shared TypeScript interfaces & API response types
└── utils/                # Helper functions & API configurations