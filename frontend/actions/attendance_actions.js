import * as AttendanceAPIUtil from '../util/attendance_api_util';
import {removeEvent, receiveEvent} from './event_actions';

export const createAttendance = (attendance) => (dispatch) => (
  AttendanceAPIUtil.createAttendance(attendance)
    .then(response => dispatch(receiveEvent(response)))
);

export const deleteAttendance = (id) => (dispatch) => (
  AttendanceAPIUtil.deleteAttendance(id)
    .then(response => dispatch(removeEvent(response)))
);
