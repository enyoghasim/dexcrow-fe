<template>
  <main class="p-5">
    <div class="max-w-[700px] mx-auto">
      <div
        class="image-wrapper w-52 h-52 rounded-full bg-gray-200 cursor-pointer mx-auto relative overflow-hidden"
      >
        <div class="absolute w-full h-full flex items-center justify-center">
          <Edit />
        </div>
      </div>

      <form class="w-full mx-auto md:mt-10 mt-5">
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
          <!-- <div class="">
              <label> Repeat Password </label>
              <div>
                <input
                  v-model="formData.password2"
                  placeholder="Repeat Password"
                  required
                  type="password"
                />
              </div>
            </div> -->
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
import Edit from '@/components/icons/edit.vue';
</script>
