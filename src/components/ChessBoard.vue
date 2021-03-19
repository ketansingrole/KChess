<template>
  <div class="felx m-5">
    <div
      ref="board"
      class="cg-board-wrap"
      style="width: 520px; height: 520px"
    ></div>
  </div>
</template>

<script>
import Chess from "chess.js";
import { Chessground } from "chessground";

export default {
  name: "chessboard",
  data: function () {
    return {};
  },

  methods: {
    loadPosition() {
      try {
        this.board = Chessground(this.$refs.board, config);
        const config = {
          fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
          coordinates: true,
          // check: true,
          resizable: true,
          drawable: {
            enable: true,
          },
          animation: {
            enabled: true,
          },
        };
        this.board.set(config);
        this.board.set({ movable: { events: { after: this.changeTurn() } } });
        console.log(this.board.getFen());
      } catch (err) {
        console.log(err);
      }
    },
    changeTurn() {
      return (orig, dest, metadata) => {
        let positionBeforeMove = this.board.getFen();
        console.log("turns changed" + orig + " " + dest + " " + metadata);
        console.log("Source: " + orig);
        console.log("Target: " + dest);
        console.log("Old position: " + positionBeforeMove);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        if (this.game.move({ from: orig, to: dest, promotion: "q" }) == null) {
          console.log("illgal move");
        }
          this.board.set({
            fen: this.game.fen(),
          });
        console.log("displaying chess values");
        console.log(this.game.pgn());
        console.log(this.game.fen()); // to fetch standard fen string could be used to pass to stockfish
      };
    },
    myEventHandler(e) {
      // your code for handling resize...
      console.log(e);
      this.board.redrawAll();
    },
  },
  mounted() {
    this.loadPosition();
    this.board.redrawAll();
  },
  created() {
    this.board = null;
    this.game = new Chess();
    window.addEventListener("resize", this.myEventHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.myEventHandler);
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
