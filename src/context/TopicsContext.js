import createDataContext from './createDataContext';
import dangerApi from '../api/dangerApi';

const topicsReducer = (state, action) => {
  switch (action.type) {
    case 'get_topics':
      return {...state, topics: action.payload, isLoading: false};
    case 'add_error':
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};

const getTopics = dispatch => async () => {
  try {
    const response = await dangerApi.get('topics');
    dispatch({ type: 'get_topics', payload: response.data});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong fetching topics'
    });
  }
};

export const { Provider, Context } = createDataContext(
  topicsReducer,
  { getTopics },
  { topics: [], isLoading: true}
)
