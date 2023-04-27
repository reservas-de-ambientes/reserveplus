import { api } from "@/services";

export async function getAmbiences(params?: any) {
  try {
    const response = await api.get(`/ambiences?${params}`);

    return response.data;
  } catch (e: any) {
    throw new Error(`API error:${e?.message}`);
  }
}
