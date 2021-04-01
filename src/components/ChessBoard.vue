<template>
  <div class="felx m-5">
    <!-- {{ boardId }} -->
    <div
      ref="board"
      class="cg-board-wrap"
      style="width: 800px; height: 800px"
    ></div>
  </div>
</template>

<script>
import Chess from "chess.js";
import { Chessground } from "chessground";

export default {
  props: ["boardId"],
  name: "chessboard",
  data: function () {
    return {};
  },

  methods: {
    loadPosition() {
      console.log("load position fen" + this.$store.state.boards[this.boardId].fen);
      try {
        this.board = Chessground(this.$refs.board, config);
        const config = {
          fen: this.$store.state.boards[this.boardId].fen,
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
        console.log("this.game.pgn " + this.game.pgn());
        console.log("this.game.fen " + this.game.fen()); // to fetch standard fen string could be used to pass to stockfish

        console.log("this.game.history" + this.game.history());

        this.$store.commit("updateMoveList", this.game.history());
        this.$store.commit("updateFen", this.game.fen());
        this.$store.commit("updatePgn", this.game.pgn());
        this.board.redrawAll();
        console.log("store.fen" + this.$store.state.boards[this.boardId].fen);
        console.log("store.pgn" + this.$store.state.boards[this.boardId].pgn);
        console.log(
          "store.history" + this.$store.state.boards[this.boardId].moveList
        );
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
    if (this.$store.state.boards[this.boardId].pgn) {
      this.game.load_pgn(this.$store.state.boards[this.boardId].pgn);
    }
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
