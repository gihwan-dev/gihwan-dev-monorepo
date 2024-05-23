import { create } from "zustand";

interface DragStoreState {
  isDragging: boolean;
  offsetX: number;
  offsetY: number;
  widgetSize: { width: number; height: number };

  resetDragState: () => void;
  setOffset: (offsetX: number, offsetY: number) => void;
  setIsDragging: (isDragging: boolean) => void;
  setWidgetSize: (width: number, height: number) => void;
}

export const useDragStore = create<DragStoreState>()((set) => ({
  isDragging: false,
  offsetX: 0,
  offsetY: 0,
  widgetName: "",
  widgetSize: {
    height: 0,
    width: 0,
  },

  resetDragState: () => {
    set((_) => ({ isDragging: false, offsetX: 0, offsetY: 0, widgetName: "" }));
  },
  setOffset: (offsetX, offsetY) => {
    set((_) => ({ offsetX, offsetY }));
  },
  setIsDragging: (isDragging) => {
    set((_) => ({ isDragging }));
  },
  setWidgetSize: (width, height) => {
    set((_) => ({ widgetSize: { width, height } }));
  },
}));
