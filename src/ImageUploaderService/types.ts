export interface opts {
  url: string;
  csrf: string;
}

export interface uploadOpts {
  file: any;
  id?: string;
  progressHandle?: (e: ProgressEvent) => any;
}

export interface deleteOpts {
  id: string;
}

export interface updateOpts {
  id: string;
  description: string;
}
