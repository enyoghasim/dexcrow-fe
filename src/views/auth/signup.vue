<template>
  <div class="signup-page">
    <div class="form-wrapper w-full">
      <h1 class="font-poppins font-semibold md:text-3xl text-xl">let's create an account</h1>
      <p class="text-textGray md:text-base text-sm mt-2">
        Create an account to keep track of your deals, and balances.<br />
        Once your account has been created then don’t forget to verify your account through mail.
      </p>

      <form @submit.prevent="submitForm" class="w-full mx-auto md:mt-10 mt-5">
        <div class="flex flex-col gap-5">
          <div class="form-item">
            <label> Name </label>
            <div class="flex md:flex-row gap-3 w-full">
              <div class="w-full">
                <input v-model="formData.firstname" placeholder="Firstname" required type="text" />
              </div>
              <div class="w-full">
                <input v-model="formData.lastname" placeholder="Lastname" required type="text" />
              </div>
            </div>
          </div>
          <div class="">
            <label> Email </label>
            <div>
              <input v-model="formData.email" placeholder="Email" required type="email" />
            </div>
          </div>
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
                v-model="formData.password2"
                placeholder="Repeat Password"
                required
                type="password"
              />
            </div>
          </div>
          <div>
            <button type="submit" :disabled="isSubmiting">
              <span v-if="!isSubmiting"> Signup </span>
              <div class="loader" v-else></div>
            </button>
          </div>
          <div>
            <p class="text-center text-textGray font-inter md:text-base text-sm">
              Already have an account?
              <router-link
                :to="{
                  name: 'signin',
                }"
                class="text-primary"
                >Signin</router-link
              >
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import { isEmpty } from '@/utils/helpers';
import isEmail from 'validator/lib/isEmail';
import axios from '@/service/axios';
import { useRouter } from 'vue-router';

const toast = useToast({
  position: 'top',
});
const router = useRouter();

const isSubmiting = ref(false);

const formData = reactive({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  password2: '',
});
const submitForm = async () => {
  try {
    if (
      isEmpty(
        formData?.firstname,
        formData?.lastname,
        formData?.email,
        formData?.password,
        formData?.password2,
      )
    ) {
      return toast.info('All fields are required');
    }

    if (
      formData.firstname.length < 3 ||
      formData.lastname.length < 3 ||
      !/^[a-zA-Z]+$/.test(formData.firstname) ||
      !/^[a-zA-Z]+$/.test(formData.lastname)
    ) {
      return toast.info('Invalid first name or last name');
    }

    if (!isEmail(formData.email)) {
      return toast.info('Invalid email address');
    }

    if (formData.password !== formData.password2) {
      return toast.info('Passwords do not match');
    }

    if (formData.password.length < 6) {
      return toast.info('Password must be at least 6 characters');
    }

    isSubmiting.value = true;
    const { data } = await axios.post('/auth/signup', formData);

    if (data?.status !== 'success') {
      return toast.error(data?.message ?? 'An error occurred. Please try again later.');
    }

    toast.success(data?.message ?? 'Account created successfully');
    router.push({ name: 'activate-account' });
  } catch (error) {
    toast.error(error?.response?.data?.message ?? 'An error occurred. Please try again later.');
  } finally {
    isSubmiting.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
