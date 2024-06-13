<template>
  <aside
    :class="`bg-white fixed top-0 transition-all duration-100 left-0 bottom-0 w-52 z-20 pt-0 border-r overflow-y-auto ${isSidebarOpened ? 'translate-x-0' : '-translate-x-full'}`"
  >
    <nav class="flex flex-col gap-10 h-full">
      <div class="sticky bg-white top-0 p-5 border-b h-20">
        <button
          @click="generalStore.toggleSidebar"
          class="outline-none p-2 bg-transparent w-fit hover:bg-gray-100"
        >
          <SidebarIcon />
        </button>
      </div>
      <div class="flex flex-col gap-3 justify-between h-full px-5 pb-5">
        <ul class="flex flex-col gap-3">
          <li>
            <router-link
              :to="{
                name: 'overview',
              }"
              class="flex flex-row items-center space-x-1 p-2 rounded-md hover:bg-gray-100"
            >
              <House class="w-[20px] h-[20px]" />
              <span class="text-sm">Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'overview',
              }"
              class="flex flex-row items-center space-x-1 p-2 rounded-md hover:bg-gray-100"
            >
              <Deal class="w-[20px] h-[20px]" />
              <span class="text-sm">Deals</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'overview',
              }"
              class="flex flex-row items-center space-x-1 p-2 rounded-md hover:bg-gray-100"
            >
              <Wallet class="w-[20px] h-[20px]" />
              <span class="text-sm">My Wallet</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'overview',
              }"
              class="flex flex-row items-center space-x-1 p-2 rounded-md hover:bg-gray-100"
            >
              <Exchange class="w-[20px] h-[20px]" />
              <span class="text-sm">Exchange</span>
            </router-link>
          </li>
        </ul>
        <ul class="flex flex-col gap-3">
          <li>
            <router-link
              :to="{
                name: 'overview',
              }"
              class="flex flex-row items-center space-x-1 p-2 rounded-md hover:bg-gray-100"
            >
              <User class="w-[20px] h-[20px]" />
              <span class="text-sm">Profile</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'overview',
              }"
              class="flex flex-row items-center space-x-1 p-2 rounded-md hover:bg-gray-100"
            >
              <Gear class="w-[20px] h-[20px]" />
              <span class="text-sm">Settings</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'overview',
              }"
              class="flex flex-row items-center space-x-1 p-2 rounded-md hover:bg-gray-100"
            >
              <Logout class="w-[20px] h-[20px] rotate-180" />
              <span class="text-sm">Logout</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import House from '@/components/icons/house.vue';
import Wallet from '@/components/icons/wallet.vue';
import Exchange from '@/components/icons/exchange.vue';
import Deal from '@/components/icons/deal.vue';
import Gear from '@/components/icons/gear.vue';
import User from '@/components/icons/user.vue';
import Logout from '@/components/icons/logout.vue';
import SidebarIcon from '@/components/icons/sidebar-icon.vue';
import useGeneralStore from '@/stores/general';
import { storeToRefs } from 'pinia';

const generalStore = useGeneralStore();

const { isSidebarOpened } = storeToRefs(generalStore);
</script>
