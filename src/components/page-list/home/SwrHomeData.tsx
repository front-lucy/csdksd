import useSwr from "swr";
export function SwrHomeCategoryMove() {
  const { data = -1, mutate } = useSwr("/SwrHomeCategoryMove");
  return {
    SwrHomeCategoryMoveValue: data,
    setSwrHomeCategoryMove: mutate,
  };
}
export function SwrHomeCategoryObserver() {
  const { data = 0, mutate } = useSwr<number>("/SwrHomeCategoryObserver");
  return {
    SwrHomeCategoryObserverValue: data,
    setSwrHomeCategoryObserver: mutate,
  };
}
