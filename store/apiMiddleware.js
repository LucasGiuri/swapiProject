import { API_CALL } from './apiCall'

const apiMiddleware = store => next => async action => {
  const { type, baseActionType, apiCall, onSuccess, ...otherActionProps } = action
  if (type !== API_CALL) {
    return next(action)
  }

  const startType = `${baseActionType}_START`
  const successType = `${baseActionType}_SUCCESS`
  const failType = `${baseActionType}_FAIL`

  next({ ...otherActionProps, type: startType })

  try {
    const result = await apiCall()
    const successActionsParams = onSuccess ? onSuccess(result) : {}
    next({ ...otherActionProps, ...successActionsParams, type: successType })
  } catch (error) {
    next({ ...otherActionProps, error, type: failType })
  }
}

export default apiMiddleware
