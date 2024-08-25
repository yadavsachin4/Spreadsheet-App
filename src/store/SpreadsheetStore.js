import { create } from "zustand";

const useSpreadsheetStore = create((set) => ({
  data: {},

  updateCell: (row, col, value) => set((state) => {
    const key = `${row}-${col}`;
    const newData = { ...state.data, [key]: value };
    return { data: newData };
  }),

  getCellData: (row, col) => {
    return (state) => state.data[`${row}-${col}`] || '';
  },

  initializeData: () => set((state) => {
    const initialData = {};
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        initialData[`${i}-${j}`] = `Row ${i}, Col ${j}`;
      }
    }
    return { data: initialData };
  }),
}));

export default useSpreadsheetStore;
