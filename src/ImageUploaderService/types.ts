export interface opts {
  url: string;
  csrf: string;
}

export interface uploadOpts {
  file: any;
  id?: string;
  progressHandle?: (e: ProgressEvent) => any;
  width?: string;
  height?: string;
}

export interface deleteOpts {
  id: string;
}

export interface updateOpts {
  id: string;
  description: string;
}
