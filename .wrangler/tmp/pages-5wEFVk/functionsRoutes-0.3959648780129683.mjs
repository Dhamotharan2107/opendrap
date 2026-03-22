import { onRequestGet as __api_contact_ts_onRequestGet } from "C:\\Users\\Administrator\\Downloads\\Design Nano SaaS Website\\functions\\api\\contact.ts"
import { onRequestPost as __api_contact_ts_onRequestPost } from "C:\\Users\\Administrator\\Downloads\\Design Nano SaaS Website\\functions\\api\\contact.ts"
import { onRequestGet as __api_test_ts_onRequestGet } from "C:\\Users\\Administrator\\Downloads\\Design Nano SaaS Website\\functions\\api\\test.ts"

export const routes = [
    {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_contact_ts_onRequestGet],
    },
  {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_contact_ts_onRequestPost],
    },
  {
      routePath: "/api/test",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_test_ts_onRequestGet],
    },
  ]