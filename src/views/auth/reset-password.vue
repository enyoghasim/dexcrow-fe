<template>
  <div class="signup-page">
    <div class="form-wrapper w-full">
      <h1 class="font-poppins font-semibold md:text-3xl text-xl">Reset password</h1>
      <p class="text-textGray md:text-base text-sm mt-2">Input your new password.</p>

      <form @submit.prevent="submitForm" class="w-full mx-auto md:mt-10 mt-5">
        <div class="flex flex-col gap-5">
          <div class="">
            <label> Password </label>
            <div>
              <input v-model="formData.password" placeholder="Password" required type="password" />
            </div>
          </div>
          <div class="">
            <label> Repeat Password </label>
            <div>
              <input
                v-model="formData.confirmPassword"
                placeholder="Repeat Password"
                required
                type="password"
              />
            </div>
          </div>

          <div class="text-right">
            <router-link
              :to="{
                name: 'signin',
              }"
              class="text-primary text-right font-inter md:text-base text-sm"
              >Back to login</router-link
            >
          </div>
          <div>
            <button>Update password</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import axios from '@/service/axios';
import isHexadecimal from 'validator/lib/isHexadecimal';
import { isEmpty } from '@/utils/helpers';
import { useRoute } from 'vue-router';

const toast = useToast({
  position: 'top',
});

const route = useRoute();

const formData = reactive({
  password: '',
  confirmPassword: '',
});
const isSubmiting = ref(false);

const submitForm = async () => {
  console.log(route);
  try {
    if (isEmpty(formData.password, formData.confirmPassword)) {
      return toast.info('All fields are required');
    }

    if (formData.password !== formData.confirmPassword) {
      return toast.info('Passwords dont match');
    }

    if (formData.password.length < 6) {
      return toast.info('Password must be a minimum of 6 characters');
    }

    const { selector, token } = route.params;

    if (!isHexadecimal(selector) || !isHexadecimal(token)) {
      return toast.info('Invalid token');
    }
    const { data } = await axios.post(`/auth/reset-password/${selector}/${token}`, formData);

    if (data?.status !== 'success') {
      return toast.error(data?.message ?? 'An error occurred. Please try again later.');
    }

    toast.success(data?.message ?? 'Password changed successfully you can login');
    window.location = '/auth/signin';
  } catch (error) {
    toast.error(error?.response?.data?.message ?? 'An error occurred. Please try again later.');
  } finally {
    isSubmiting.value = false;
  }
};
</script>
