import { decode } from 'he';

// Required to sanitize H5P text field values will be HTML encoded
export const sanitizeRecord = <TRec extends Record<string, string>>(
  record: TRec,
): TRec => {
  const output = record;
  const entries: [keyof typeof record, string][] = Object.entries(record);

  for (const [key, value] of entries) {
    output[key] = decode(value) as TRec[keyof TRec];
  }

  return output;
};
