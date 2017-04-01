/* @flow */

const output = (content, target, atBeginning) => {
  switch (typeof target) {
    case 'string':
      switch (atBeginning) {
        case true:
          return `${content}${target}`;
        default:
          return `${target}${content}`;
      }
    case 'number':
      if (typeof content === 'number') {
        switch (atBeginning) {
          case true:
            return Number(`${content}${target}`);
          default:
            return Number(`${target}${content}`);
        }
      }
      break;
    default:
      break;
  }
  return target;
};

const add = (content: string, target: ?string, atBeginning: boolean = true) => {
  if (Object.prototype.toString.call(target) === '[object Array]') {
    const list = target || [];
    const result = [];
    for (let i = 0; i <= list.length - 1; i++) {
      const item = output(content, list[i], atBeginning);
      result.push(item);
    }
    return result;
  }
  return output(content, target, atBeginning);
};

export default add;
