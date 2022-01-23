<script setup lang="ts">
import { onMounted, reactive } from 'vue';

const state = reactive({
  profileImage: '',
});

const updateProfileImage = async (sizeInPixels = 48): Promise<string> => {
  const { url } = await fetch(
    `https://avatars.githubusercontent.com/E-jarod?size=${sizeInPixels}`,
  );
  return url ?? '';
};

onMounted(async () => {
  state.profileImage = await updateProfileImage();
});
</script>

<template>
  <figure class="flex items-center justify-between">
    <img
      class="rounded-full h-8 w-8"
      :src="state.profileImage"
      alt="img"
    />
    <label class="m-3 text-lg">E-jarod</label>
  </figure>
</template>
