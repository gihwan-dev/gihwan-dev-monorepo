import { create } from "zustand";

interface UsePanelStoreState {
  areaLeft: number;
  areaRight: number;
  areaTop: number;
  areaBottom: number;

  gridStartLeft: number;
  gridStartTop: number;

  gridItemWidth: number;
  gridItemHeight: number;

  setArea: (area: {
    areaLeft: number;
    areaRight: number;
    areaTop: number;
    areaBottom: number;
  }) => void;

  setGridItemSize: (size: {
    gridItemWidth: number;
    gridItemHeight: number;
  }) => void;

  setGridOffset: (offset: {
    gridStartLeft: number;
    gridStartTop: number;
  }) => void;

  reset: () => void;
}

const initialState = {
  areaLeft: 0,
  areaRight: 0,
  areaTop: 0,
  areaBottom: 0,

  gridStartLeft: 0,
  gridStartTop: 0,

  gridItemWidth: 0,
  gridItemHeight: 0,
};

const usePanelStore = create<UsePanelStoreState>()((set) => ({
  ...initialState,

  setArea: (area) => {
    set((_) => ({ ...area }));
  },

  setGridItemSize: (size) => {
    set((_) => ({ ...size }));
  },

  setGridOffset: (offset) => {
    set((_) => ({ ...offset }));
  },

  reset: () => {
    set(initialState);
  },
}));

export default usePanelStore;
