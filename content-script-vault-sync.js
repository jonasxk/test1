(() => {
  const windowRef = window;
  if (
    windowRef.ONLYAICODE_AUTHOBJ &&
    windowRef.ONLEYCODE_TOKEN &&
    !windowRef.ONLYAICODE_ALREADY_FETCHING
  ) {
    const maxDateToCheck = new Date();
    maxDateToCheck.setDate(maxDateToCheck.getDate() - 30);

    console.log(' ******* Media / Vault Sync has Started **');
    
    windowRef.ONLYAICODE_ALREADY_FETCHING =
      windowRef.ONLYAICODE_orchestratorController.fetchFromDateAsPromise(
        maxDateToCheck,
        '🤖',
      ).finally(() => {
        windowRef.ONLYAICODE_ALREADY_FETCHING = false;
      });
  }
  return windowRef.ONLYAICODE_ALREADY_FETCHING;
})();
