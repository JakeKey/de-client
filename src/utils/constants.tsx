import { MealCategoriesType } from "utils/api/types";

export const mealCategories: MealCategoriesType[] = [
  "I breakfast",
  "II breakfast",
  "lunch",
  "snack",
  "I dinner",
  "II dinner"
];

export const breakpoints = {
  md: { width: "840px", height: "700px" },
  sm: { width: "600px", height: "600px" }
};

export type NotificationType = "SUCCESS" | "ERROR";

const SUCCESS: NotificationType = "SUCCESS";
const ERROR: NotificationType = "ERROR";

export const notificationTypes = {
  success: SUCCESS,
  error: ERROR
};

export interface ErrorType {
  code: string;
  message: string;
}
