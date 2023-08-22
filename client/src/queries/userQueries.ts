import { PaginationProps } from "@/store";
import { buildQuery } from "@/utils";

export const userQueries = (pagination?: PaginationProps) => {
  const query = buildQuery({
    populate: "*",
    pagination: {
      page: pagination?.page || 1,
      pageSize: pagination?.pageSize || 8,
    },
  });

  return { query };
};
