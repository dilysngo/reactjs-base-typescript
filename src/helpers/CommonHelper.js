import roundTo from 'round-to'
import momentTimezone from 'moment-timezone'

const isMobile = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if (isMobile) {
    return true
  }
  return false
}

const removeEmpty = (obj) =>
  Object.entries(obj)
    .map(([k, v]) => [k, v && typeof v === 'object' ? removeEmpty(v) : v])
    .reduce((a, [k, v]) => (v == null || v == undefined || v == '' ? a : ((a[k] = v), a)), {})

function roundNumber(n, scale = 3) {
  if (!n) return 0
  if (+n > 1e17) return Math.round(+n)
  const num = typeof +n !== 'number' ? 0 : parseFloat(n)
  if (!('' + num).includes('e')) {
    return +(Math.floor(num + 'e+' + scale) + 'e-' + scale)
  } else {
    var arr = ('' + num).split('e')
    var sig = ''
    if (+arr[1] + scale > 0) {
      sig = '+'
    }
    return +(Math.floor(+arr[0] + 'e' + sig + (+arr[1] + scale)) + 'e-' + scale)
  }
}

function formatNumber(nb, scale = 3) {
  let n = roundTo.up(parseFloat(nb), scale)

  let sign = +n < 0 ? '-' : ''
  let toStr = n.toString()
  if (!/e/i.test(toStr)) {
    return n
  }
  let [lead, decimal, pow] = n
    .toString()
    .replace(/^-/, '')
    .replace(/^([0-9]+)(e.*)/, '$1.$2')
    .split(/e|\./)
  return +pow < 0
    ? sign + '0.' + '0'.repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal
    : sign +
        lead +
        (+pow >= decimal.length
          ? decimal + '0'.repeat(Math.max(+pow - decimal.length || 0, 0))
          : decimal.slice(0, +pow) + '.' + decimal.slice(+pow))
}

const formatDate = (date, format = 'HH:mm DD/MM/YYYY') => {
  // const country = JSON.parse(localStorage.getItem("userInfo"));
  const country = 'Asia/Ho_Chi_Minh'
  if (date) {
    const tz = momentTimezone(date)
    const time = tz.tz(country).format(format)
    return time
  }
  return ''
}

const formatCode = (text, start, end, concat = '...') => {
  if (!text) return text
  const total = start + end
  const length = text.length
  if (total >= length) {
    return text
  }
  return [text.slice(0, start), text.slice(length - end)].join(concat)
}

export { isMobile, removeEmpty, roundNumber, formatNumber, formatDate, formatCode }
