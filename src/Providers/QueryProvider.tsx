import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

const QueryProvider = ({ children }: PropsWithChildren) => {
  const [queryClientInstance] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 30,
            retry: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClientInstance}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
