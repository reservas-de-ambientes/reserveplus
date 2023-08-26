import { userApiModel } from "@/models";
import { PaginationProps } from "@/store";
import { buildQuery } from "@/utils";

export const userQueries = (
  pagination?: PaginationProps,
  filterData?: Pick<userApiModel, "type">
) => {
  const query = buildQuery({
    populate: "*",
    pagination: {
      page: pagination?.page || 1,
      pageSize: pagination?.pageSize || 8,
    },
  });

  const queryWithFilters = buildQuery({
    populate: "*",
    filters: {
      ...(filterData?.type && {
        type: {
          $eq: filterData.type,
        },
      }),
    },
    pagination: {
      page: pagination?.page || 1,
      pageSize: pagination?.pageSize || 8,
    },
  });

  return { query, queryWithFilters };
};
