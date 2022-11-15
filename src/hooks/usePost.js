import axios from "axios";
import { useState } from "react";
import { getToken } from "../portal/context/auth/utils";

// default configs
axios.defaults.baseURL = process.env.REACT_APP_API_BASEURL;

const usePost = (props) => {
  const onComplete = props?.onComplete;
  const onError = props?.onError;

  //   const { dispatch } = useContext(AppStateContext);
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState();
  const [loading, setloading] = useState(false);

  const token = getToken();

  const callFn = async (params) => {
    // dispatch({ type: AppStateActionType.START_LOADING });
    setloading(true);
    // params config
    const axiosParams = {
      ...params,
      headers: {
        "x-auth-token": token,
      },
      method: params?.method ? params?.method : "POST",
    };

    try {
      const result = await axios.request({ ...axiosParams });
      setResponse(result);

      if (onComplete && result) {
        onComplete(result);
      }
      return result;
    } catch (err) {
      const typedError = err;
      setError(typedError);

      //   if (typedError.response?.data.data?.code === "TOKEN_EXPIRED") {
      //     user.logout();
      //   } else if (typedError.response?.data.data?.code === "INVALID_TOKEN") {
      //     user.logout();
      //   }

      if (onError && err) {
        onError(typedError);
      }
      return err;
    } finally {
      setloading(false);
      //   dispatch({ type: AppStateActionType.FINISH_LOADING });
    }
  };
  const Opts = {
    error,
    loading,
    response,
  };

  return [callFn, Opts];
};

export default usePost;
