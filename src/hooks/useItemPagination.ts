import { useState, useRef, useEffect, useMemo } from "react";

export function useItemPagination<T>({
  items,
  initialLimit = 3,
  reverse = false,
}: {
  items: T[];
  initialLimit?: number;
  reverse?: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(initialLimit);
  const [shouldScroll, setShouldScroll] = useState(false);

  const processedItems = useMemo(
    () => (reverse ? [...items].reverse() : items),
    [items, reverse]
  );

  const visibleItems = useMemo(
    () => processedItems.slice(0, visibleCount),
    [processedItems, visibleCount]
  );

  const isShowingAll = visibleCount >= processedItems.length;

  useEffect(() => {
    if (shouldScroll && visibleCount === initialLimit) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setShouldScroll(false);
    }
  }, [visibleCount, initialLimit, shouldScroll]);

  const toggleItems = () => {
    if (isShowingAll) {
      setShouldScroll(true);
      setVisibleCount(initialLimit);
    } else {
      setVisibleCount(processedItems.length);
    }
  };

  return {
    sectionRef,
    visibleItems,
    isShowingAll,
    toggleItems,
    hasMore: processedItems.length > initialLimit,
  };
}
