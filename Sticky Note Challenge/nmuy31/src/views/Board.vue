<template>
  <div>
    <h1 class="mt-5 text-2xl" :style="{ fontFamily: fontFamily }">
      Sticky Notes
    </h1>
    <select
      v-model="fontFamily"
      class="float-right mr-8 border-none outline-none rounded h-7"
    >
      <option>Reenie Beanie</option>
      <option>Cedarville Cursive</option>
      <option>Dancing Script</option>
      <option>Great Vibes</option>
      <option>Montez</option>
      <option>Mr Bedfort</option>
      <option>Mr De Haviland</option>
      <option>Redressed</option>
      <option>Rock Salt</option>
      <option>Sacramento</option>
      <option>Sofia</option>
    </select>
    <div class="board py-28 px-8">
      <button
        class="floating__btn cursor-pointer flex text-6xl h-16 fixed right-0 bottom-0 text-white w-16"
        @click="addNote()"
      >
        +
      </button>
      <draggable :list="notes" :animation="200" group="notes">
        <div
          class="note block float-left mt-0 ml-0 mr-8 mb-8 p-4 relative cursor-move"
          v-for="(note, index) in notes"
          :key="index"
          :style="getColor()"
        >
          <a
            class="button remove flex items-center justify-center h-8 absolute text-white w-8"
            @click="removeNote(index)"
            >x</a
          >
          <div class="note_cnt text-xl">
            <textarea
              class="cnt bg-transparent p-1 resize-y w-full outline-none"
              placeholder="Enter note description here"
              v-model="note.description"
              :style="{ fontFamily: fontFamily }"
            ></textarea>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Note } from "../types/note";
import { VueDraggableNext } from "vue-draggable-next";
export default defineComponent({
  name: "Board",
  components: {
    draggable: VueDraggableNext,
  },
  setup() {
    const notes = ref([
      {
        description: "",
        createdAt: new Date(),
      },
    ] as Array<Note>);
    const fontFamily = ref("Redressed");
    const addNote = (): void => {
      notes.value.push({
        description: "",
        createdAt: new Date(),
      });
    };
    const removeNote = (index: number): void => {
      notes.value.splice(index, 1);
    };
    const getColor = (): { backgroundColor: string } => {
      const colors = ["#fffd75"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        backgroundColor: color,
      };
    };
    return {
      notes,
      fontFamily,
      addNote,
      removeNote,
      getColor,
    };
  },
});
</script>

<style scoped>
::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.7);
}
:placeholder {
  color: rgba(0, 0, 0, 0.7);
}
h1 {
  margin-top: 1em;
  margin-bottom: 0.5em;
}
.note {
  width: 280px;
  min-height: 300px;
  box-shadow: 5px 5px 10px -2px rgba(33, 33, 33, 0.3);
  transform: skew(-1deg, 1deg);
  transition: transform 0.15s;
  z-index: 1;
  margin-top: 20px;
  margin-left: 20px;
}
.note textarea.cnt {
  min-height: 300px;
  min-width: 250px;
  outline: none;
  border: none;
  background-color: inherit;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
}
.button.remove {
  top: 5px;
  float: right;
  margin-top: 5px;
  margin-right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 60%;
  background-color: #e01c12;
  border-color: #b30000;
  color: white;
  font-weight: bolder;
  font-family: Helvetica, Arial, sans-serif;
}
.button.remove:hover {
  background-color: #ef0005;
  cursor: pointer;
}
.floating__btn {
  background-color: #00b5bb !important;
  border-radius: 50%;
  border: none !important;
  box-shadow: 0 0 4px rgb(0 0 0 / 14%), 0 4px 8px rgb(0 0 0 / 28%);
  z-index: 998;
  outline: none;
  bottom: 0 !important;
  right: 0 !important;
  color: white;
  margin-left: 90%;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 45px;
  font-weight: bold;
}
.floating__btn:hover {
  cursor: pointer;
}
</style>