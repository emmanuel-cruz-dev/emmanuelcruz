import { useState, useRef, useEffect, useMemo } from "react";
import { Certificate } from "../types/types";

export function useCertificates({
  certificates,
  initialLimit = 3,
}: {
  certificates: Certificate[];
  initialLimit?: number;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(initialLimit);
  const [shouldScroll, setShouldScroll] = useState(false);

  const reversedCertificates = useMemo(
    () => [...certificates].reverse(),
    [certificates]
  );

  const visibleCertificates = useMemo(
    () => reversedCertificates.slice(0, visibleCount),
    [reversedCertificates, visibleCount]
  );

  const isShowingAll = visibleCount >= reversedCertificates.length;

  useEffect(() => {
    if (shouldScroll && visibleCount === initialLimit) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setShouldScroll(false);
    }
  }, [visibleCount, initialLimit, shouldScroll]);

  const toggleCertificates = () => {
    if (isShowingAll) {
      setShouldScroll(true);
      setVisibleCount(initialLimit);
    } else {
      setVisibleCount(reversedCertificates.length);
    }
  };

  return {
    sectionRef,
    visibleCertificates,
    isShowingAll,
    toggleCertificates,
  };
}
