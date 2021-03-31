<template>
  <div class="flex w-1/4 h-1/2 overflow-y-scroll overflow-hidden m-5">
    <table class="table-fixed w-full">
      <tbody>
        <p v-show="false">{{ (inc = 0) }}</p>
        <tr
          v-for="n in Math.round(
            $store.state.analysisBoardData.moveList.length / 2
          )"
          :key="n"
        >
          <div v-if="n % 2 === 0" class="bg-red-200">
            <td class="text-center w-20 border-r border-green-600">
              {{ n }}
            </td>
            <td class="w-32 text-center">
              {{ $store.state.analysisBoardData.moveList[inc] }}
            </td>
            <td class="w-32 text-center">
              {{ $store.state.analysisBoardData.moveList[inc + 1] }}
            </td>
          </div>
          <div v-else>
            <td class="text-center w-20 border-r border-green-600">
              {{ n }}
            </td>
            <td class="w-32 text-center">
              {{ $store.state.analysisBoardData.moveList[inc] }}
            </td>
            <td class="w-32 text-center">
              {{ $store.state.analysisBoardData.moveList[inc + 1] }}
            </td>
          </div>
          <p v-show="false">{{ (inc += 2) }}</p>
        </tr>
      </tbody>
    </table>
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