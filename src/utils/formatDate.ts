import moment = require('moment');
import { DateFormat, dateFormatMap } from '../models/general';

export const formatDate = (date: string | number, format: DateFormat) => date ? moment(date).format(dateFormatMap[format]) : null;
