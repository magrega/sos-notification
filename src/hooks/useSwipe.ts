import { useRef } from "react";

export const useSwipe = () => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  const minSwipeDistance = 100;
  const lockAfterX = 10;

  const box = document.getElementById("scrollable-cards-box");

  const cancelTouch = (e: TouchEvent) => e.cancelable && e.preventDefault();

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchEndY.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;

    if (!touchStartX.current || !touchEndX.current) return;

    const isRightMove = touchEndX.current > touchStartX.current + lockAfterX;
    const isLeftMove = touchEndX.current < touchStartX.current - lockAfterX;

    if (isRightMove || isLeftMove) {
      if (box)
        box.addEventListener("touchmove", cancelTouch, {
          passive: false,
        });
    }
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distanceX = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;
    if (box) box.removeEventListener("touchmove", cancelTouch);

    if (isRightSwipe) return "right";
    if (isLeftSwipe) return "left";
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
};
