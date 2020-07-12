let output: string = "";

function createTabWithSize(size: number) {
  let tab = "";
  for (let i = 0; i < size; i++) {
    tab += " ";
  }

  return tab;
}

function beautifyJson(
  json: any,
  depthTab: string,
  tab: string,
  showKey: boolean = true
) {
  const keys = Object.keys(json);
  const length = keys.length - 1;

  keys.map((key, index) => {
    const value = json[key];

    if (typeof value === "string") {
      if (showKey) {
        output += `${depthTab}"${key}": "${value}"`;
      } else {
        output += `${depthTab}"${value}"`;
      }
      output += `${length === index ? "" : ",\n"}`;
    } else if (typeof value === "number") {
      if (showKey) {
        output += `${depthTab}"${key}": ${value}`;
      } else {
        output += `${depthTab}${value}`;
      }
      output += `${length === index ? "" : ",\n"}`;
    } else if (value instanceof Array) {
      if (showKey) {
        output += `${depthTab}"${key}": [\n`;
      } else {
        output += `${depthTab}[\n`;
      }
      beautifyJson(value, depthTab + tab, tab, false);
      output += `\n${depthTab}]${length === index ? "" : ",\n"}`;
    } else {
      if (showKey) {
        output += `${depthTab}"${key}": {\n`;
      } else {
        output += `${depthTab}{\n`;
      }
      beautifyJson(value, depthTab + tab, tab);
      output += `\n${depthTab}}${length === index ? "" : ",\n"}`;
    }
  });
}

export function getBeautifulJson(json: any, tabSize: number) {
  const tab = createTabWithSize(tabSize);

  output = "{\n";
  beautifyJson(json, tab, tab);
  output += "\n}";

  return output;
}
