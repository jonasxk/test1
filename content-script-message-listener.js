(async () => {
  window.ONLYAICODE_stop = () => {
    window.ONLYAICODE_ISWEBSOCKETCONNECTED = false;
    window.ONLYAICODE_ISWEBSOCKETCONNECTED_SUCCESS = false;
    console.log(' ******* AI Chat has been Stopped **');

    if (window.ONLYAICODE_currentFetch) {
      window.ONLYAICODE_currentFetch.abort();
    }
  };

  if (window.ONLYAICODE_AUTHOBJ && !window.ONLYAICODE_ISWEBSOCKETCONNECTED) {
    const controller = new AbortController();
    window.ONLYAICODE_currentFetch = controller;

    window.ONLYAICODE_orchestratorController.startChatFromCoreLibrary()
        .subscribe(
          (result) => {
          },
          (error) => {
            console.error('Error listening to live messages:', error);
            window.ONLYAICODE_ISWEBSOCKETCONNECTED = false;
          },
          () => {
            console.log('AI Chat connection has ended');
            window.ONLYAICODE_ISWEBSOCKETCONNECTED = false;
          }
      );
  }
  return window.ONLYAICODE_ISWEBSOCKETCONNECTED;
})();
