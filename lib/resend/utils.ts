import { envs } from "@/lib/envs";
import { Resend } from "resend";

export const resendConfig = new Resend(envs.RESEND_API_KEY);
