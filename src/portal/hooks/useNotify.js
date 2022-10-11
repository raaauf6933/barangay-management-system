import { notification } from "antd";

const useNotify = () => {
  const notify = (type, message, description) =>
    notification[type]({
      message,
      description,
    });

  return notify;
};

export default useNotify;
