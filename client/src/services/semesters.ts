import { api } from "@/services";

export async function getSemesters(params?: any) {
  try {
    const response = await api.get(`/semesters?${params}`);

    return response.data;
  } catch (e: any) {
    throw new Error(`API error:${e?.message}`);
  }
}
