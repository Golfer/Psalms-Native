import types from './actionTypes'

export const createNotificationSuccess = (notification) => ({type: types.CREATE_NOTIFICATION_SUCCESS, notification});
export const destroyNotificationSuccess = (index) => ({type: types.DESTROY_NOTIFICATION_SUCCESS, index});

export const createNotification = (notification) => (dispatch) => dispatch(createNotificationSuccess(notification));
export const destroyNotification = (index) => (dispatch) => dispatch(destroyNotificationSuccess(index));
