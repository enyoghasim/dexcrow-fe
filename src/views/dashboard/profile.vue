<template>
  <main class="">
    <div class="cover-wrapper">
      <div class="cover bg-gray-300 w-full max-w-[1700px] md:h-52 h-36 mx-auto"></div>
    </div>
    <div class="max-w-[700px] mx-auto p-5">
      <div class="flex flex-row items-center justify-between md:-mt-[4rem] -mt-[3rem]">
        <div class="flex flex-col">
          <div
            class="image-wrapper md:w-40 md:h-40 w-32 h-32 rounded-full border-4 border-black bg-gray-200 cursor-pointer relative overflow-hidden"
          ></div>
          <div class="mt-3 flex flex-row items-center gap-1">
            <h2 class="font-bold font-poppins lg:text-2xl md:text-xl text-base">
              {{ user?.firstname }} {{ user?.lastname }}
            </h2>
            <span v-if="user.isKycVerified" class="cursor-pointer"><Check class="w-4 h-4" /></span>
          </div>
        </div>
        <button class="flex flex-row items-center gap-1 p-2 rounded-xl w-auto">
          <Edit class="w-4 h-4" />
          <span class="text-sm">Edit profile</span>
        </button>
      </div>

      <!-- <form class="w-full mx-auto md:mt-10 mt-5">
        <div class="flex flex-col gap-5">
          <div class="form-item">
            <label> Name </label>
            <div class="flex md:flex-row gap-3 w-full">
              <div class="w-full">
                <input placeholder="Firstname" required type="text" />
              </div>
              <div class="w-full">
                <input placeholder="Lastname" required type="text" />
              </div>
            </div>
          </div>
          <div class="">
            <label> Email </label>
            <div>
              <input placeholder="Email" required type="email" />
            </div>
          </div>
          <div class="">
            <label> Password </label>
            <div>
              <input placeholder="Password" required type="password" />
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
      </form> -->
    </div>
  </main>
</template>

<script setup>
import Edit from '@/components/icons/edit.vue';
import useAuthStore from '@/stores/auth';
import { storeToRefs } from 'pinia';
import Check from '@/components/icons/check.vue';

const authStore = useAuthStore();

const { user } = storeToRefs(authStore);
</script>
