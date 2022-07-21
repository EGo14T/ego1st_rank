/* eslint import/prefer-default-export: off, import/no-mutable-exports: off */
import { URL } from 'url';
import path from 'path';

export let resolveHtmlPath: (htmlFileName: string) => string;

if (process.env.NODE_ENV === 'development') {
  const port = process.env.PORT || 1212;
  resolveHtmlPath = (htmlFileName: string) => {
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  };
} else {
  resolveHtmlPath = (htmlFileName: string) => {
    return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
  };
}

// 段位fmt
export const tierFmt = (tier: string) => {
  switch (tier) {
    case 'CHALLENGER':
      return '王者';
    case 'GRANDMASTER':
      return '宗师';
    case 'MASTER':
      return '大师';
    case 'DIAMOND':
      return '钻石';
    case 'PLATINUM':
      return '铂金';
    case 'GOLD':
      return '黄金';
    case 'SILVER':
      return '白银';
    case 'BRONZE':
      return '青铜';
    case 'IRON':
      return '黑铁';
    default:
      return '黑铁';
  }
};
