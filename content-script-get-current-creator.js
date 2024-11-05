if (
  window.ONLYAICODE_AUTHOBJ &&
  window.ONLEYCODE_TOKEN &&
  !window.ONLYAICODE_GET_CURRENT_OF_CREATOR_ACCOUNT_RESULT
) {
  window.ONLYAICODE_GET_CURRENT_OF_CREATOR_ACCOUNT_RESULT = {};

  console.log(' ******* User has launched the extension successfully *******');

  window.ONLYAICODE_headerService.onleyAuthToken = window.ONLEYCODE_TOKEN;

  window.ONLYAICODE_orchestratorController.getOfApiDynamicRules().then(
    (data) => {
      if (data && data.rules) {
        window.ONLYAICODE_headerService.rules = {
          ...window.ONLYAICODE_AUTHOBJ,
          ...data.rules,
        };

        console.log(' ******* Dynamic Rules Successfully Retrieved **');
        window.ONLYAICODE_orchestratorController.getOFCurrentCreatorFullData().subscribe(
          // Once we fetch the Onley creator account from getOFCurrentCreatorFullData we set 
          // ONLYAICODE_GET_CURRENT_OF_CREATOR_ACCOUNT_RESULT globally as the value
          (result) => {
            window.ONLYAICODE_GET_CURRENT_OF_CREATOR_ACCOUNT_RESULT = result;
                        
            console.log('window.ONLYAICODE_GET_CURRENT_OF_CREATOR_ACCOUNT_RESULT:', window.ONLYAICODE_GET_CURRENT_OF_CREATOR_ACCOUNT_RESULT);
          },
          (error) => {
            console.error('Error while executing getOFCurrentCreatorFullData:', error);
          }
        );
        
      } else {
        console.error('Incorrect data from getOfApiDynamicRules:', data);
      }
    },
  ).catch((error) => {
    console.error('Error while executing getOfApiDynamicRules:', error);
  });
}