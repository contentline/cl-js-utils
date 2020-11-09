import makeRequest from "../makeRequest";
import { opts, uploadOpts, deleteOpts, updateOpts } from "./types";

class UploaderService {
  url: string;
  csrfToken?: string;
  uploadCancel?: any;

  constructor(public options: opts) {
    this.url = options.url;
    this.csrfToken = options.csrf;
  }

  abortUpload = () => {
    this.uploadCancel && this.uploadCancel();
  };

  uploadImage = async (options: uploadOpts) => {
    try {
      const { file, id, progressHandle, width, height } = options;

      const formData = new FormData();

      formData.append("image_file", file);

      if (id) formData.append("image_id", id);
      if (width) formData.append("width", width);
      if (height) formData.append("height", height);
      if (this.csrfToken)
        formData.append("csrfmiddlewaretoken", this.csrfToken);

      const reqOptions = {
        cancel: (c: any) => {
          this.uploadCancel = c;
        },
        method: "POST",
        headers: this.csrfToken && {
          "X-CSRFToken": this.csrfToken
        },
        body: formData
      };

      const res: any = await makeRequest(this.url, reqOptions, progressHandle);
      const data = JSON.parse(res);

      return data;
    } catch (error) {
      console.error("Upload File Error!!!", error);
    }
  };

  deleteImage = async (options: deleteOpts) => {
    try {
      const { id } = options;

      const headers = {
        "Content-Type": "application/json"
      };

      const reqOptions = {
        method: "DELETE",
        headers: this.csrfToken
          ? {
              ...headers,
              "X-CSRFToken": this.csrfToken
            }
          : headers,
        body: JSON.stringify({ image_id: id })
      };

      const res: any = await makeRequest(this.url, reqOptions);

      return JSON.parse(res);
    } catch (e) {
      console.error(e);
    }
  };

  updateImage = async (options: updateOpts) => {
    try {
      const { id, description } = options;

      const formData = new FormData();

      formData.append("image_id", id);
      formData.append("image_title", description);

      if (this.csrfToken)
        formData.append("csrfmiddlewaretoken", this.csrfToken);

      const reqOptions = {
        method: "POST",
        headers: this.csrfToken && {
          "X-CSRFToken": this.csrfToken
        },
        body: formData
      };

      const res: any = await makeRequest(this.url, reqOptions);

      return JSON.parse(res);
    } catch (e) {
      console.error(e);
    }
  };
}

export default UploaderService;
