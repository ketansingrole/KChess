<template>
  <div class="flex w-1/4 h-1/2 overflow-y-scroll overflow-hidden m-5">
    <table class="table-fixed w-full h-full">
      <!-- <thead class="p-2">
        <tr>
          <th class="p-2 w-1/4"></th>
          <th class="p-2 w-1/2"></th>
          <th class="p-2 w-1/2"></th>
        </tr>
      </thead> -->
      <!-- <thead class="p-2">
      <tr>
        <th class="p-2 w-1/4">Move No.</th>
        <th class="p-2 w-1/2">White Move</th>
        <th class="p-2 w-1/2">Black Move</th>
      </tr>
    </thead> -->
      <tbody class="w-full">
        <p v-show="false">{{ (inc = 0) }}</p>
        <span
          v-for="n in Math.round($store.state.analysisBoardHistory.length / 2)"
          :key="n"
        >
          <tr v-if="n % 2 === 0" class="bg-red-200">
            <td class="text-center w-20 border-r border-green-600">
              {{ n }}
            </td>
            <td class="w-32 text-center">
              {{ $store.state.analysisBoardHistory[inc] }}
            </td>
            <td class="w-32 text-center">
              {{ $store.state.analysisBoardHistory[inc + 1] }}
            </td>

            <p v-show="false">{{ (inc += 2) }}</p>
            <!-- <td class="px-32">{{ (i%2)+1 }}</td> -->
          </tr>
          <tr v-else>
            <td class="text-center w-20 border-r border-green-600">
              {{ n }}
            </td>
            <td class="w-32 text-center">
              {{ $store.state.analysisBoardHistory[inc] }}
            </td>
            <td class="w-32 text-center">
              {{ $store.state.analysisBoardHistory[inc + 1] }}
            </td>

            <p v-show="false">{{ (inc += 2) }}</p>
            <!-- <td class="px-32">{{ (i%2)+1 }}</td> -->
          </tr>
        </span>
        <!-- <tr class="bg-red-200">
          <td class="text-center px-8 border-r border-green-600">2</td>
          <td class="px-32">Nf3</td>
          <td class="px-32">g6</td>
        </tr>
        <tr>
          <td class="text-center px-8 border-r border-green-600">3</td>
          <td class="px-32">g3</td>
          <td class="px-32">Bg7</td>
        </tr> -->
      </tbody>
    </table>
    <!-- <div>
      <span v-for="n in $store.state.analysisBoardHistory" :key="n">{{ n }} </span>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style>
</style>