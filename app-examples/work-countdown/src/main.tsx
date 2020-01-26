import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import dayjs from "dayjs";
import zhCN from "antd/locale/zh_CN";
import duration from 'dayjs/plugin/duration';

import "antd/dist/reset.css";
import "./index.scss";

import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");
dayjs.extend(duration);

import App from "./App.tsx";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </StrictMode>
);
