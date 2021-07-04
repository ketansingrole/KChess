<template>
  <div class="flex p-10 flex-col">
    <div class="flex items-center justify-center space-x-20">
      <ChessBoard :boardId="0" />
      <MoveTable :boardId="0" />
    </div>
  </div>
</template>

<script>
import ChessBoard from "../components/ChessBoard.vue";
import MoveTable from "../components/MoveTable.vue";

export default {
  data: function() {
    return {
      boardId: 0,
    };
  },
  methods: {},

  components: {
    ChessBoard,
    MoveTable,
  },
};
</script>

<style></style>
