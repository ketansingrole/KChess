<template>
  <div
    class="
      flex
      w-1/4
      h-1/2
      overflow-y-scroll overflow-hidden
      m-5
      p-5
      bg-movetablebg
    "
    style="padding-right: 0px; padding-bottom: 20px"
  >
    <table class="table-fixed w-full text-white">
      <tbody>
        <p v-show="false">{{ (inc = 0) }}</p>
        <tr
          v-for="n in Math.round(
            $store.state.boards[boardId].moveList.length / 2
          )"
          :key="n"
        >
          <div v-if="n % 2 === 0" class="bg-movetwo">
            <td class="text-center w-20 border-r border-green-600">
              {{ n }}
            </td>
            <td class="w-32 text-center">
              {{ $store.state.boards[boardId].moveList[inc] }}
            </td>
            <td class="w-32 text-center">
              {{ $store.state.boards[boardId].moveList[inc + 1] }}
            </td>
          </div>
          <div v-else class="bg-moveone">
            <td class="text-center w-20 border-r border-green-600">
              {{ n }}
            </td>
            <td class="w-32 text-center">
              {{ $store.state.boards[boardId].moveList[inc] }}
            </td>
            <td class="w-32 text-center">
              {{ $store.state.boards[boardId].moveList[inc + 1] }}
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
  props: ["boardId"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style>
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
</style>
