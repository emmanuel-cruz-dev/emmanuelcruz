import { CourseTitle } from "../types/types";

// LastModifiedDate.tsx
export const LAST_UPDATE_TEXT_ES = "Última actualización";
export const LAST_UPDATE_TEXT_EN = "Last update";

// EmailCopyButton.tsx
export const EMAIL = "emmanuelgerr@gmail.com";

// Toast.tsx
export const SUCCESS = "success";
export const ICON_COLOR_SUCCESS = "#236d37";
export const ICON_COLOR_ERROR = "#731f23";
export const TOAST_COLOR_SUCCESS = "#3ab65c";
export const TOAST_COLOR_ERROR = "#bf1d1d";

// useTheme.ts
export const THEME_DARK = "dark";
export const THEME_LIGHT = "light";
export const LOCAL_STORAGE_KEY = "theme";

// useToast.ts
export const PROGRESS_INTERVAL_MS = 100;
export const TOAST_DURATION_MS = 5000;
export const SLIDE_OUT_DURATION_MS = 500;
export const PROGRESS_DECREMENT =
  100 / (TOAST_DURATION_MS / PROGRESS_INTERVAL_MS);

// NewCoursesCard.tsx
export const backgroundColor: Record<CourseTitle, string> = {
  "Academia ForIT": "bg-[#110b25]",
  "Alura Latam": "bg-[#061d3c]",
  "Talento Tech": "bg-[#153242]",
};
