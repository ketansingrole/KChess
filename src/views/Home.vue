<template>
  <div class="flex w-screen items-center justify-center">
    <ChessBoard />
    <MoveTable />
  </div>
</template>

<script>
import ChessBoard from "../components/ChessBoard.vue";
import MoveTable from "../components/MoveTable.vue";
export default {
  components: {
    ChessBoard,
    MoveTable,
  },
};
</script>

<style>
</style>