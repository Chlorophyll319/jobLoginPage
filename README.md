# README

一個使用 Vue 3 和現代化網頁技術打造的響應式網站。

![image](public\README\image.png)

## 🚀 專案特色

- **現代化技術棧**：使用 Vue 3、Vite 和 Tailwind CSS 建構
- **檔案式路由**：基於頁面元件自動生成路由
- **自動匯入**：Vue API 和元件無需手動引入
- **佈局系統**：可重複使用的佈局模板，保持設計一致性
- **狀態管理**：使用 Pinia 進行集中式狀態管理，支援資料持久化
- **表單驗證**：整合 VeeValidate + Yup 實現強大的表單驗證
- **響應式設計**：採用 Mobile-first 設計方法配合 Tailwind CSS
- **效能優化**：Vite 提供極速的開發體驗和 HMR
- **程式碼品質**：ESLint + Prettier 確保程式碼風格一致
- **CI/CD**：透過 GitHub Actions 自動部署至 GitHub Pages

## 📋 目錄

- [技術棧](#-技術棧)
- [專案結構](#-專案結構)
- [快速開始](#-快速開始)
- [開發指南](#-開發指南)
- [建置與部署](#-建置與部署)
- [頁面與路由](#-頁面與路由)
- [元件說明](#-元件說明)
- [配置說明](#-配置說明)
- [貢獻指南](#-貢獻指南)

## 🛠 技術棧

### 核心框架

- **Vue 3** (^3.5.22) - 漸進式 JavaScript 框架
- **Vite** (^7.1.7) - 次世代前端建置工具
- **Vue Router** (^4.6.2) - Vue.js 官方路由管理器

### UI 與樣式

- **Tailwind CSS** (^4.1.14) - Utility-first CSS 框架
- **@tailwindcss/vite** (^4.1.14) - Tailwind CSS Vite 整合

### 狀態管理

- **Pinia** (^3.0.3) - Vue 3 官方狀態管理庫
- **pinia-plugin-persistedstate** (^4.5.0) - Pinia 資料持久化插件

### 表單處理

- **VeeValidate** (^4.15.1) - Vue 3 表單驗證庫
- **Yup** (^1.7.1) - Schema 驗證工具

### HTTP 請求

- **Axios** (^1.12.2) - Promise-based HTTP 客戶端

### 開發工具

- **unplugin-vue-router** (^0.16.0) - 檔案式路由自動生成
- **unplugin-auto-import** (^20.2.0) - API 自動匯入
- **unplugin-vue-components** (^29.1.0) - 元件自動匯入
- **vite-plugin-vue-layouts-next** (^1.0.0) - 佈局系統
- **ESLint** + **Prettier** - 程式碼品質與格式化工具

## 📁 專案結構

```
salad/
├── src/
│   ├── main.js                 # 應用程式進入點
│   ├── App.vue                 # 根元件
│   ├── style.css               # 全域樣式（Tailwind 主題設定）
│   ├── pages/                  # 自動路由頁面
│   │   ├── index.vue           # 首頁 (/)
│   │   └── login.vue           # 登入頁 (/login)
│   ├── components/             # 可重複使用的元件
│   │   ├── LoginForm.vue       # 登入表單元件
│   │   └── MemberCard.vue      # 服務卡片元件
│   ├── layouts/                # 佈局模板
│   │   └── default.vue         # 預設佈局（導覽列 + 內容）
│   ├── router/                 # 路由配置
│   │   └── index.js            # 集中式路由設定
│   ├── stores/                 # Pinia 狀態管理
│   │   └── index.js            # Store 配置
│   └── assets/                 # 靜態資源（圖片、字型）
├── types/                      # TypeScript 型別定義
├── public/                     # 公開靜態檔案
├── .github/workflows/          # GitHub Actions CI/CD
├── vite.config.js              # Vite 配置檔
├── eslint.config.js            # ESLint 配置檔
├── .prettierrc.json            # Prettier 配置檔
└── package.json                # 專案相依套件與腳本
```
