interface CountriesDetailsResponse {
  data: string[];
}
interface CountriesTimezoneResponse {
  abbreviation: string;
  clientIp: string;
  datetime: string;
  dayOfWeek: number;
  dayOfYear: number;
  dst: boolean;
  dstFrom: string | null;
  dstOffset: number;
  dstUntil: string | null;
  rawOffset: number;
  timezone: string;
  unixtime: number;
  utcDatetime: string;
  utcOffset: string;
  weekNumber: number;
}
