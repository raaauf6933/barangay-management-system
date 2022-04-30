function createDialogAcitonHandlers(navigate, url, params) {
  const close = () => {
    navigate(url({ ...params, action: undefined }));
  };

  const open = (action, newParams) => {
    navigate(
      url({
        action,
        ...params,
        ...newParams,
      })
    );
  };

  return [open, close];
}

export default createDialogAcitonHandlers;
