/* @flow */
import replaceAll from 'replaceall';

const output = (content, target) => {
  switch (typeof target) {
    case 'string':
      return replaceAll(content, '', target);
    case 'number':
      if (typeof content === 'number') {
        return Number(replaceAll(String(content), '', String(target)));
      }
      break;
    default:
      break;
  }
  return target;
};

const remove = (content: string, target: ?string) => {
  if (Object.prototype.toString.call(target) === '[object Array]') {
    const list = target || [];
    const result = [];
    for (let i = 0; i <= list.length - 1; i++) {
      const item = output(content, list[i]);
      result.push(item);
    }
    return result;
  }
  return output(content, target);
};

export default remove;
