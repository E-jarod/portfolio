<script setup lang="ts">
import { onMounted, reactive } from 'vue';

import { updateProfileImage } from './image-saver.utils';

const state = reactive<{ profileImage: string }>({
  profileImage: '',
});

onMounted(async () => {
  state.profileImage = (await updateProfileImage()) ?? '';
});
</script>

<template>
  <figure class="flex items-center justify-between">
    <img
      id="profilePicture"
      width="32"
      height="32"
      class="w-8 h-8 rounded-full"
      :src="state.profileImage"
      alt="profile picture"
    />
    <label class="m-3 text-lg">E-jarod</label>
  </figure>
</template>
