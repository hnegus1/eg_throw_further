import * as React from "react"
import { DateTime } from 'luxon';
import ThrowInfo from '../throwinfo.json';

// markup
const IndexPage = () => {

  const [timeBetween, setTimeBetween] = React.useState();
  const [lastThrow] = React.useState(DateTime.fromISO(ThrowInfo.DateTime))

  const timer = () => {
    const now = DateTime.now();
    const diff = now.diff(lastThrow, ["days", "hours", "minutes", "seconds"]);
    setTimeBetween(diff);
  }
  
  const pluraliseString = (stringToPluralise, value) => {
    if(value !== 1) return stringToPluralise + "s"
    return stringToPluralise;
  }

  React.useEffect(() => {
    const now = DateTime.now();
    const diff = now.diff(lastThrow, ["days", "hours", "minutes", "seconds"]);
    console.log(now);
    console.log(diff);
    console.log(DateTime.fromJSDate(ThrowInfo.DateTime));
    console.log(ThrowInfo.DateTime);
    setInterval(timer, 1000);
  }, [])
  
  
  return (
    <main>
      <title>{lastThrow.toLocaleString(DateTime.DATE_FULL)}</title>
      <div className="dark:text-white text-gray-900">
        <section className="md:container md:mx-auto  text-center pt-60">
            <h1 className="text-5xl md:text-9xl px-2 md:px-0">{lastThrow.toLocaleString(DateTime.DATE_FULL)}</h1>
            <p className="text-xl md:text-4xl px-2 md:px-0 pt-5 md:pt-10">Against {ThrowInfo.Against} at {ThrowInfo.Tournament}</p>
            {
              timeBetween && (
                <p className="text-md md:text-xl px-2 md:px-0 pt-4 md:pt-7">It has been {Math.round(timeBetween.values.days)} {pluraliseString("day", timeBetween.values.days)}, {Math.round(timeBetween.values.hours)} {pluraliseString("hour", timeBetween.values.hours)}, {Math.round(timeBetween.values.minutes)} {pluraliseString("minute", timeBetween.values.minutes)} and {Math.round(timeBetween.values.seconds)} {pluraliseString("second", timeBetween.values.seconds)} since EG last threw.</p>
              )
            }
        </section>
        <footer>
          <p className="text-xs absolute bottom-1 left-1">Did I miss a game? <a className="text-blue-500" href="https://twitter.com/harrynegus" target="_blank" referrer="noref">Let me know!</a></p>
        </footer>
      </div>
    </main>
  )
}

export default IndexPage
