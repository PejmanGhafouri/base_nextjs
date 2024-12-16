import moment from 'moment-jalaali'
import {isoStringToString, moment2String, string2Moment} from './index'

describe('----- convertIsoStringGregorianToJalaliString or vice versa -----', () => {
  it('gregorian isoString to jalali string', () => {
    const gregorianIsoString = '2021-04-21T00:00:00'
    expect(isoStringToString(gregorianIsoString, true, false)).toEqual(
      '1400/02/01'
    )
  })
  it('gregorian isoString to gregorian string', () => {
    const gregorianIsoString = '2021-04-21T00:00:00'
    expect(isoStringToString(gregorianIsoString, false, false)).toEqual(
      '2021/04/21'
    )
  })
})

describe('----- moment2string -----', () => {
  it('moment to string', () => {
    const date = new Date('2024-09-21T20:30:00.000Z')
    expect(moment2String(moment(date))).toEqual('1403/07/01')
  })
  it('string to moment', () => {
    const text = '1403/07/03'
    expect(string2Moment(text, true, false, '-')).toEqual(
      moment(text, 'jYYYY-jMM-jDD')
    )
  })
})
