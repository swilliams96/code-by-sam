export interface ProjectImage {
  /** Whether the image already exists in Firebase storage or not. */
  exists: boolean;

  /** The base64 data string to be uploaded for images that haven't been uploaded yet. */
  data?: string;

  /** The image name for images that already exist, to be used to retrieve the download URL for the image. */
  name?: string;

  /** The URL to download/view the image from Firebase Storage if the image already exists. */
  downloadUrl?: string;
}
