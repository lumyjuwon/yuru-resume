import { JsonNode } from "./jsonNode";

let output: string = "";

function createTabWithSize(size: number) {
  let tab = "";
  for (let i = 0; i < size; i++) {
    tab += " ";
  }

  return tab;
}

function beautify(node: JsonNode, depthTab: string, tab: string) {
  const child = node.getChild();
  const childLength = child?.length - 1;

  child?.forEach((childNode: JsonNode, index: number) => {
    const childValue = childNode.getValue();

    if (childValue !== undefined) {
      if (childValue instanceof Array) {
        // Open Array
        output += `${depthTab}"${childNode.getKey()}": [\n`;

        const childValueLength = childValue.length - 1;
        childValue.map((childValueNode, index) => {
          if (childValueNode instanceof JsonNode) {
            const childValueNodeTabSize = depthTab + tab;
            output += `${childValueNodeTabSize}{\n`;
            beautify(childValueNode, childValueNodeTabSize + tab, tab);
            output += `\n${childValueNodeTabSize}}`;
          } else if (typeof childValueNode === "string") {
            output += `${depthTab}${depthTab}"${childValueNode}"`;
          } else if (typeof childValueNode === "number") {
            output += `${depthTab}${depthTab}${childValueNode}`;
          }
          output += childValueLength == index ? "" : ",\n";
        });

        // Close Array
        output += `\n${depthTab}]${childLength == index ? "" : ",\n"}`;
      } else {
        output +=
          `${depthTab}"${childNode.getKey()}": "${childNode.getValue()}"` +
          (childLength == index ? "" : ",\n");
      }
    } else {
      // Open Json
      output += `${depthTab}"${childNode.getKey()}": {\n`;

      beautify(childNode, depthTab + tab, tab);

      // Close Json
      output += `\n${depthTab}}${childLength == index ? "" : ",\n"}`;
    }
  });
}

export function JsonBeautify(node: JsonNode, tabSize: number): string {
  const tab = createTabWithSize(tabSize);

  output = "{\n";
  beautify(node, tab, tab);
  output += "\n}";

  return output;
}

// export function minifyJson(node: JsonNode, tabSize: number): void {
//   const tab = createTabWithSize(tabSize);

//   const child = node.getChild();
//   const length = child?.length - 1;

//   child?.forEach((node: JsonNode, index: number) => {
//     if (node.getValue()) {
//       output +=
//         `"${node.getKey()}":"${node.getValue()}"` +
//         (length == index ? "" : ",");
//     } else {
//       output += `"${node.getKey()}":{`;
//       this.minify(node);
//       output += "}" + (length == index ? "" : ",");
//     }
//   });
// }
