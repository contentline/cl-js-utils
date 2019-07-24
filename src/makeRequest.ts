const makeRequest = (
  url: string,
  opts: any = {},
  onProgress?: (e: ProgressEvent) => any
) =>
  new Promise((res, rej) => {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open(opts.method || "GET", url);
    for (let k in opts.headers || {}) xhr.setRequestHeader(k, opts.headers[k]);
    xhr.onload = (e: any) => res(e.target.responseText as string);
    xhr.onerror = rej;
    if (xhr.upload && onProgress) {
      xhr.upload.onprogress = onProgress;
    }
    if (opts.cancel) {
      opts.cancel(xhr.abort);
    }

    xhr.send(opts.body);
  });

export default makeRequest;
