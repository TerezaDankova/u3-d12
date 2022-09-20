export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV"
export const GET_JOBS = "GET_JOBS"

export const addToFav = (company) => ({
  type: ADD_TO_FAV,
  payload: company,
});

export const removeFromFav = (company) => ({
  type: REMOVE_FROM_FAV,
  payload: company,
});

export const addToFavoritesWithThunk = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${query}`);
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);

        //  setJobResults(data.data);
        dispatch({
          type: GET_JOBS,
          payload: data,
        });

      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};