import { buildQuery } from "@/utils";

export const reservationQueries = (id?: number) => {
  const query = buildQuery({
    populate: "*",
    filters: {
      $or: [
        {
          ...(id && {
            requester: {
              id: {
                $eq: id,
              },
            },
          }),
          status: "pending",
        },
        {
          status: "approved",
        },
      ],
    },
    pagination: {
      page: 1,
      pageSize: 999,
    },
  });

  return { query };
};
