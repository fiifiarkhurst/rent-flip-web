import { QueryClient, QueryClientProvider } from "react-query";
import toast from "react-hot-toast";
import { FC } from "react";

export const ReactQueryConfigurationProvider: FC = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (e: any) => {
          if ("message" in e) {
            toast.error(e?.message);
          }
        },
      },
      queries: {
        refetchOnWindowFocus: true,
        retry: false,
        staleTime: 60 * 1000 * 5, /// 5 mins
        onError: (e: any) => {
          if ("message" in e) {
            toast.error(e?.message);
          }
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
