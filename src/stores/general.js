import { defineStore } from 'pinia';

const useGeneralStore = defineStore('GeneralStore', {
  state: () => ({
    isSidebarOpened: true,
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarOpened = !this.isSidebarOpened;
    },
  },
});

export default useGeneralStore;
