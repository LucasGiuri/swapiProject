export const API_CALL = 'API_CALL'

const apiCall = (baseActionType, apiCall, onSuccess, otherActionProps) => {
  return {
    type: API_CALL,
    baseActionType,
    apiCall,
    onSuccess,
    ...otherActionProps
  }
}

export default apiCall
