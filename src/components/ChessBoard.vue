<template>
  <div class="felx flex-col space-x-4 space-y-5">
    <div
      ref="board"
      class="cg-board-wrap"
      style="width: 800px; height: 800px"
    ></div>
    <div class="flex items-center justify-center">
      <div class="content-start mr-auto">
        <button
          v-on:click="reset"
          class="bg-redBtn hover:bg-red-700 text-white py-2 px-4 rounded-full "
        >
          Reset
        </button>
      </div>
      <div class="space-x-10">
        <button v-on:click="fastBackward">
          <!-- Fast Backward -->
          <svg
            class="w-8 h-8 fill-current text-white transform rotate-180"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M512 76v360c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V284.1L276.5 440.6c-20.6 17.2-52.5 2.8-52.5-24.6V284.1L52.5 440.6C31.9 457.8 0 443.4 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 226.8V96c0-27.4 31.9-41.7 52.5-24.6L448 226.8V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z"
            ></path>
          </svg>
        </button>
        <button v-on:click="stepBackward">
          <!-- Step Backward -->
          <svg
            class="w-8 h-8 fill-current text-white transform rotate-180"
            viewBox="0 0 448 512"
          >
            <path
              d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"
            ></path>
          </svg>
        </button>
        <button v-on:click="stepForward">
          <!-- Step Forward -->
          <svg class="w-8 h-8 fill-current text-white" viewBox="0 0 448 512">
            <path
              d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"
            ></path>
          </svg>
        </button>
        <button v-on:click="fastForward">
          <!-- Fast Forward -->
          <svg class="w-8 h-8 fill-current text-white " viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M512 76v360c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V284.1L276.5 440.6c-20.6 17.2-52.5 2.8-52.5-24.6V284.1L52.5 440.6C31.9 457.8 0 443.4 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 226.8V96c0-27.4 31.9-41.7 52.5-24.6L448 226.8V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Chess from "chess.js";
import { Chessground } from "chessground";

export default {
  props: ["boardId"],
  name: "chessboard",
  components: {},
  data: function() {
    return {
      boardControlPointer: 0,
    };
  },
  computed: {
    getBoard() {
      return this.$store.state.boards[this.boardId].moveList;
    },
  },
  watch: {
    getBoard() {
      this.boardControlPointer = this.$store.state.boards[
        this.boardId
      ].moveList.length;
      this.board.set({
        fen: this.$store.state.boards[this.boardId].fen,
      });
      this.game.load_pgn(this.$store.state.boards[this.boardId].pgn);
    },
  },
  methods: {
    initializeBoardAndGame() {
      this.logStore(this.boardId);
      this.game = new Chess();
      this.game.load_pgn(this.$store.state.boards[this.boardId].pgn);
      this.board = Chessground(this.$refs.board, config);
      const config = {
        fen: this.$store.state.boards[this.boardId].fen,
        coordinates: true,
        resizable: true,
        drawable: {
          enable: true,
        },
      };
      this.board.set(config);
      this.board.set({ movable: { events: { after: this.makeMove() } } });
      this.logBoardAndGameData("initialization ");
    },
    makeMove() {
      return (orig, dest, metadata) => {
        console.log(orig, dest, metadata);

        if (this.game.move({ from: orig, to: dest, promotion: "q" }) == null) {
          console.log("illgal move");
        }

        this.$store.commit("updateMoveList", this.game.history());
        this.$store.commit("updateFen", this.game.fen());
        this.$store.commit("updatePgn", this.game.pgn());

        this.logBoardAndGameData("makeMove ");

        this.board.redrawAll();
      };
    },

    logBoardAndGameData(prefix) {
      console.log(prefix + "Board Fen: " + this.board.getFen());
      console.log(prefix + "Game Fen: " + this.game.fen());
      console.log(prefix + "Game Pgn: " + this.game.pgn());
      console.log(prefix + "Game History: " + this.game.history());
    },

    logStore(boardId) {
      console.log(
        boardId + " moveList " + this.$store.state.boards[this.boardId].moveList
      );
      console.log(
        boardId + " fen " + this.$store.state.boards[this.boardId].fen
      );
      console.log(
        boardId + " pgn " + this.$store.state.boards[this.boardId].pgn
      );
    },

    myEventHandler(e) {
      // your code for handling resize...
      console.log(e);
      this.board.redrawAll();
    },
    reset() {
      console.log("Reset board");
      this.$store.commit("resetBoard", this.boardId);
    },
    stepBackward() {
      console.log("Step Backward");
      if (this.boardControlPointer > 0) {
        this.temp = new Chess();
        this.boardControlPointer = this.boardControlPointer - 1;
        console.log(this.boardControlPointer);
        for (var i = 0; i < this.boardControlPointer; i++) {
          console.log(this.$store.state.boards[this.boardId].moveList[i]);
          this.temp.move(this.$store.state.boards[this.boardId].moveList[i]);
        }
        this.board.set({
          fen: this.temp.fen(),
        });
      }
    },
    stepForward() {
      console.log("Step Forward");
      if (
        this.boardControlPointer <
        this.$store.state.boards[this.boardId].moveList.length
      ) {
        this.temp = new Chess();
        this.boardControlPointer = this.boardControlPointer + 1;
        console.log(this.boardControlPointer);
        for (var i = 0; i < this.boardControlPointer; i++) {
          console.log(this.$store.state.boards[this.boardId].moveList[i]);
          this.temp.move(this.$store.state.boards[this.boardId].moveList[i]);
        }
        this.board.set({
          fen: this.temp.fen(),
        });
      }
    },
    fastBackward() {
      console.log("Fast Backward");
      this.boardControlPointer = 0;
      this.board.set({
        fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      });
    },
    fastForward() {
      console.log("Fast Forward");
      this.boardControlPointer = this.$store.state.boards[
        this.boardId
      ].moveList.length;
      this.board.set({
        fen: this.$store.state.boards[this.boardId].fen,
      });
    },
  },
  mounted() {
    this.initializeBoardAndGame();
    window.addEventListener("resize", this.myEventHandler);
  },
  created() {},
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
