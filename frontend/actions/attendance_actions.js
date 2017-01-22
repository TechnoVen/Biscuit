import * as AttendanceAPIUtil from '../util/attendance_api_util';
import {removeEvent} from './event_actions';
import {receiveCity} from './city_actions';

export const createAttendance = (attendance) => (dispatch) => (
  AttendanceAPIUtil.createAttendance(attendance)
    .then(response => dispatch(receiveCity(response)))
);

export const deleteAttendance = (id) => (dispatch) => (
  AttendanceAPIUtil.deleteAttendance(id)
    .then(response => dispatch(removeEvent(response)))
);
