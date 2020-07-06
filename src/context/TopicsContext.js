import createDataContext from './createDataContext';
import dangerApi from '../api/dangerApi';

const topicsReducer = (state, action) => {
  switch (action.type) {
    case 'get_topics':
      return {...state, topics: action.payload, isLoading: false};
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'find_topic':
      return {
        ...state,
        activeTopic: state.topics.find(topic => topic.id === parseInt(action.payload))
      };
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

const findTopic = dispatch => (id) => {
  dispatch({ type: 'find_topic', payload: id})
};

export const { Provider, Context } = createDataContext(
  topicsReducer,
  { getTopics, findTopic },
  { topics: [], isLoading: true, activeTopic: null}
);
