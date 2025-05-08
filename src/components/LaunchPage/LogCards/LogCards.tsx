import { Box, LinearProgress, useMediaQuery } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import LinearLoader from "components/shared/Loader/LinearLoader";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useInView } from "react-intersection-observer";
import LogCard from "../LogCard/LogCard";
import NoCards from "./NoCards";
import { useInfiniteLogsQuery } from "hooks/QueryHooks/useLogsQuery";

const LogCards = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const parentRef = useRef<HTMLDivElement>(null);

  const {
    data: logs,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useInfiniteLogsQuery();

  const allLogs =
    useMemo(() => logs?.pages.flatMap((log) => log), [logs]) || [];

  const rowVirtualizer = useVirtualizer({
    count: allLogs.length,
    getScrollElement: useCallback(() => parentRef.current, []),
    estimateSize: useCallback(() => (isMobile ? 290 : 320), [isMobile]),
    gap: 8,
  });

  const { ref, inView } = useInView();
  useEffect(() => {
    if (isSuccess) {
      if (inView) fetchNextPage();
    }
  }, [fetchNextPage, inView, isSuccess]);

  if (isLoading) return <LinearLoader />;
  if (isError || !logs || allLogs.length === 0)
    return <NoCards onClick={() => refetch()} />;

  return (
    <Box id="scrollable-cards-box" ref={parentRef} sx={scrollStyles}>
      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          position: "relative",
        }}
      >
        <div
          style={{
            transform: `translateY(${
              rowVirtualizer.getVirtualItems()[0]?.start ?? 0
            }px)`,
          }}
        >
          {rowVirtualizer.getVirtualItems().map((log) => {
            const LogCardData = allLogs[log.index];
            return (
              <LogCard
                key={LogCardData.id}
                data-index={log.index}
                ref={rowVirtualizer.measureElement}
                log={LogCardData}
              />
            );
          })}
        </div>
      </div>
      <Box sx={{ height: "20px" }} ref={ref}>
        {isFetchingNextPage && <LinearProgress sx={{ m: "2px" }} />}
      </Box>
    </Box>
  );
};

export default LogCards;

const scrollStyles = {
  overflowY: "auto",
  overflowX: "hidden",
  minHeight: "100px",
  "::-webkit-scrollbar": {
    width: { xs: "5px", md: "8px" },
  },
  "::-webkit-scrollbar-track": {
    backgroundColor: "#106594",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#29aaff",
  },
};
