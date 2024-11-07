import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import TodosContextProvider from "./context/TodosContextProvider.tsx";
import {KindeProvider} from "@kinde-oss/kinde-auth-react";
createRoot(document.getElementById('root')!).render(
  <StrictMode>


      <KindeProvider
          clientId="20fd9f6b251c4ec49c2a6afd2d88f730"
          domain="https://kiwamijp.kinde.com"
          redirectUri={process.env.Node === "production" ?
              "https://my-todo-app-flax.vercel.app"
              :"http://localhost:5173"}
          logoutUri={process.env.Node === "production" ?
              "https://my-todo-app-flax.vercel.app"
              :"http://localhost:5173"}
      >
          <TodosContextProvider>
              <App />
          </TodosContextProvider>
      </KindeProvider>
      );

  </StrictMode>,
)
