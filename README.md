# 個人履歷網站 (Personal CV Website)

一個使用 React + Vite 建構的響應式個人履歷網站，支援 Docker 容器化部署至 Google Cloud Run。

## 🛠️ 技術架構

### 前端框架
| 技術 | 版本 | 說明 |
|------|------|------|
| **React** | 19.2.0 | 使用者介面框架 |
| **Vite** | 7.2.4 | 新一代前端建構工具，提供快速的 HMR（熱模組替換） |
| **Vanilla CSS** | - | 原生 CSS 樣式設計 |

### 開發工具
| 工具 | 版本 | 說明 |
|------|------|------|
| **ESLint** | 9.39.1 | 程式碼品質檢查 |
| **@vitejs/plugin-react** | 5.1.1 | Vite React 插件，支援 Fast Refresh |

### 部署環境
| 技術 | 說明 |
|------|------|
| **Docker** | 多階段建構（Multi-stage Build） |
| **Nginx** | 靜態檔案伺服器（Alpine 版本） |
| **Google Cloud Run** | 容器化部署平台 |

---

## 📁 專案結構

```
jintin-cv/
├── public/                   # 靜態資源
├── src/
│   ├── assets/              # 圖片等資源檔
│   ├── components/          # 共用元件
│   │   ├── Navbar.jsx       # 導覽列
│   │   └── WaveDivider.jsx  # 波浪分隔線動畫
│   ├── sections/            # 頁面區塊
│   │   ├── AboutMe.jsx      # 個人自我介紹
│   │   ├── Hobbies.jsx      # 興趣愛好
│   │   ├── Experience.jsx   # 過去經歷
│   │   ├── Future.jsx       # 未來期待
│   │   └── Plans.jsx        # 發展計劃
│   ├── App.jsx              # 主應用程式
│   ├── App.css              # 主樣式（桌面版）
│   ├── Mobile.css           # 響應式樣式（行動裝置）
│   ├── index.css            # 全域樣式
│   └── main.jsx             # 應用程式進入點
├── Dockerfile               # Docker 建構設定
├── nginx.conf               # Nginx 伺服器設定
├── vite.config.js           # Vite 設定
└── package.json             # 專案依賴設定
```

---

## 🚀 快速開始

### 環境需求
- Node.js 20+
- npm 或 yarn

### 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 程式碼檢查
npm run lint

# 建構生產版本
npm run build

# 預覽生產版本
npm run preview
```

---

## 🐳 Docker 部署

### 建構映像檔

```bash
docker build -t jintin-cv .
```

### 本地執行容器

```bash
docker run -p 8080:8080 jintin-cv
```

瀏覽器開啟 `http://localhost:8080` 即可查看網站。

### 部署至 Google Cloud Run

```bash
# 建構並推送到 Container Registry
gcloud builds submit --tag gcr.io/[PROJECT_ID]/jintin-cv

# 部署到 Cloud Run
gcloud run deploy jintin-cv \
  --image gcr.io/[PROJECT_ID]/jintin-cv \
  --platform managed \
  --region asia-east1 \
  --allow-unauthenticated
```

---

## ⚙️ Nginx 設定說明

本專案使用 Nginx 作為靜態檔案伺服器，主要設定包含：

- **SPA 路由支援**：所有路由導向 `index.html`
- **靜態資源快取**：1 年快取期限，提升載入速度
- **安全標頭**：X-Frame-Options、X-Content-Type-Options
- **Gzip 壓縮**：減少傳輸資料量

---

## 📱 響應式設計

網站支援多種裝置尺寸：
- **桌面版**：完整功能與動畫效果
- **平板/手機**：透過 `Mobile.css` 調整版面配置

---

## 📄 授權

本專案僅供個人使用。
