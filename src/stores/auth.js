import { defineStore } from 'pinia';
import axios from '@/service/axios';
import { useToast } from 'vue-toast-notification';

const toast = useToast({
  position: 'top',
});

const useAuthStore = defineStore('AuthStore', {
  state: () => ({
    user: null,
    isFetchingUser: null,
    hasFetchedUserPreviously: false,
  }),
  actions: {
    async fetchUserDetails() {
      try {
        this.isFetchingUser = true;
        const { data } = await axios.get('/user');

        if (data?.status === 'success') {
          this.user = data?.data;
          console.log(this.user, 'eee');
        } else {
          return toast.error(data?.message ?? 'An error occurred');
        }
      } catch (error) {
        toast.error(error?.response?.data?.message ?? 'An error occurred. Please try again later.');
      } finally {
        this.isFetchingUser = false;
        if (!this.hasFetchedUserPreviously) {
          this.hasFetchedUserPreviously = true;
        }
      }
    },
  },
});

export default useAuthStore;
