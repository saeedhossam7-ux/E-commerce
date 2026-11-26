"use server";

import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { formData, SignupSchema } from "../schemas/Signup.schema";

export default async function signupAction(values: formData) {
  const validation = SignupSchema.safeParse(values)
  if (!validation.success) {
    const errors: Record<string, string> = {}
    if (validation.error) {
      validation.error.issues.forEach((issue) => {
        const key = issue.path[0] as string
        const message = issue.message
        if (!errors[key]) {
          errors[key] = message
        }
      })
      return {
        success: false,
        message: 'validation errors',
        errors
      }
    }
  }
  const { terms, ...Values } = values
  try {
    const options: AxiosRequestConfig = {
      url: 'https://ecommerce.routemisr.com/api/v1/auth/signup',
      method: 'POST',
      data: Values
    }
    const { data } = await axios.request(options)

    if (data.message === "success") {
      return {
        success: true,
        message: 'Account created successfully',
        data
      }
    }
    return {
      success: false,
      message: data.message || "Signup failed",
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.message
      if (errorMessage === 'Account Already Exists') {
        return {
          success: false,
          message: 'Account Already Exists',
          errors: { email: "email already exists" }
        }
      }
    }
  }
}
