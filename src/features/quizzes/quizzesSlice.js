import { createSlice } from "@reduxjs/toolkit";
import {addQuizToTopic} from '../topics/topicsSlice';

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const {id, name, topicId, cardIds} = action.payload;
      state.quizzes[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      }
    }
  }
});

export const thunkAddQuiz = (quiz) => {
  const {id, topicId} = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizToTopic({topicId: topicId, quizId: id}));
  }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const {addQuiz} = quizzesSlice.actions;

export default quizzesSlice.reducer;

