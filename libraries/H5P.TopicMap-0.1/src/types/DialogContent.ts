import type { H5PAudio, H5PVideo } from 'h5p-types';
import { Link } from './Link';

export type DialogContent = {
  hasNote: boolean;
  links?: Array<Link>;
  showAddLinks: boolean;
  maxLength?: number;
  text?: string;
  video?: Array<H5PVideo>;
  audio?: {
    /**
     * "Optional" because we can't force the user
     * to add a file, therefore there's an off-chance
     * that the value will be nullish
     *  */
    audioFile?: Array<H5PAudio>;
    subtext?: string;
  };
};
