import { create } from "zustand";

interface DragStoreState {
  offsetX: number;
  offsetY: number;
  widgetSize: { width: number; height: number };

  resetDragState: () => void;
  setOffset: (offsetX: number, offsetY: number) => void;
  setWidgetSize: (width: number, height: number) => void;
}

export const useDragStore = create<DragStoreState>()((set) => ({
  offsetX: 0,
  offsetY: 0,
  widgetName: "",
  widgetSize: {
    height: 0,
    width: 0,
  },

  resetDragState: () => {
    set((_) => ({
      offsetX: 0,
      offsetY: 0,
      widgetName: "",
      widgetSize: { width: 0, height: 0 },
    }));
  },
  setOffset: (offsetX, offsetY) => {
    set((_) => ({ offsetX, offsetY }));
  },

  setWidgetSize: (width, height) => {
    set((_) => ({ widgetSize: { width, height } }));
  },
}));
