<template>
  <div class="blue merida">
    <div ref="board" class="cg-board-wrap"></div>
  </div>
</template>

<script>
import Chess from "chess.js";
import { Chessground } from "chessground";

export default {
  name: "chessboard",
  data: function () {
    return {
      
    };
  },

  methods: {
    loadPosition(){

      const config = {
        fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      };

      const ground = Chessground(this.$refs.board, config);

      console.log(ground.getFen());
    }
  },
  mounted() {
    this.loadPosition();
  },
  created() {
    this.game = new Chess();
    this.board = null;
    this.promotions = [];
    this.promoteTo = "q";
  },
};
</script>

<style scoped>
/* @import url("/node_modules/chessground/assets/chessground.base.css");
@import url("/node_modules/chessground/assets/chessground.brown.css");
@import url("/node_modules/chessground/assets/chessground.cburnett.css"); */
@import url("./style/theme.css");
@import url("./style/chessground.base.css");
@import url("./style/chessground.brown.css");
@import url("./style/chessground.cburnett.css");
</style>
