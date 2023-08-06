export function AttachObserver(
  elem: any,
  config: IntersectionObserverInit | undefined,
  callback: IntersectionObserverCallback
) {
  const observer = new IntersectionObserver(callback, config)
  observer.observe(elem)
}

export const BuildThresholdList: Function = () => {
  let thresholds = []
  let numSteps = 100

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps
    thresholds.push(ratio)
  }
  thresholds.push(0)
  return thresholds
}
