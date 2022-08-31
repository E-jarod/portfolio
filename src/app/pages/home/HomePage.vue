<template>
  <div class="flex flex-col items-stretch justify-center flex-grow w-full">
    <h1
      class="text-4xl font-extrabold tracking-tight text-center text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
    >
      Jarod Ejilane,<br />
      the
      <span class="text-red-500 dark:text-red-400">JavaScript</span
      ><br class="lg:hidden" />
      Developer you need
    </h1>

    <p
      class="max-w-3xl mx-auto mt-6 text-lg text-center text-slate-600 dark:text-slate-400"
    >
      Full-stack
      <span class="font-bold text-red-500 dark:text-red-400"
        >TypeScript</span
      >
      &
      <span class="font-bold text-sky-500 dark:text-sky-400">Flutter</span>
      Developer,<br />
      <span class="font-bold">Freelancer</span> and
      <span class="font-bold">DevFamily</span> co-founder.
    </p>
    <div class="flex justify-center mt-6 space-x-6 text-sm sm:mt-10">
      <router-link
        class="flex items-center justify-center w-40 h-12 px-0 font-semibold text-white rounded-2xl bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-48 md:w-60 sm:px-6 dark:bg-red-500 dark:highlight-white/20 dark:hover:bg-red-400"
        to="/skills"
      >
        See my projects
      </router-link>
      <a
        class="flex items-center justify-center w-40 h-12 px-0 font-semibold bg-white shadow-sm rounded-2xl sm:px-6 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-400 sm:w-44 md:w-52 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
        href="https://devfamily.fr/"
        target="_blank"
        rel="noopener noreferer"
      >
        DevFamily
      </a>
    </div>
  </div>
</template>
