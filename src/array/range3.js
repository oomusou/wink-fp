export let range3 = begin => end => step => Array.from({ length:(end - begin) / step + 1 }, (_, i) => begin + (i * step))
