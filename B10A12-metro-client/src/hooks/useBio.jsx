import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";

// Custom hook to fetch biodata by specific ID using TanStack Query
const useBio = (biodataId) => {
  const axiosSecure = useAxiosSecure(); // Get the axios instance with auth/secure headers

  // TanStack Query to fetch biodata data
  const { refetch, data: bio, isLoading, error } = useQuery({
    queryKey: ["bio", biodataId], 
    queryFn: async () => {
      if (!biodataId) return null; 
      const res = await axiosSecure.get(`/bioData/${biodataId}`);
      return res.data;
    },
    enabled: !!biodataId, 
  });

  return { bio, refetch, isLoading, error };
};

export default useBio;
