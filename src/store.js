import createStore from "redux-zero";
const BOARDS = [
  {
    name: "tes board",
    cards: [
      {
        name: "lp",
        list: ["primero", "segundo"]
      },
      {
        name: "pl",
        list: ["tercer ", "cuarto"]
      }
    ]
  },
  {

    name: "1tes board",
    cards: [
      {
        name: "tes board",
        list: ["tercer ", "cuarto"]
      }
    ]
  },
  {


    name: "2tes board",
    cards: [
      {
        name: "tes board",
        list: ["tercer ", "cuarto"]
      }
    ]
  }
];

const initialState = {
  boards: BOARDS,
  selectItem: -1,
  selectCard: -1
};

const store = createStore(initialState);
export default store;
