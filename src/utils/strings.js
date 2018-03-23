/**
 * Truncate a text by characters (not words)
 * @param {string} text - The text to truncate.
 * @param {number} limit - The number of character to take from the text.
 * @param {boolean} dots - Add "..." at the end of the text when the truncate operation was performed. (default true)
 * @returns {string} The truncate text with total size of limit + 3 for the "..." separator.
 */
export const truncate = (text, limit, dots) => {
  dots = dots === undefined ? true : dots;

  if (text.length > limit) {
    return text.substr(0, limit) + (dots ? "..." : "");
  }

  return text;
};

export const toNumber = string => Number(string.replace(/[^0-9\.-]+/g, ""));
