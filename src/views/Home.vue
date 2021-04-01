<template>
  <div class="flex w-screen h-screen items-center justify-center">
    <ChessBoard :boardId="0" />
    <MoveTable :boardId="boardId" />
  </div>
</template>

<script>
import ChessBoard from "../components/ChessBoard.vue";
import MoveTable from "../components/MoveTable.vue";
export default {
  data: function () {
    return {
      boardId: 0,
    };
  },
  methods: {
    created() {
      // this.gameData = null;
      // gameDataVal = this.$store.state.analysisBoardData;
    },
  },

  components: {
    ChessBoard,
    MoveTable,
  },
};
</script>

<style>
</style>