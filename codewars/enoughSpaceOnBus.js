let enough=(cap, on, wait) => (cap-on)-wait >= 0 ? 0 : Math.abs((cap-on)-wait)
