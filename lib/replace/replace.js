/* @flow */
import replaceAll from 'replaceall';

const output = (content, newContent, target) => {
  switch (typeof target) {
    case 'string':
      return replaceAll(content, newContent, target);
    case 'number':
      if (typeof content === 'number') {
        return Number(replaceAll(String(content), String(newContent), String(target)));
      }
      break;
    default:
      break;
  }
  return target;
};

const replace = (content: string, newContent: string, target: ?string) => {
  if (Object.prototype.toString.call(target) === '[object Array]') {
    const list = target || [];
    const result = [];
    for (let i = 0; i <= list.length - 1; i++) {
      const item = output(content, newContent, list[i]);
      result.push(item);
    }
    return result;
  }
  return output(content, newContent, target);
};

export default replace;
